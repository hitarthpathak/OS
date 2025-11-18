function open_clock() {

    open_app("clock-app", "CLOCK", `

        <div class="clock-body">

            <div class="number" style="--n:1"><b>1</b></div>
            <div class="number" style="--n:2"><b>2</b></div>
            <div class="number" style="--n:3"><b>3</b></div>
            <div class="number" style="--n:4"><b>4</b></div>
            <div class="number" style="--n:5"><b>5</b></div>
            <div class="number" style="--n:6"><b>6</b></div>
            <div class="number" style="--n:7"><b>7</b></div>
            <div class="number" style="--n:8"><b>8</b></div>
            <div class="number" style="--n:9"><b>9</b></div>
            <div class="number" style="--n:10"><b>10</b></div>
            <div class="number" style="--n:11"><b>11</b></div>
            <div class="number" style="--n:12"><b>12</b></div>

            <div class="centre"></div>
        
            <div class="second" id="second"></div>
            <div class="minute" id="minute"></div>
            <div class="hour" id="hour"></div>

        </div>

    `);

    clock_tick();

    setInterval(clock_tick, 1000)

};

// ------------------------------------------------------------------------------------------------

function clock_tick() {

    let second_hand = document.getElementById("second");
    let minute_hand = document.getElementById("minute");
    let hour_hand = document.getElementById("hour");

    let date = new Date();
    let seconds = date.getSeconds() / 60;
    let minutes = (seconds + date.getMinutes()) / 60;
    let hours = (minutes + date.getHours()) / 12;

    rotate_clock_hand(second_hand, seconds);
    rotate_clock_hand(minute_hand, minutes);
    rotate_clock_hand(hour_hand, hours);

};

// --------------------------------------------------------------------------------------------------

function rotate_clock_hand(element, rotation) {

    element.style.setProperty("--rotate", rotation * 360);

};