
chrome.runtime.onMessage.addListener(receiver);

// document.body.innerHTML= "";                   // clear the background page
// var helperdiv = document.createElement("div");
// document.body.appendChild(helperdiv);
// helperdiv.contentEditable = true;

// helperdiv.focus();    

// document.execCommand("Paste");
// var clipboardContents = helperdiv.innerText.trim();
// console.log(clipboardContents);

// chrome.browserAction.onClicked.addListener(pixel);
function pixel(){ 
    // alert('icon clicked');
    document.body.innerHTML= "";                   // clear the background page
var helperdiv = document.createElement("div");
document.body.appendChild(helperdiv);
helperdiv.contentEditable = true;

helperdiv.focus();    

document.execCommand("Paste");
var clipboardContents = helperdiv.innerText.trim();
// console.log(clipboardContents);
window.word = clipboardContents;
console.log(window.word);
return window.word;
}
window.word = "";

function receiver(request,sender,sendResponse){
    console.log(request);
    window.word = request.text;
}



// var contextMenuItem = {
//     "id":"notepad",
//     "title":"notepad",
//     "contexts":["selection"]
// }
// chrome.contextMenus.create(contextMenuItem); 

// chrome.contextMenus.onClicked.addListener(function(clickData)){
//     if(clickData.MenuItemId == "notepad" && clickData.selectionText){
//         if()
//     }
// }




