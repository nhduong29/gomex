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

			var obj3 = JSON.parse(xmlhttp.responseText);
			
			try
			{
			
			setTimeout(function(){
			
			document.getElementsByClassName('placeHolder')[0].click();
			
			document.getElementById('uniqid_1').value = obj3[0].Comment;
			
			document.getElementById('uniqid_1').nextSibling.value = obj3[0].Comment;
			
			document.getElementsByClassName('_419z _2z9s mfss')[6].click();
			
			}, 3 * 1000);
			
			setTimeout(function(){
			chrome.extension.sendMessage({
				action: "sendagain"		
			});
			}, 6 * 1000);
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

xmlhttp.open("GET", "https://hay.la/app/getComment?type=4", true);
xmlhttp.send();

}catch(ex)
{
	setTimeout(function(){		
	chrome.extension.sendMessage({
		action: "sendagain"		
	});
	}, 3 * 1000);
}
