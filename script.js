

var settingMenu = document.querySelector(".setting-menu");

var darkBtn = document.getElementById("dark-btn");


// for setting menu script =>
function settingMenuToggle() {
    settingMenu.classList.toggle("setting-menu-height");
}

// for dark theme script => 

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");


    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }


}

if (localStorage.getItem("theme")=="light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme")=="dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");

}

// localStorage.setItem("theme", "dark");
// localStorage.setItem("theme");
