try
{

/*var xmlhttp;

if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
} else {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4) {
		if (xmlhttp.status == 200) {

			var objtime = JSON.parse(xmlhttp.responseText);*/
			document.getElementsByTagName('footer')[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0].click();
			
			document.getElementById('root').childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].click();
			

		/*}
		else if (xmlhttp.status == 400) {
		
		}
		else {
		
		}
	}
}

xmlhttp.open("GET", "https://hay.la/app/getConfig?version=1", true);
xmlhttp.send();
*/
}catch(ex)
{
	setTimeout(function(){
		chrome.extension.sendMessage({
				action: "sendagain"		
		});
	}, 3 * 1000);
}
