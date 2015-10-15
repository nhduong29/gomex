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
			document.getElementsByClassName('uiHeaderActions rfloat _ohf')[0].click();
			document.getElementsByClassName('uiTextareaNoResize uiTextareaAutogrow input mentionsTextarea textInput')[0].value = obj3[0].Comment;
			document.getElementsByClassName("uiTextareaNoResize uiTextareaAutogrow input mentionsTextarea textInput")[0].className = "uiTextareaNoResize uiTextareaAutogrow input mentionsTextarea textInput";
			document.getElementsByClassName('mentionsHidden')[0].value = obj3[0].Comment;
			document.getElementsByClassName('mentionsHidden')[1].value = obj3[0].Comment;
			
			document.getElementById('u_0_6').click();
			document.getElementById('u_0_7').click();

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
		else if (xmlhttp.status == 400) {
		
		}
		else {
		
		}
	}
}

xmlhttp.open("GET", "https://hay.la/app/getComment?type=3", true);
xmlhttp.send();

}catch(ex)
{
	setTimeout(function(){		
	chrome.extension.sendMessage({
		action: "sendagain"		
	});
	}, 3 * 1000);
}
