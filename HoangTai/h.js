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
			var xmlhttp2;

			if (window.XMLHttpRequest) {
				xmlhttp2 = new XMLHttpRequest();
			} else {
				xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
			}

			xmlhttp2.onreadystatechange = function () {
				if (xmlhttp2.readyState == 4) {
					if (xmlhttp2.status == 200) {

						var obj3 = JSON.parse(xmlhttp2.responseText);
						
						try
						{
						document.getElementsByClassName('_uwx mentions-input')[0].value = obj3[0].Comment;
						document.getElementsByClassName('_uwx mentions-input')[0].nextSibling.value = obj3[0].Comment;

						setTimeout(function(){
						document.getElementsByClassName('_56bs _3lmf _56bt')[0].disabled = false;
						document.getElementsByClassName('_56bs _3lmf _56bt')[0].className = "_56bs _3lmf _56bu";
						}, objtime[0].sleepgetclassbeforcomment * 1000);
						
						setTimeout(function(){document.getElementsByClassName('_56bs _3lmf _56bu')[0].click();}, objtime[0].sleeppostfacecomment * 1000);
						
						setTimeout(function(){		
						chrome.extension.sendMessage({
								action: "sendagain"		
						});
						}, 3 * 1000);
						}catch(ex)
						{
							setTimeout(function(){
								chrome.extension.sendMessage({
										action: "sendagain"		
								});
							}, 3 * 1000);
						}
					}
					else if (xmlhttp2.status == 400) {
					
					}
					else {
					
					}
				}
			}

			xmlhttp2.open("GET", "https://hay.la/app/getComment?type=2", true);
			xmlhttp2.send();
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
	setTimeout(function(){
		chrome.extension.sendMessage({
				action: "sendagain"		
		});
	}, 3 * 1000);
}