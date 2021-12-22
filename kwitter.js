username=document.getElementById()

var firebaseConfig = {
    apiKey: "AIzaSyAuPiq8SiBYvPuPCl5EeLBD4Qj1qc5-CDo",
    authDomain: "kwitter2-6b430.firebaseapp.com",
    projectId: "kwitter2-6b430",
    storageBucket: "kwitter2-6b430.appspot.com",
    messagingSenderId: "502121007217",
    appId: "1:502121007217:web:fe572319ec126bddd973d0",
    measurementId: "G-H11XWVYKJS"
  };

  usrname=localStorage.getItem("usernam");
document.getElementById("username").innerHTML = "Welcome " + usrname +"!";


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
  row =" <div class='room_name' id='="+room_names+" onclick='rediectToRoomName(this.id)>#"+room_names+"'></div><hr>"
//End code
});});}
getData();