const projects = document.getElementById("js-projects");
const articles = document.getElementById("js-articles");
const dashboard = document.getElementById("js-dashboard");
const reports = document.getElementById("js-reports");
const tasks = document.getElementById("js-tasks");
const events = document.getElementById("js-events");
const companyAds = document.getElementById("js-company-ads");
const clientAccount = document.getElementById("js-client-account");
const feedback = document.getElementById("js-feedback");
const content = document.getElementById("js-content");

projects.addEventListener("click", function() {
    content.innerHTML = "One";
});

articles.addEventListener("click", function() {
    content.innerHTML = "Two";
});

dashboard.addEventListener("click", function() {
    content.innerHTML = "Three";
});

reports.addEventListener("click", function() {
    content.innerHTML = "Four";
});

tasks.addEventListener("click", function() {
    content.innerHTML = "Five";
});

events.addEventListener("click", function() {
    content.innerHTML = "Six";
});

companyAds.addEventListener("click", function() {
    content.innerHTML = "Seven";
});

clientAccount.addEventListener("click", function() {
    content.innerHTML = "Eight";
});

feedback.addEventListener("click", function() {
    content.innerHTML = "Nine";
});
