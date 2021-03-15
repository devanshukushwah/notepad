
// chrome.runtime.onMessage.addListener(receiver);

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
window.chat = "This is not a Message Check your internet Connection!\nSee Time is not shown";

function chatpass(){ 
return window.chat;
}

// function receiver(request,sender,sendResponse){
//     console.log(request);
//     window.word = request.text;
// }



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


var firebaseConfig = {
    apiKey: "AIzaSyB2rIszVzmYFDn0ceSxNF59nCxyVn4u83A",
    authDomain: "notepad-511d6.firebaseapp.com",
    projectId: "notepad-511d6",
    storageBucket: "notepad-511d6.appspot.com",
    messagingSenderId: "226781764245",
    appId: "1:226781764245:web:65521e6b87cc292f2e599c",
    measurementId: "G-SRY0LN8K3J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


firebase.database().ref('check/').set({
    wording:"done"
});
firebase.database().ref('chat/D&A').once('value',function(snapshot){
    // console.log(snapshot.val());
    const ta = snapshot.val();
            window.chat = ta.chat;
            console.log(window.chat);
});


