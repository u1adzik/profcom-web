function passwdToggle() {
    
    let x = document.getElementById("passwd-icon");
    if (x.innerHTML === "visibility_off") {
        x.innerHTML = "visibility";
    } else {
        x.innerHTML = "visibility_off";
    }

    let y = document.getElementById("passwd-input");
    if (y.getAttribute('type') === "password") {
        y.setAttribute("type", "text");
    } else {
        y.setAttribute("type", "password");
    }
    
}