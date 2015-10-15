try
{
document.getElementsByClassName('like_def _5j2c _5j2d')[0].click();
document.getElementsByClassName('_5j2c _5j2g')[0].click();
setTimeout(function(){document.getElementsByClassName('_56bz _55i1 _58a0 touchable')[0].click();}, 2000);

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
			
			document.getElementsByClassName('_uwx mentions-input')[0].value = obj3[0].Comment;
			document.getElementsByClassName('_uwx mentions-input')[0].nextSibling.value = obj3[0].Comment;

			setTimeout(function(){
			document.getElementsByClassName('_56bs _3lmf _56bt')[0].disabled = false;
			document.getElementsByClassName('_56bs _3lmf _56bt')[0].className = "_56bs _3lmf _56bu";
			}, 1000);
			setTimeout(function(){document.getElementsByClassName('_56bs _3lmf _56bu')[0].click();}, 2000);

		}
		else if (xmlhttp.status == 400) {
		
		}
		else {
		
		}
	}
}

xmlhttp.open("GET", "https://hay.la/app/getComment?type=2", true);
xmlhttp.send();

}catch(ex)
{
}
