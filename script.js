const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");
const formatSwitch = document.getElementById("formatSwitch");

let is24Hour = false;

function updateClock() {

    const now = new Date();

    let hour = now.getHours();

    /* 12-hour format */

    if (!is24Hour) {
        hour = hour % 12 || 12;
    }

    /* Hours */

    hours.textContent =
        String(hour).padStart(2, "0");

    /* Minutes */

    minutes.textContent =
        String(now.getMinutes()).padStart(2, "0");

    /* Seconds */

    seconds.textContent =
        String(now.getSeconds()).padStart(2, "0");

    /* AM / PM */

    if (is24Hour) {

        ampm.textContent = "";

    } else {

        ampm.textContent =
            now.getHours() >= 12 ? "PM" : "AM";

    }

    /* Date */

    date.textContent =
        now.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });
}


/* 12H / 24H switch */

formatSwitch.addEventListener("change", function () {

    is24Hour = this.checked;

    updateClock();

});


/* Start clock */

updateClock();


/* Update every second */

setInterval(updateClock, 1000);