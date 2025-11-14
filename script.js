let body = document.body;
let lock_screen = document.getElementById("lock-screen");
let form = document.getElementById("form");
let password = document.getElementById("password");

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    login();

});

// ------------------------------------------------------------------------------------------------

function check_login(event) {

    event.preventDefault();

    if (password.value == "test") {
        login();
    }
    else {
        wrong_password();
    }

};

// ------------------------------------------------------------------------------------------------

function login() {

    lock_screen.style.animation = "show-home-screen 0.5s";

    setTimeout(() => {

        lock_screen.remove();

        setTimeout(() => {

            show_desktop();

        }, 500);

    }, 400);

};

// ------------------------------------------------------------------------------------------------

function wrong_password() {

    form.style.removeProperty("animation");

    form.offsetWidth;

    form.style.animation = "show-error 0.3s";

    let error_audio = new Audio("Sounds/Error.mp3");

    error_audio.play();

    return;

};

// ------------------------------------------------------------------------------------------------

function show_desktop() {

    show_desktop_icons();

    show_taskbar();

};

// ------------------------------------------------------------------------------------------------

function show_desktop_icons() {

    let desktop_icons_box = document.createElement("div");
    desktop_icons_box.classList.add("desktop-icon-box");

    let files_icon = document.createElement("div");

    files_icon.classList.add("desktop-icon-files");
    files_icon.classList.add("icon-box");

    files_icon.onclick = open_files;

    files_icon.innerHTML = `

        <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        <span>Files</span>

    `;

    let browser_icon = document.createElement("div");

    browser_icon.classList.add("desktop-icon-browser");
    browser_icon.classList.add("icon-box");

    browser_icon.onclick = open_browser;

    browser_icon.innerHTML = `

        <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        <span>Browser</span>

    `;

    let trash_icon = document.createElement("div");

    trash_icon.classList.add("desktop-icon-trash");
    trash_icon.classList.add("icon-box");

    trash_icon.onclick = open_trash;

    trash_icon.innerHTML = `

        <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        <span>Trash</span>

    `;

    desktop_icons_box.appendChild(files_icon);
    desktop_icons_box.appendChild(browser_icon);
    desktop_icons_box.appendChild(trash_icon);
    body.appendChild(desktop_icons_box);

};

// ------------------------------------------------------------------------------------------------

function show_taskbar() {

    let taskbar_box = document.createElement("div");
    taskbar_box.classList.add("taskbar-box");

    let taskbar = document.createElement("div");
    taskbar.classList.add("taskbar");

    taskbar.innerHTML = `

        <div class="icon-box">

            <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        </div>

        <div class="icon-box">

            <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        </div>

        <div class="icon-box">

            <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        </div>

        <div class="icon-box">

            <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        </div>

        <div class="icon-box">

            <img class="icon" src="Images/Desktop Icon (Default).png" alt="Icon">

        </div>

    `;

    taskbar_box.appendChild(taskbar);
    body.appendChild(taskbar_box);

};