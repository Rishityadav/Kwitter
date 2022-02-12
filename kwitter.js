function addUser(){
    window.location="kwitter_room.html";
    user_name=document.getElementById("username").value;
    localStorage.setItem("username", user_name);
}