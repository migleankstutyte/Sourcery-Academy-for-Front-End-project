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
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-projects/company-projects.html', true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
      }
    };
    
    request.send();
    });


articles.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-articles/company-articles.html', true);
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });


dashboard.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-articles/company-articles.html', true); //need to replace path
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });

reports.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-articles/company-articles.html', true); //need to replace path
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });

tasks.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-tasks/company-tasks.html', true);
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });

events.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-events/company-events.html', true);
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });

companyAds.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', 'C:\Mi\Programavimas\Devbridge Group project\sfe-andrius-silale\src\components\company\pages\company-ads\company-ads.html', true);
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });

clientAccount.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-client-account/company-client-account.html', true);
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });

feedback.addEventListener("click", function() { 
    var request = new XMLHttpRequest();
    
    request.open('GET', '/pages/company-articles/company-articles.html', true); //need to replace path
    
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText;
    
        content.innerHTML = resp;
        }
    };
    
    request.send();
    });


