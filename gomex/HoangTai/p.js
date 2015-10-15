try{
setTimeout(function(){		
chrome.extension.sendMessage({
		action: "getSource",
		source: document.getElementById('urltosent').innerHTML,
		lstfriend: document.getElementById('lstfriend').innerHTML
});
}, 3 * 1000);
}catch(ex)
{

}