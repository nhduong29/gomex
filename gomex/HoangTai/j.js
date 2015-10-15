try
{
	try
	{
		document.getElementsByTagName('footer')[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].click();
	}catch(ex)
	{
		document.getElementsByTagName('footer')[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].click();
	}
}catch(ex)
{
	setTimeout(function(){
		chrome.extension.sendMessage({
				action: "sendagain"		
		});
	}, 3 * 1000);
}
