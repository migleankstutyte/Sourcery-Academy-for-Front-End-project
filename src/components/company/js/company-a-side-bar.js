// show side-bar elements
const arr = [
    {
        title: "Projects",
        id: 'id="js-project"',
        hasPicture: false
    },
    {
        title: "Articles",
        id: 'id="js-articles"',
        hasPicture: false
    },
    {
        title: "Dashboard",
        id: 'id="js-dashbord"',
        hasPicture: true
    },
    {
        title: "Reports",
        id: 'id="js-reports"',
        hasPicture: false
    },
    {
        title: "Tasks",
        id: 'id="js-tasks"',
        hasPicture: false
    },
    {
        title: "Events",
        id: 'id="js-events"',
        hasPicture: false
    },
    {
        title: "Company Ads",
        id: 'id="js-company-ads"',
        hasPicture: false,
        href: "/html/company-ads.html"
    },
    {
        title: "Client Account",
        id: 'id="js-client-account"',
        hasPicture: false
    },
    {
        title: "Feedback/tickets",
        id: 'id="js-feedback"',
        hasPicture: false
    }
];

// Show side bar in desktop menu
function renderSideBarElements() {
    let resultHtml = ""; // create empty variable
    // loop through array
    for (let i = 0; i < arr.length; i++) {
        resultHtml += `
        <li class="nav-list_item" ${arr[i].id}"> 
            <a href="#" class="nav-list__item-link">${arr[i].title}
            ${
                arr[i].hasPicture // If array has picture (arrow in side-bar) - show img
                    ? `<span>
                  <img src="../images/company_icons/Arrow.png" alt="Arrow"/>
              </span></a>`
                    : ""
            }
        </li>`;
    }
    document.querySelector(".nav-list").innerHTML = resultHtml; //show results
}

renderSideBarElements(); // call function

// Show side bar in mobile menu
function renderSideBarElementsMobile() {
    let resultHtml = ""; // create empty variable
    // loop through array
    for (let i = 0; i < arr.length; i++) {
        resultHtml += `
        <li class="list__item" ${arr[i].id}"> 
            <a href="${arr[i].href}">${arr[i].title}
            ${
                arr[i].hasPicture // If array has picture (arrow in side-bar) - show img
                    ? `<span>
                  <img src="../images/company_icons/Arrow.png" alt="Arrow"/>
              </span></a>`
                    : ""
            }
        </li>`;
    }
    document.querySelector(".list").innerHTML = resultHtml; //show results
}

renderSideBarElementsMobile(); // call function

// Toggle Company side bar
function toggleSidebar(ref) {
    document.body.classList.toggle("sidebar-active");
}
