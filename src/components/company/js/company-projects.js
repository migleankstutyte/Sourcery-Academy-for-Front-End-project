setTimeout(function() {
    // show side-bar content, when side-bar element is clicked
    const content = document.getElementById("js-content");
    const projects = document.getElementById("js-project");
    projects.addEventListener("click", function() {
        content.innerHTML = `
        aaaaaaaaaaaaaaaaaaaaa
        `;
    });
}, 10);
