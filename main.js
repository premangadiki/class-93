function adduser(){
    username=document.getElementById("username").value;

    localStorage.setItem("usernam", username);
    window.location = "Kwitter.html";
}