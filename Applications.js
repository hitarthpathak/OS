let current_z_index = 1;

// ------------------------------------------------------------------------------------------------

function open_app(app_class, app_title, app_html) {

    if (document.querySelector(`.${app_class}`)) {

        return true;

    };

    let app = document.createElement("div");

    app.classList.add("open-app", app_class);

    app.innerHTML = `

        <div class="title-bar">

            <div class="app-name-box"><span id="app-name">${app_title}</span></div>

            <div class="app-controls-box">

                <button class="app-control" id="contract-button" onclick="contract_app('${app_class}')">Contract</button>

                <button class="app-control" id="expand-button" onclick="expand_app('${app_class}')">Expand</button>

                <button class="app-control" id="close-button" onclick="close_app('${app_class}')">Close</button>

            </div>

        </div>

        <hr />

        ${app_html}

    `;

    app.style.zIndex = current_z_index;
    current_z_index++;

    app.addEventListener("click", () => {

        app.style.zIndex = current_z_index;
        current_z_index++;

    });

    body.appendChild(app);

    if (app_class == "clock-app") {

        let contract_button = app.querySelector("#contract-button");
        let expand_button = app.querySelector("#expand-button");

        contract_button.disabled = true;
        expand_button.disabled = true;

    };

    if (app_class == "file-viewer-app") {

        let contract_button = app.querySelector("#contract-button");
        let expand_button = app.querySelector("#expand-button");

        contract_button.disabled = true;
        expand_button.disabled = true;

    };

    make_draggable(app);

};

// ------------------------------------------------------------------------------------------------

function make_draggable(app) {

    let title_bar = app.querySelector('.title-bar');
    let is_dragging = false;
    let offsetX, offsetY;

    title_bar.addEventListener('mousedown', function (e) {
        is_dragging = true;
        offsetX = e.clientX - app.offsetLeft;
        offsetY = e.clientY - app.offsetTop;
        body.style.userSelect = 'none';
    });

    body.addEventListener('mousemove', function (e) {
        if (is_dragging) {
            app.style.left = e.clientX - offsetX + 'px';
            app.style.top = e.clientY - offsetY + 'px';
            body.style.cursor = "grabbing";
        }
    });

    body.addEventListener('mouseup', function () {
        is_dragging = false;
        body.style.userSelect = '';
        body.style.cursor = "default";
    });

};

// ------------------------------------------------------------------------------------------------

function contract_app(app_class) {

    let app = document.querySelector(`.${app_class}`);

    if (!app) return;

    if (app.classList.contains("expand-app")) {
        app.classList.remove("expand-app");
        app.classList.add("contract-app");
    }
    else {
        app.classList.add("contract-app");
    }

};

// ------------------------------------------------------------------------------------------------

function expand_app(app_class) {

    let app = document.querySelector(`.${app_class}`);

    if (!app) return;

    if (app.classList.contains("contract-app")) {
        app.classList.remove("contract-app");
        app.classList.add("expand-app");
    }
    else {
        app.classList.add("expand-app");
    }

};

// ------------------------------------------------------------------------------------------------

function close_app(app_class) {

    let app = document.querySelector(`.${app_class}`);

    if (!app) return;

    app.classList.remove("open-app", "contract-app", "expand-app");
    app.classList.add("close-app");

    app.addEventListener("animationend", () => {
        app.remove();
    }, { once: true });

};