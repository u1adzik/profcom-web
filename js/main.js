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

function personInfo() {
    let x = document.getElementById("student-list");
    x.setAttribute("hidden", true);

    let y = document.getElementById("student-additional-info");
    y.style.cssText = "opacity: 1";
}

function showList() {
    let y = document.getElementById("student-additional-info");
    y.style.cssText = "opacity: 0";

    let x = document.getElementById("student-list");
    x.removeAttribute("hidden");
}