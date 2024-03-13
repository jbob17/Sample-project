
function passValidate() {
    var pass = document.getElementById("password").value;

    if (pass === "24monthshey") {
        alert("Muahahahahahahahaha");
        window.location.href = "mainpage.html";
        return true;
    } 
    
    else if(pass === "24months"){
        window.location.href = "about.html";
        return true;
    
    }
    
    else {
        alert("Ask Jithin for the right password dumdum!");
        return false;
    }
}
