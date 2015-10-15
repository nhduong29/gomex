try
{
	document.getElementsByClassName('_42ft _4jy0 PageLikeButton _4jy4 _517h')[0].click();
}catch(ex)
{
}

setTimeout(function(){		
chrome.extension.sendMessage({
		action: "sendagain"		
});
}, 3 * 1000);


