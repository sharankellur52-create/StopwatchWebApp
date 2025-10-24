let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let running = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const lapsList = document.getElementById("lapsList");

document.getElementById("start").addEventListener("click", () => {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 10);
    }
});

document.getElementById("pause").addEventListener("click", () => {
    running = false;
    clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
    running = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapsList.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    if (running) {
        const lapTime = `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
        const li = document.createElement("li");
        li.textContent = lapTime;
        lapsList.appendChild(li);
    }
});

function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = pad(minutes);
    secondsDisplay.textContent = pad(seconds);
    millisecondsDisplay.textContent = pad(milliseconds);
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
