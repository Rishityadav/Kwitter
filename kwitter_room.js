
const firebaseConfig = {
      apiKey: "AIzaSyCUflSMd3x_4RRuNlHV3qbw1QhdTTWpKHo",
      authDomain: "kwitter-4538c.firebaseapp.com",
      databaseURL: "https://kwitter-4538c-default-rtdb.firebaseio.com",
      projectId: "kwitter-4538c",
      storageBucket: "kwitter-4538c.appspot.com",
      messagingSenderId: "995084900758",
      appId: "1:995084900758:web:36506ed578802a32a665b7",
      measurementId: "G-JWTSVPV465"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    username=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="Welcome "+username+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_names-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output")+=row;
      
      //Start code

      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding The Room"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";  
}

function redirect(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}