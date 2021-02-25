// function setup(){
//     noCanvas();
//     let bgpage = chrome.extension.getBackgroundPage()
//     let word = bgpage.word;
//     console.log(word);
//     createP(word);
// }
let word = "";
let bgpage = chrome.extension.getBackgroundPage();
// if(word )
word = bgpage.pixel();
word = bgpage.word.trim();
// word = bgpage.pixel();
var n_o = -1;
console.log("you in popup.js file!");


$(function () {

    

    $('#alltopicbtn').click(function alltopicbtn(){
        $('#tmpdiv').val("Wait...");
        firebase.database().ref('notepad/').orderByKey().on('value', function (snapshot) {
            $('#alltopicdiv').empty();

            
            var scores = snapshot.val();
            var keys = Object.keys(scores);
            // console.log(keys);
            for(var i=0;i<keys.length;i++){
                var cont = "<input type='button' id='readkey' value = '" +keys[i]+"' /> ";
                $("#alltopicdiv").append(cont);
            }

        });      
    });

    $("#alltopicdiv").on('click', '#readkey', function () {
    // $('#readkey').click(function rdkey(){
        sh(this.value);
        console.log(this.value);
    });

    var owntopic = "";

    function sh(topic) {
        $('#ste').html("Wait!");

        // console.log(data);

        $('#topic').val(topic);

        if(owntopic==""){
            n_o=-1;
            owntopic = topic;
        }
        if(owntopic !=topic){
            n_o=-1;
            owntopic="";
        }


        n_o += 1;
        // if ($('#topic').val() == "") {
        //     console.log("nothing");
        //     $('#ste').html("Type Topic To Search!");
        //     $('#ste').css("color", "#E60000");

        //     return true;
        // }
        // e.preventDefault();

        // $('#topic').val(topic);
        // ownready(topic);
        
        


        console.log("click on serach!");
        firebase.database().ref('notepad/' + topic).orderByChild('data').on('value', function (snapshot) {
            if (!snapshot.exists()) {
                console.log("not exist");
                $('#ste').html("Not Found!");
                $('#ste').css("color", "#E60000");

                return true;
            }
            var te = snapshot.val();
            // console.log(Object.keys(te).length-2);
            
            // $('#ste').css("background-color","#FF7800");
            // console.log(te); // object 
            var keys = Object.keys(te);
            // console.log();
            let infoData = keys[n_o];
            let data = te[infoData].data;
            var data_time= new Date(te[infoData].time);

            tame = te[infoData].time;
            topic = te[infoData].topic;
            // console.log(data);
            $('#data').val(data);
            $('#data_time').html((data_time.toString().slice(0,21)));

            if (n_o >= parseInt(Object.keys(te).length - 1)) {
                $('#ste').html("This is Last Data!");
                // n_o = Object.keys(te).length - 1;
                n_o=-1;
            } else {
                $('#ste').html("Click Again For Next!");

            }
        });
    }

    $('#chatbtn').click(function gotolink(){
        // window.open('https://google.com','_blank');
        window.open($('#chat').val(),'_blank');
        // console.log("sdfajasklfj");
    })

    ser_chat();

    $('#data').val(word);


    $('#chat').keyup(function chat(e) {
        // e.preventDefault();
        // $('#chat').val("done");
        var temp_chat = $('#chat').val();
        var chattime = Date.now();
        firebase.database().ref('chat/D&A').set({
            chat: temp_chat,
            time: chattime
        });
        ser_chat();
    });

    function ser_chat() {
        // textAreaAdjust();
        firebase.database().ref('chat/D&A').on('value', function (snapshot) {

            const ta = snapshot.val();
            const data = ta.chat;
            const chat_time = new Date(ta.time);

            $('#chat').val(data);
            $('#chat_time').html(chat_time.toString().slice(0, 21));
            const d1 = data.slice(0, 7);
            const d2 = data.slice(0, 8);
            if (d1 == "http://" || d2 == "https://") {
                // tpe = "link";
                $('#chat_box2').css("display","block");
                $('#chat_box1').css("width","90%");
            } else {
                // tpe = "description";
                $('#chat_box2').css("display","none");
                $('#chat_box1').css("width","100%");
            }


        });
    }
    $('#codebtn').click(function code(e) {
        $("#jsloader").css("display", "block");
        $("section").empty();
        var txt1 = "<iframe height=\"400px\" width=\"600px\" src=\"https://repl.it/@DevanshuKushwah/c?lite=true\" scrolling=\"no\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\" sandbox=\"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals\"></iframe>";
        $("body").append(txt1);
        setTimeout(function () {
            $("#jsloader").css("display", "none");
        }, 5000);

    });
    // function 

});

var tame, res, res2, tpe;
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
// firebase.analytics();

var topic, data;

function Ready() {
    topic = $('#topic').val().trim().toLowerCase();
    data = $('#data').val().trim();
    tame = Date.now();
    res = data.slice(0, 7);
    res2 = data.slice(0, 8);
    ftpe();

}

function ftpe() {
    topic = $('#topic').val().trim().toLowerCase();
    data = $('#data').val().trim();
    // tame = Date.now();
    res = data.slice(0, 7);
    res2 = data.slice(0, 8);
    if (res == "http://" || res2 == "https://") {
        tpe = "link";
    } else {
        tpe = "description";
    }
}

$(function (e) {
    $('form').submit(function funsubmit(e) {
        // $('#status').html("Wait For A Second");
        // $('#status1').css("background-color","white");
        // $('#status2').css("background-color","#E60000");
        // $('#status3').css("background-color","white");
        Ready();
        e.preventDefault();
        if (topic != "" && data != "") { //.....................................................// if start
            $('#status1').css("background-color", "white");
            $('#status2').css("background-color", "#E60000");
            $('#ste').html("Wait!");
            $('#ste').css("color", "#E60000");

            $('#status3').css("background-color", "white");
            // if( res == "http://" || res2 == "https://"){
            firebase.database().ref('notepad/' + topic + "/" + tame).set({
                topic: topic,
                data: data,
                type: tpe,
                time: tame
            }).then(() => { //.............................//server request verification start
                // $('#status').html("Well! Done");
                $('#status1').css("background-color", "white");
                $('#status2').css("background-color", "white");
                $('#ste').html("Well Done!");
                $('#ste').css("color", "#FF7800");
                $('#status3').css("background-color", "#FF7800");
                $('#topic').focus();
                $('#topic').val('');
                $('#data').val('');
            }); //.........................................//server request verification end
            // }
            // else{
            //     firebase.database().ref('notepad/' + topic + "/" + tame).set({
            //         topic:topic,
            //         data:data,
            //         type:"description",
            //         time:tame
            //     }).then(() => {//.............................//server request verification start
            //         $('#status1').css("background-color","white");
            //         $('#status2').css("background-color","white");
            //         $('#ste').html("Well Done!");
            //         $('#ste').css("color","#FF7800");
            //                 $('#status3').css("background-color","#FF7800");
            //                         $('#topic').focus();
            //                         $('#topic').val('');
            //                         $('#data').val('');
            //     });//.........................................//server request verification end
            // }



        } //....................................................................................... // if end
        else {
            // $('#status').html("Fill Both Input!");
            if (!$('#topic').val()) {
                $('#topic').attr("placeholder", "Fill this block!")
            } else {
                $('#data').attr("placeholder", "Fill this block!")
            }
        }
    })


    $('#topic').change(function chnge(e) {
        e.preventDefault();
        n_o = -1;
    })

    $('#schbtn').click(function sch(e) {
        $('#ste').html("Wait!");

        n_o += 1;
        if ($('#topic').val() == "") {
            console.log("nothing");
            $('#ste').html("Type Topic To Search!");
            $('#ste').css("color", "#E60000");

            return true;
        }
        e.preventDefault();
        Ready();
        console.log("click on serach!");
        firebase.database().ref('notepad/' + topic).orderByChild('data').on('value', function (snapshot) {
            if (!snapshot.exists()) {
                console.log("not exist");
                $('#ste').html("Not Found!");
                $('#ste').css("color", "#E60000");

                return true;
            }
            var te = snapshot.val();
            // console.log(Object.keys(te).length-2);
            // if (n_o >= parseInt(Object.keys(te).length - 1)) {
            //     $('#ste').html("This is Last Data!");
            //     n_o = Object.keys(te).length - 1;
            // } else {
            //     $('#ste').html("Click Again For Next!");

            // }
            // $('#ste').css("background-color","#FF7800");
            // console.log(te); // object 
            var keys = Object.keys(te);
            // console.log();
            let infoData = keys[n_o];
            let data = te[infoData].data;
            tame = te[infoData].time;
            var data_time= new Date(te[infoData].time);

            topic = te[infoData].topic;
            // console.log(data);
            $('#data').val(data);
            $('#data_time').html(data_time.toString().slice(0, 21));
            

            if (n_o >= parseInt(Object.keys(te).length - 1)) {
                $('#ste').html("This is Last Data!");
                // n_o = Object.keys(te).length - 1;
                n_o=-1;
            } else {
                $('#ste').html("Click Again For Next!");

            }


        });

    });

    $('#updbtn').click(function upd(e) {
        $('#ste').html("Wait!");
        // n_o+=1;
        if ($('#topic').val() == "") {
            console.log("nothing");
            $('#ste').html("Type Topic To Update!");
            $('#ste').css("color", "#E60000");

            return true;
        }
        e.preventDefault();
        // Ready();
        ftpe();
        console.log("click on update!");
        data = $('#data').val();

        firebase.database().ref('notepad/' + topic + "/" + tame).set({
            topic: topic,
            data: data,
            type: tpe,
            time: tame
        }).then(() => { //.............................//server request verification start

            $('#ste').html("Updated!");
            $('#ste').css("color", "#FF7800");
        }); //.........................................//server request verification end
    });

    function topictame(topic){
        firebase.database().ref('notepad/' + topic).orderByChild('data').on('value', function (snapshot) {
            var te = snapshot.val();

         var keys = Object.keys(te);
                    
                    let infoData = keys[n_o];
                    let data = te[infoData].data;
                    tame = te[infoData].time;
         });
        return tame;
        }

    $('#delbtn').click(function del(e) {
        $('#ste').html("Wait!");
        // n_o+=1;
        if ($('#topic').val() == "") {
            console.log("nothing");
            $('#ste').html("Type Topic To Delete!");
            $('#ste').css("color", "#E60000");

            return true;
        }
        e.preventDefault();
        // Ready();
        // console.log("click on delete!");
        // data = $('#data').val();
        // console.log(topictame(topic));
        topic = $('#topic').val();
        tame = topictame(topic);
        console.log(tame);
        console.log(topic);
        firebase.database().ref('notepad/' + topic + "/" + tame).remove().then(() => { //.............................//server request verification start

            $('#ste').html("Deleted!");
            $('#ste').css("color", "#FF7800");
            // n_o-=2;
            // sch();
        // $('#data').val("");

        }); //.........................................//server request verification end
    });





});


// .catch(error => {
//     $('#status').html(error);
//     // console.log(error);
// })