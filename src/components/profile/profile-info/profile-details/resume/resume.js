// expands text when user clicks 'See More'. Collapse it with 'See Less'
function toggleResume(resume) {
    const reson = resume + "On";
    const resoff = resume + "Off";
    if (document.getElementById("resumeToggleSwitch")) {
        const switcher = document.getElementById("resumeToggleSwitch");
        if (document.getElementById(reson).style.display === "block") {
            document.getElementById(reson).style.display = "none";
            document.getElementById(resoff).style.display = "block";
            switcher.textContent = "See Less";
        } else {
            document.getElementById(resoff).style.display = "none";
            document.getElementById(reson).style.display = "block";
            switcher.textContent = "See More";
        }
    }
}
