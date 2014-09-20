var version = "v" + chrome.app.getDetails().version;
var general = "*{font-family:Helvetica,Arial,\"Source Han Sans CN\",\"Hiragino Sans GB\",\"Microsoft Yahei\",\"Microsoft Jhenghei\",STHeiti,verdana,sans-serif!important;}#bofqi.wide .player{width:980px}.arc-tool-bar .helper{float:right;border-left:1px solid #ddd;border-right:none;position:relative;padding:0;font-size:10px;cursor:pointer;transition:.1s all ease-in}.arc-tool-bar .helper:hover{background-color:#eee;}.arc-tool-bar .helper .title{font-size:12px;padding:0 15px;margin:0}.arc-tool-bar .helper .title .icon{width:16px;height:16px;display:inline-block;vertical-align:sub;margin-right:4px;background-image:url(" + chrome.extension.getURL("imgs/icon-32.png") + ");background-size:16px 16px;}.arc-tool-bar .helper .info{position:absolute;background-color:#fff;border:solid 1px #ddd;cursor:default;left:-1px;width:300px;min-height:60px;z-index:10;padding-bottom: 31px;transition:.2s all ease-in;opacity:0;pointer-events:none}.arc-tool-bar .helper .info.active{opacity:1;pointer-events:auto}.arc-tool-bar .helper .info .main{padding:12px;line-height:24px;font-size:12px;color:#444;}.arc-tool-bar .helper .info .main .section h3{font-weight:500}.arc-tool-bar .helper .info .main .section p{color:#666}.arc-tool-bar .helper .info .main .section p span{margin-right:8px;font-size:12px}.arc-tool-bar .helper .info .main .section a.b-btn{padding:4px 6px;line-height:14px;display:inline-block;margin:4px}.arc-tool-bar .helper .info .version{position:absolute;bottom:0;height:30px;line-height:30px;width:100%;text-align:center;border-top:solid 1px #ddd;}#helper_aera{width:240px;float:right;padding:0px 10px;}.titleNumber{cursor:pointer;text-decoration:underline;color:#1184B4;}#loading-notice{position:absolute;z-index:1000;left:50%;top:50%;width:260px;height:32px;margin-top:-66px;margin-left:-130px;line-height:20px;font-size:15px;background-image:url(" + chrome.extension.getURL("imgs/loading.gif") + ");background-repeat:no-repeat;background-position:6px 16px;padding-top:100px;text-align:center;background-color:#fff;border-radius:2px;box-shadow:0 1px 2px rgba(0,0,0,.3);transition:all .2s ease-in;}#loading-notice:hover{box-shadow:0 5px 10px rgba(0,0,0,.3);}#cancel-replacing{margin-left:20px;font-size:12px;border:solid 1px #7E0000;padding:2px 5px;vertical-align:bottom;border-radius:1px;cursor:pointer;color:#fff;background-color:#910000;background-image:-webkit-gradient(linear,0 0,0 bottom,from(#CF0000),to(#910000));background-repeat:no-repeat;}#cancel-replacing:hover{background-position-y:-8px}#cancel-replacing:active{background-position-y:-8px;box-shadow:inset 1px 1px 2px rgba(0,0,0,.2),inset 0 4px 4px rgba(0,0,0,.15);}";
var abplayer = "@font-face{font-family:bilibili-helper;src:url(" + chrome.extension.getURL("bilibili-helper.woff") + ");font-weight:400;font-style:normal}[class*=\" icon-\"],[class^=icon-]{font-family:bilibili-helper!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-font-style:before{content:\"\\e60a\"}.icon-color-mode:before{content:\"\\f065\"}.icon-comment:before{content:\"\\f02b\"}.icon-screen-full:before{content:\"\\f066\"}.icon-screen-normal:before{content:\"\\f067\"}.icon-screen:before{content:\"\\e600\"}.icon-play:before{content:\"\\e602\"}.icon-pause:before{content:\"\\e603\"}.icon-volume-high:before{content:\"\\e604\"}.icon-volume-medium:before{content:\"\\e605\"}.icon-volume-low:before{content:\"\\e606\"}.icon-volume-mute:before{content:\"\\e607\"}.icon-volume-mute2:before{content:\"\\e608\"}.icon-loop:before{content:\"\\e601\"}.ABP-Unit{font-family:Helvetica,Arial,\"Source Han Sans CN\",\"Hiragino Sans GB\",\"Microsoft Yahei\",\"Microsoft Jhenghei\",STHeiti,verdana,sans-serif;position:relative;color:#444;background:#fff;font-size:16px;outline:0}.ABP-Unit.ABP-FullScreen{top:0;left:0;right:0;bottom:0;width:auto!important;height:auto!important;position:fixed;z-index:9999}.ABP-Unit .ABP-Video{position:absolute;overflow:hidden;top:0;left:0;right:0;bottom:22px;background:#000;outline:0;cursor:pointer}.ABP-Unit .ABP-Video video{width:100%;height:100%}.ABP-Unit .ABP-Video .ABP-Container{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);position:absolute;display:block;overflow:hidden;margin:0;border:0;top:0;left:0;bottom:0;right:0;touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ABP-Unit .ABP-Video .ABP-Container .cmt{-webkit-transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);position:absolute;padding:3px 0 0;margin:0;color:#fff;font-family:SimHei,SimSun,Heiti,\"MS Mincho\",Meiryo,\"Microsoft YaHei\",monospace;font-size:25px;text-decoration:none;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px #000;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;line-height:100%;letter-spacing:0;word-break:keep-all;white-space:pre}.ABP-Unit .ABP-Video .ABP-Container .cmt.noshadow{text-shadow:none}.ABP-Unit .ABP-Video .ABP-Container .cmt.rshadow{text-shadow:-1px 0 white,0 1px white,1px 0 white,0 -1px #fff}#ABP-Tooltip{position:absolute;font-size:10px;background:rgba(255,255,255,.8);padding:2px 4px;white-space:nowrap;border-radius:2px;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.4);box-shadow:0 3px 6px rgba(0,0,0,.4);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ABP-Unit .ABP-Control{position:absolute;bottom:0;left:0;right:0;background:#fff;border:1px solid #ececec;height:20px;-moz-user-select:-moz-none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-size:14px}.ABP-Unit .ABP-Control .button{position:absolute;overflow:hidden;color:#a2a2a2;width:25px;text-align:center;line-height:20px;top:0;bottom:0;cursor:pointer;-webkit-transition:color .2s ease-in-out;transition:color .2s ease-in-out}.ABP-Unit .ABP-Control .button.on{color:#585858}.ABP-Unit .ABP-Control .button:hover{color:#f45a8d}.ABP-Unit .ABP-Control .button.ABP-Play{width:35px}.ABP-Unit .ABP-Control .ABP-Play{left:0}.ABP-Unit .ABP-Control .ABP-FullScreen{right:0}.ABP-Unit .ABP-Control .ABP-CommentShow{top:0;right:50px;bottom:0}.ABP-Unit .ABP-Control .ABP-Volume{top:0;right:140px;bottom:0}.ABP-Unit .ABP-Control .ABP-Loop{top:0;right:25px;bottom:0}.ABP-Unit .ABP-Control .progress-bar{position:absolute;overflow:hidden;cursor:default;top:0;bottom:0;left:35px;background:#fff;border-left:1px solid #ececec;width:-webkit-calc(100% - 270px);width:calc(100% - 270px)}.ABP-Unit .ABP-Control .volume-bar{position:absolute;top:0;right:68px;bottom:0;width:80px}.ABP-Unit .ABP-Control .bar{cursor:pointer;width:-webkit-calc(100% - 20px);width:calc(100% - 20px);position:absolute;left:10px;top:7px;bottom:0;height:6px;background:#949494;border-radius:6px}.ABP-Unit .ABP-Control .bar .dark,.ABP-Unit .ABP-Control .bar .load{position:absolute;height:0;height:100%;border-radius:6px}.ABP-Unit .ABP-Control .bar .load{background:#00a0d8}.ABP-Unit .ABP-Control .bar .dark{background:#007bb1}.ABP-Unit .ABP-Control .bar .dark:before{position:absolute;top:-3px;right:-6px;width:12px;height:12px;background-color:#fff;border-radius:12px;-webkit-box-shadow:0 0 1px rgba(0,0,0,.5);box-shadow:0 0 1px rgba(0,0,0,.5);content:\"\";cursor:pointer}.ABP-Unit .ABP-Control .bar .dark:after{position:absolute;right:-3px;width:6px;height:6px;background-color:#009fd6;border-radius:6px;-webkit-box-shadow:inset 0 0 1px rgba(0,0,0,.5);box-shadow:inset 0 0 1px rgba(0,0,0,.5);content:\"\";cursor:pointer}.ABP-Unit .ABP-Control .time-label{width:80px;font-size:11px;position:absolute;right:162px;text-align:center;line-height:22px;height:20px}.ABP-Unit .ABP-Popup{position:absolute;background:#000;border:1px solid #33b5e5;left:10px;padding:5px;bottom:82px;opacity:.8}@font-face{font-family:\"\\9ED1\\4F53\";src:local('SimHei')}@font-face{font-family:\"\\5B8B\\4F53\";src:local('SimSun')}@font-face{font-family:\"\\534E\\6587\\6977\\4F53\";src:local('SimKai')}@font-face{font-family:\"\\5E7C\\5706\";src:local('YouYuan')}@font-face{font-family:\"\\5FAE\\8F6F\\96C5\\9ED1\";src:local('Microsoft YaHei')}";
var ad_fade = "#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,clear.ad_top,#bdad,div[class^=\"ad-\"],#taobaoid{opacity:.2}#indexgg1:hover,#indexgg2:hover,#indexgg3:hover,#indexgg4:hover,#indexgg5:hover,#indexgg6:hover,#indexc2:hover,.gg-ads:hover,#topgg:hover,.r-gg1:hover,#listgg1:hover,#listb1:hover,#listb2:hover,#listb3:hover,#alistads:hover,#googlegg:hover,#arcgg3:hover,#contgg1:hover,.ad:hover,iframe[src=\"http://www.bilibili.com/bdad.html\"]:hover,iframe#cproIframe1:hover,iframe#cproIframe2:hover,iframe#cproIframe3:hover,iframe#cproIframe4:hover,.ad_top:hover,#bdad:hover,div[class^=\"ad-\"]:hover,#taobaoid:hover{opacity:1}";
var ad_kill = "#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,iframe[src=\"http://www.bilibili.com/bdad.html\"],clear.ad_top,#bdad,div[class^=\"ad-\"],#taobaoid{display:none!important}";
var ad_mode = ".scontent{padding:0px!important;height:0px}.player-wrapper,.v_info,.container-top,.container-row,#hotbox,#index_online,.common,.rat,#special,#bofqi,.z-l,.z-r,.mobile,.c-link,.footer,.info,.upinfo,.alist,.s_center,.index-tjbox,.iv{display:none!important}.videobox{box-shadow:none!important;background:transparent!important}#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,iframe[src=\"http://www.bilibili.com/bdad.html\"],clear#bdad,div[class^=\"ad-\"],#taobaoid{display:block!important;opacity:1!important}";
var helper = "*{font-family:Helvetica,Arial,\"Source Han Sans CN\",\"Hiragino Sans GB\",\"Microsoft Yahei\",\"Microsoft Jhenghei\",STHeiti,verdana,sans-serif!important;}.arc-tool-bar .helper{float:right;border-left:1px solid #ddd;border-right:none;position:relative;padding:0 15px;font-size:10px;cursor:pointer;}.arc-tool-bar .helper:hover{background-color:#eee;}.arc-tool-bar .helper .title{font-size:12px;}";
var defaultOptions = {
	"ad": "keep",
	"ad_opacity": 0.1,
	"dlquality": "flv",
	"dynamic": "on",
	"enabled": false,
	"replace": "on",
	"html5": "off",
	"contextmenu": "on",
	"rel_search": "without",
	"updates": 0
};
var cidCache = {};
if(localStorage.getItem('cidCache') != null) {
	try {
        cidCache = JSON.parse(localStorage.getItem('cidCache'));
    } catch (e) {
        localStorage.setItem('cidCache', null);
    }
}
function getOption(key) {
	if (localStorage.getItem(key) === null) {
		localStorage.setItem(key, defaultOptions[key]);
	}
	return localStorage.getItem(key);
}

function setOption(key, value, pushcss) {
	localStorage.setItem(key, value);
	if (pushcss) updateAll();
}

function getCSS(url) {
	var bilibili_helper_css = general + abplayer;
	var adType = getOption("ad");
	if (url.indexOf("topic") >= 0) adType = "kill";
	switch (adType) {
		case "fade":
			ad_fade = "#indexgg1,#indexgg2,#indexgg3,#indexgg4,#indexgg5,#indexgg6,#indexc2,.gg-ads,#topgg,.r-gg1,#listgg1,#listb1,#listb2,#listb3,#alistads,#googlegg,#arcgg3,#contgg1,.ad,clear.ad_top,#bdad,div[class^=\"ad-\"],#taobaoid{opacity:" + getOption("ad_opacity") + ";-webkit-transition:all .1s linear}#indexgg1:hover,#indexgg2:hover,#indexgg3:hover,#indexgg4:hover,#indexgg5:hover,#indexgg6:hover,#indexc2:hover,.gg-ads:hover,#topgg:hover,.r-gg1:hover,#listgg1:hover,#listb1:hover,#listb2:hover,#listb3:hover,#alistads:hover,#googlegg:hover,#arcgg3:hover,#contgg1:hover,.ad:hover,iframe[src=\"http://www.bilibili.com/bdad.html\"]:hover,iframe#cproIframe1:hover,iframe#cproIframe2:hover,iframe#cproIframe3:hover,iframe#cproIframe4:hover,.ad_top:hover,#bdad:hover,div[class^=\"ad-\"]:hover,#taobaoid:hover{opacity:1}";
			bilibili_helper_css += ad_fade;
			break;
		case "kill":
			bilibili_helper_css += ad_kill;
			break;
	}
	return bilibili_helper_css;
}