function open_file_viewer(file_path) {

    let extension = file_path.split('.').pop().toLowerCase();

    if (["pdf", "doc", "docx"].includes(extension)) {

        open_app("file-viewer-app", "FILE VIEWER", `

            <div class="file-viewer-body">

                <iframe src="${file_path}"></iframe>

            </div>

        `);

    } else if (["jpg", "jpeg", "png", "gif", "bmp"].includes(extension)) {

        open_app("file-viewer-app", "FILE VIEWER", `

            <div class="file-viewer-body">

                <img src="${file_path}" alt="File">

            </div>

        `);

    } else if (["mp4", "webm", "ogg"].includes(extension)) {

        open_app("file-viewer-app", "FILE VIEWER", `

            <div class="file-viewer-body">

                <video controls src="${file_path}" type="video/${extension}"></video>

            </div>

        `);

    } else if (["mp3", "wav", "ogg"].includes(extension)) {

        open_app("file-viewer-app", "FILE VIEWER", `

            <div class="file-viewer-body">

                <audio controls src="${file_path}" type="audio/${extension}"></audio>

            </div>

        `);

    } else {

        open_app("file-viewer-app", "FILE VIEWER", `

            <div class="file-viewer-body">

                <p>Cannot Preview This File Type.</p>

            </div>

        `);

    }

};