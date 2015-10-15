try
{
	document.getElementsByClassName('_42ft _4jy0 layerConfirm _51_n autofocus _4jy3 _4jy1 selected _51sy')[0].click();
	
	
}catch(ex)
{
}

setTimeout(function(){		
chrome.extension.sendMessage({
		action: "sendagain"		
});
}, 3 * 1000);