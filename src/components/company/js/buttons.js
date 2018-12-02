// remove Teams button, when "x" is pressed
const btn = document.getElementById('fa-times');
btn.onclick = function () {
    document.getElementById('teams').remove();
};
