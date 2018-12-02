// remove Teams button, when "x" is pressed
const btn = document.getElementById("fa-times");
btn.onclick = function() {
    document.getElementById("teams").remove();
};

// Show calendar
const pickDate = document.getElementById("pick-date");
const calendar = document.getElementById("calendar");

pickDate.addEventListener(
    "click",
    function() {
        calendar.classList.toggle("appear");
    },
    false
);
