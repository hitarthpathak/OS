function open_files() {

    open_app("files-app", "FILES", `

        <div class="files-body">

            <div class="sidebar">

                <button onclick="show_files('documents')">Documents</button>

                <hr />

                <button onclick="show_files('pictures')">Pictures</button>

                <hr />

                <button onclick="show_files('audios')">Audios</button>

                <hr />

                <button onclick="show_files('videos')">Videos</button>

            </div>

            <div id="files-collection"></div>

        </div>

    `);

    show_files("documents");

};

let default_files = [
    {
        folder: "Documents",
        icon: "Pictures/PDF (Icon).png",
        path: "Documents/Hitarth Pathak.pdf",
        type: "documents"
    },
    {
        folder: "Pictures",
        icon: "Pictures/App Icon (Default).png",
        path: "Pictures/App Icon (Default).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/User.png",
        path: "Pictures/User.png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Wallpaper.jpg",
        path: "Pictures/Wallpaper.jpg",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Files App (Icon).png",
        path: "Pictures/Files App (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Browser App (Icon).png",
        path: "Pictures/Browser App (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Trash App (Icon).png",
        path: "Pictures/Trash App (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Clock App (Icon).png",
        path: "Pictures/Clock App (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Audio (Icon).png",
        path: "Pictures/Audio (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Video (Icon).png",
        path: "Pictures/Video (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Folder (Icon).png",
        path: "Pictures/Folder (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/PDF (Icon).png",
        path: "Pictures/PDF (Icon).png",
        type: "pictures"
    },
    {
        folder: "Pictures",
        icon: "Pictures/Word (Icon).png",
        path: "Pictures/Word (Icon).png",
        type: "pictures"
    },
    {
        folder: "Audio",
        icon: "Pictures/Audio (Icon).png",
        path: "Audios/Error.mp3",
        type: "audios"
    },
    {
        folder: "Audios",
        icon: "Pictures/Audio (Icon).png",
        path: "Audios/Startup Sound.mp3",
        type: "audios"
    },
    {
        folder: "Videos",
        icon: "Pictures/Video (Icon).png",
        path: "Videos/Ayesha Hashmi.mp4",
        type: "videos"
    },
];

function show_files(type) {

    let files_collection = document.getElementById("files-collection");
    files_collection.innerHTML = "";

    let sidebar_buttons = document.querySelectorAll(".sidebar button");
    sidebar_buttons.forEach((button) => button.classList.remove("active"));

    let active_button = Array.from(sidebar_buttons).find((button) => button.textContent.toLowerCase() == type);
    if (active_button) active_button.classList.add("active");

    let filtered_files = default_files.filter((file) => file.type == type);

    filtered_files.forEach((file) => {

        let individual_file = document.createElement("div");

        individual_file.classList.add("file");

        individual_file.setAttribute("onclick", `open_file_viewer("${file.path}")`);

        let file_icon = document.createElement("img");
        file_icon.classList.add("icon");
        file_icon.style.maxWidth = "5vw";
        file_icon.id = "file-icon";
        file_icon.src = file.icon;
        file_icon.alt = "Icon";

        let file_name = document.createElement("span");
        file_name.id = "file-name";
        file_name.textContent = file.path.split("/").pop();

        individual_file.appendChild(file_icon);
        individual_file.appendChild(file_name);

        files_collection.appendChild(individual_file);

    });

};