let lock_screen = document.getElementById("lock-screen");
let form = document.getElementById("form");
let password = document.getElementById("password");

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

        lock_screen.style.display = "none";

    }, 400);

};

// ------------------------------------------------------------------------------------------------

function wrong_password() {

    form.style.removeProperty("animation");

    form.offsetWidth;

    form.style.animation = "show-error 0.3s";

};