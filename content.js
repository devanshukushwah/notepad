console.log("****THIS IS CONTENT.JS****");
// window.addEventListener('mouseup',getPositionXY(this));
// $(function(){

    // $('#cnjsdel').click(function(){
    //     // e.preventDefault();
    // console.log("clicked del");

    //     $('body').remove();
    // });

    // $("#cnjsform").on('click', '#cnjsdel', function () {
    //     // $('#readkey').click(function rdkey(){
    //     $('body').remove();
    //     console.log("done");

    // });
    // document.getElementById("cnjsdel").click(cnjsdelfn);

    function cnjsdelfn() {
        //     // $('#readkey').click(function rdkey(){
            $('body').remove();
            console.log("done");
    
        }



var article = document.getElementsByTagName('body')[0];

// We could also add the  'touchend' event for touch devices, but since 
// most iOS/Android browsers already show a dialog when you select 
// text (often with a Share option) we'll skip that
document.onkeyup=function(e){
    var e = e || window.event; // for IE to cover IEs window object
if(e.altKey && e.which == 66) {
// if(e.altKey) {
     alert('off!');
     article.removeEventListener(['mouseup'], handlerFunction, false);

     return false;
}
}

document.onkeydown=function(e){
    var e = e || window.event; // for IE to cover IEs window object
if(e.altKey && e.which == 65) {
// if(e.altKey ) {
     alert('on!');

     article.addEventListener(['mouseup'], handlerFunction, false);

     return false;
}
}



// Mouse up event handler function
function handlerFunction(event) {
    
    // If there is already a share dialog, remove it
    
    
    // Check if any text was selected
    if(window.getSelection().toString().length > 0) {

        if (document.contains(document.getElementById("cnjsform"))) {
            if(document.getElementById("cnjsinput").value ==""){
                document.getElementById("cnjsinput").focus();
                return true;
            } 
            document.getElementById("cnjsform").remove();
        }

        // Get selected text and encode it
        const selection = window.getSelection().toString();
        console.log(selection);
        // Find out how much (if any) user has scrolled
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
        // Get cursor position
        const posX = event.clientX - 110;
        const posY = event.clientY + 20 + scrollTop;
      
        // Create Twitter share URL
        // const shareUrl = 'http://twitter.com/share?text='+selection+'&url=https://awik.io';
        
        // Append HTML to the body, create the "Tweet Selection" dialog
        // document.body.insertAdjacentHTML('beforeend', '<div id="share-snippet" style="position: absolute; top: '+posY+'px; left: '+posX+'px;"><div class="speech-bubble"><div class="share-inside"><a href="javascript:void(0);" onClick=\'window.open(\"'+shareUrl+'\", \"\", \"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\");\'>TWEET SELECTION</a></div></div></div>');
        // var jsform = '<form id="cnjsform" style=" top: '+posY+'px; left: '+posX+'px;"><input type="text" id="cnjsinput" auto-complete="off" placeholder="type your topic name" autofocus required></input><input type="submit" value="SUBMIT"></input></form>';
        // var jsform = '<form id="cnjsform" style=" top: '+posY+'px; left: '+posX+'px;"><input type="text" id="cnjsinput" auto-complete="off" placeholder="Type your topic name" autofocus></input><input type="submit" value="SUBMIT"></input><div id="cnjsdel">X</div></form>';
       
        // var jsform = '<form onclick="none" id="cnjsform" style=" top: '+posY+'px; left: '+posX+'px;"><input tabindex="1" type="text" id="cnjsinput" auto-complete="off" placeholder="Type your topic name" autofocus></input><input tabindex="2" type="submit" value="SUBMIT"></input><div id="cnjsdel" tabindex="3">X</div></form>'
        var jsform = '<div id="cnjsform" style=" top: '+posY+'px; left: '+posX+'px;"><input tabindex="1" type="text" id="cnjsinput" auto-complete="off" placeholder="Type your topic name" autofocus></input><input tabindex="2" id="cnjssubmit" type="button" value="SUBMIT"></input><input type="button" onclick="cnjsdelfn()" id="cnjsdel" tabindex="3" value="X"></input></div>';
        // var jsform = '<form onclick="none" id="cnjsform" style=" top: '+posY+'px; left: '+posX+'px;"><input tabindex="1" type="text" id="cnjsinput" auto-complete="off" placeholder="Type your topic name" autofocus></input><input tabindex="2" type="submit" value="SUBMIT"></input></form>'
        document.body.insertAdjacentHTML('beforeend', jsform);
        document.getElementById("cnjsinput").focus();

        
    }
}

// });



// $(function(){
    // var jsform = `<form id="cnjsform" ><input type="text" id="cnjsinput" auto-complete="off" placeholder="type your topic name"></input><input type="submit" value="SUBMIT"></input></form>`;
// $('body').append(jsform);
// function getPositionXY(event) { 
//     var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
//         // Get cursor position
//         const posX = event.clientX - 110;
//         const posY = event.clientY + 20 + scrollTop;
//         console.log((posX));
//         console.log(posY);
//     // var selection = window.getSelection().anchorOffset();
//     var rect = $("body").offset(); 
//    console.log('X: ' + rect.top + ', ' + 'Y: ' + rect.left);    
// console.log("funcatio call");
// }

// $( ":input" ).select(getPositionXY(this));

// });

// window.addEventListener('mouseup',wordSelected);

// function wordSelected(){
//     let selectedText = window.getSelection().toString();
//     console.log(selectedText);
//     if(selectedText.length >0){
//         let message = {
//             text:selectedText
//         }
//         chrome.runtime.sendMessage(message);
//     }
// }