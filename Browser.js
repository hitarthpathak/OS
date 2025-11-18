function open_browser() {

    open_app("browser-app", "BROWSER", `
    
        <div class="browser-body">

            <div class="search-bar-box">

                <input id="search-bar" type="text" placeholder="Enter URL">

                <input id="search-button" type="submit" value="Search">

            </div>

            <hr />

            <div class="bookmarks-box">

                <button id="internet-archive-bookmark">Internet Archive</button>

                <button id="wikipedia-bookmark">Wikipedia</button>

                <button id="maps-bookmark">Maps</button>

                <button id="bitchute-bookmark">BitChute</button>

                <button id="dailymail-bookmark">DailyMail</button>

                <button id="the-free-press-journal-bookmark">The Free Press Journal</button>

                <button id="healthline-bookmark">Healthline</button>

            </div>

            <hr />

            <div id="tabs-box">

                <div id="tabs-list">

                    <div id="tab-box">

                        <div id="tab">Tab</div>

                        <button class="close-tab-button">x</button>

                    </div>

                </div>

                <button id="new-tab-button">+</button>

            </div>

            <hr />

            <iframe id="search-results" src="https://wikipedia.org"></iframe>

        </div>
    
    `);

    let search_bar = document.getElementById("search-bar");
    let search_button = document.getElementById("search-button");
    let search_results = document.getElementById("search-results");

    search_bar.addEventListener("keypress", (event) => {

        if (event.key == "Enter") {

            browser_search(search_bar, search_results);

        }

    });

    search_button.addEventListener("click", () => {

        browser_search(search_bar, search_results);

    });

    open_new_tab();

    open_bookmarks(search_results);

};

// ------------------------------------------------------------------------------------------------

function open_new_tab() {

    let tabs_list = document.getElementById("tabs-list");
    let new_tab_button = document.getElementById("new-tab-button");

    new_tab_button.addEventListener("click", () => {

        let new_tab = document.createElement("div");
        new_tab.id = "tab";
        new_tab.textContent = "Tab";

        let close_tab_button = document.createElement("button");
        close_tab_button.classList.add("close-tab-button");
        close_tab_button.textContent = "x";
        close_tab_button.addEventListener("click", close_tab);

        let tab_box = document.createElement("div");
        tab_box.id = "tab-box";

        tab_box.appendChild(new_tab);
        tab_box.appendChild(close_tab_button);

        tabs_list.appendChild(tab_box);

    });

};

// ------------------------------------------------------------------------------------------------

function close_tab(event) {

    let tab_box = event.target.closest('#tab-box');

    if (tab_box) {

        tab_box.remove();

    }

};

// ------------------------------------------------------------------------------------------------

function browser_search(search_bar, search_results) {

    let search_query = "";

    if (search_bar.value.startsWith("https://")) {
        search_query = search_bar.value;
    }
    else {
        search_query = "https://" + search_bar.value;
    }

    search_results.src = search_query;

};

// ------------------------------------------------------------------------------------------------

function open_bookmarks(search_results) {

    let internet_archive_bookmark = document.getElementById("internet-archive-bookmark");

    internet_archive_bookmark.addEventListener("click", () => {

        search_results.src = "https://archive.org";

    });

    let wikipedia_bookmark = document.getElementById("wikipedia-bookmark");

    wikipedia_bookmark.addEventListener("click", () => {

        search_results.src = "https://wikipedia.org";

    });

    let maps_bookmark = document.getElementById("maps-bookmark");

    maps_bookmark.addEventListener("click", () => {

        search_results.src = "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik";

    });

    let bitchute_bookmark = document.getElementById("bitchute-bookmark");

    bitchute_bookmark.addEventListener("click", () => {

        search_results.src = "https://bitchute.com";

    });

    let dailymail_bookmark = document.getElementById("dailymail-bookmark");

    dailymail_bookmark.addEventListener("click", () => {

        search_results.src = "https://dailymail.co.uk";

    });

    let the_free_press_journal_bookmark = document.getElementById("the-free-press-journal-bookmark");

    the_free_press_journal_bookmark.addEventListener("click", () => {

        search_results.src = "https://freepressjournal.in";

    });

    let healthline_bookmark = document.getElementById("healthline-bookmark");

    healthline_bookmark.addEventListener("click", () => {

        search_results.src = "https://healthline.com";

    });

};