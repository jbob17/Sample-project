
function passValidate() {
    var pass = document.getElementById("password").value;

    if (pass === "question") {
        alert("I have a question");
        window.location.href = "valentines.html";
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
