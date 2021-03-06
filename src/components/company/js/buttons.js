// remove Teams button, when "x" is pressed
const btn = document.getElementById("fa-times");
const hiddenGreen = document.getElementById("hidden-green");
const hiddenRed = document.getElementById("hidden-red");
if (btn) {
    btn.onclick = function () {
        document.getElementById("teams").remove();
        document.getElementById("hidden-green").style.display = "flex";
        document.getElementById("hidden-red").style.display = "flex";
    };

    // Show calendar
    const pickDate = document.getElementById("pick-date");
    const calendar = document.getElementById("calendar");

    pickDate.addEventListener(
        "click",
        function () {
            calendar.classList.toggle("appear");
        },
        false
    );

    // In modal Email button send
    const send = document.getElementById("send");
    const input = document.getElementById("email");
    send.onclick = function () {
        document.getElementById("textDiv").innerHTML = "Send. Check your email.";
        document.getElementById("email").value = "";
    };

    // Download button
    const download = document.getElementById("download");
    download.onclick = function () {
        document.getElementById("downloadDiv").innerHTML = "Saved";
    };

}
