import {DataBase} from 'Libs/DataBase';
import FLV from 'Libs/flv';

/**
 * Author: DrowsyFlesh
 * Create: 2018/11/12
 * Description:
 */
import _ from 'lodash';
import $ from 'jquery';
import React from 'react';
import styled from 'styled-components';
import {theme} from 'Styles';
import {FlvContainer} from 'Libs/FlvContainer';

const {color} = theme;

const Title = styled.div.attrs({className: 'bilibili-helper-video-download-title'})`
  width: 100%;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  .count {
    margin-left: 10px;
    color: ${color('google-grey-500')};
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LinkGroup = styled.div`
  position: relative;
  display: inline-block;
  margin: 4px;
  padding: 3px;
  border-radius: 3px;
  font-size: 12px;
  font-style: normal;
  letter-spacing: 0.3px;
  background-color: #eaf4ff;
  transition: all 0.3s, visibility 0s;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    background-color: #d4eaff;
  }
  a {
    padding: 0 8px;
    border-right: 1px solid #fff;
    color: #00a1d6;
    &:hover {
      color: #004c65;
    }
    &:last-of-type {
      border: none;
    }
  }
`;
const LinkGroupTitle = styled.span`
  display: inline-block;
  padding: 0 8px;
  border-right: 1px solid #fff;
  p {
    color: ${color('google-grey-900')};
    font-size: 12px;
  }
  cursor: pointer;
`;
const Suggest = styled.p`
  margin-bottom: 6px;
  margin-left: 5px;
  font-size: 10px;
  color: ${color('bilibili-pink')};
`;
const Progress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({percentage}) => percentage + '%'};
  height: 2px;
  background-color: ${color('bilibili-blue')};
  transition: all 0.7s;
`;

export class VideoDownload extends React.Component {
    constructor(props) {
        super(props);
        this.inited = false;
        this.originVideoData = {};
        this.state = {
            videoData: {},
            currentCid: NaN,
            originVideoData: {},
            percentage: 0,
        };
        this.addListener();
        _.map(document.scripts, (o) => {
            if (/^window.__playinfo__=/.test(o.innerHTML)) {
                const playInfo = JSON.parse(o.innerHTML.slice(20));
                this.originVideoData = playInfo.data || playInfo;
            }
        });
        this.containers = {};
    }

    componentDidMount() {
        this.inited = true;
        chrome.runtime.sendMessage({commend: 'videoDownloadDOMInitialized'});
    }

    addListener = () => {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.commend === 'videoDownloadSendVideoRequest') {
                const {data, url, method, type} = message;
                //const res = /\/av([\d]+)\//.exec(location.pathname); // 新的视频播放页面会同时加载多个不同视频的playUrl
                //console.log(res, avid);
                //if (type === 'old') {
                const {videoData} = this.state;
                const currentCid = data.cid;
                const quality = data.quality;
                if (videoData[currentCid] && videoData[currentCid][quality]) {
                    this.setState({currentCid});
                } else {
                    $.ajax({
                        method,
                        url,
                        data,
                        headers: {
                            'From': 'bilibili-helper',
                        },
                        contentType: 'video/mp4',
                        success: (res) => {
                            if (res.code === 10005) return console.error(res);
                            let downloadData;
                            if (type === 'new' && res.code === 0) {
                                downloadData = res.data || res.result;
                            } else if (type === 'old') {
                                downloadData = res;
                            }

                            const {accept_quality, accept_description, durl, quality} = downloadData;
                            const currentData = {accept_quality, accept_description, durl};

                            videoData[currentCid] = {[quality]: currentData};

                            this.setState({videoData, currentCid});
                        },
                    });
                }

                sendResponse(true);
            } else if (message.commend === 'videoDownloadCid' && message.cid) { // 本地script加载视频数据时，需要检测cid
                const {videoData} = this.state;
                if (_.isEmpty(videoData) && !_.isEmpty(this.originVideoData)) {
                    const {quality} = this.originVideoData;
                    const currentData = {...this.originVideoData};
                    const cidData = videoData[message.cid] || {};
                    cidData[quality] = currentData;
                    videoData[message.cid] = cidData;
                    this.setState({currentCid: message.cid, videoData});
                }
                sendResponse(true);
            }
        });
    };

    handleOnClickDownload = (downloadUrl) => {
        const partDOM = document.querySelector('#v_multipage a.on, #multi_page .cur-list li.on a');
        const partName = partDOM ? partDOM.innerHTML : '';
        const title = document.querySelector('#viewbox_report h1, .header-info h1').getAttribute('title');
        chrome.runtime.sendMessage({
            commend: 'sendVideoFilename',
            url: downloadUrl.split('?')[0],
            cid: this.state.currentCid,
            filename: `${title}${partName ? `_${partName}` : ''}`,
        });
    };

    handleOnClickDownloadAll = (data) => {
        const partDOM = document.querySelector('#v_multipage a.on, #multi_page .cur-list li.on a, #eplist_module .list-wrapper ul .cursor');
        const partName = partDOM ? partDOM.innerText : '';
        const title = document.querySelector('#viewbox_report h1, .header-info h1, .media-wrapper > h1')
                              .getAttribute('title');
        const filename = `${title}${partName ? `_${partName}` : ''}`;
        const {currentCid} = this.state;
        let container;
        if (this.containers[currentCid]) container = this.containers[currentCid];
        else container = new FlvContainer({...data, cid: currentCid});
        this.containers[currentCid] = container;
        container.download((percentage) => {
            this.setState({percentage});
        }).then(blobs => {
            FLV.mergeBlobs(blobs).then(mergeBlob => {
                const url = (window.URL ? URL : window.webkitURL).createObjectURL(mergeBlob, {type: 'video/x-flv'});
                chrome.runtime.sendMessage({
                    commend: 'downloadMergedFlv',
                    url,
                    cid: currentCid,
                    filename,
                });
            });
        });
        //$.ajax({
        //    method: 'get',
        //    url: 'https' + durl[0].url.slice(4),
        //    contentType: 'application/octet-stream',
        //    success: (res) => {
        //        //console.warn(res);
        //    },
        //    error: (e) => {
        //        console.error(e);
        //    },
        //});
    };

    render() {
        const {videoData, currentCid, percentage} = this.state;
        let oldType = false;
        let morePart = false;
        const partDOM = document.querySelector('#v_multipage a.on, #multi_page .cur-list li.on a');
        const partName = partDOM ? partDOM.innerHTML : '';
        return (
            <React.Fragment>
                <Title>视频下载 - 切换清晰度来获取视频连接</Title>
                {morePart && <Suggest>若分段较多，可以尝试切换清晰度以重新获取下载数据</Suggest>}
                <Container>
                    {videoData[currentCid] && _.map(videoData[currentCid], (part, quality) => {
                        const {accept_quality, accept_description, durl} = part;
                        if (durl) oldType = true;
                        if (durl && durl.length > 3) morePart = true;
                        return (oldType ? <LinkGroup key={quality}>
                            {_.map(durl, (o, i) => {
                                const title = durl.length > 1 ? `${i + 1}` : accept_description[accept_quality.indexOf(+quality)];
                                return (
                                    <React.Fragment key={i}>
                                        {durl.length > 1 && i === 0 ? <LinkGroupTitle
                                            key={`title-${quality}-${i}`}
                                        >{accept_description[accept_quality.indexOf(+quality)]}</LinkGroupTitle> : null}
                                        <a
                                            key={i}
                                            referrerPolicy="unsafe-url"
                                            href={o.url}
                                            onClick={() => this.handleOnClickDownload(o.url)}
                                        >{title}</a>
                                        {durl.length > 1 && i === durl.length - 1 &&
                                        <a onClick={() => this.handleOnClickDownloadAll(part)}>合并下载</a>}
                                    </React.Fragment>
                                );
                            })}
                            <Progress percentage={percentage}/>
                        </LinkGroup> : null);
                    })}
                    {!oldType && videoData[currentCid] ? <LinkGroupTitle><p>未支持的视频数据</p></LinkGroupTitle> : null}
                    {!videoData[currentCid] ? <LinkGroupTitle><p>请尝试切换视频清晰度 或 切换到旧播放页面</p></LinkGroupTitle> : null}
                </Container>
            </React.Fragment>
        );
    }
}
