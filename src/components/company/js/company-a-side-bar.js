// show side-bar elements
const arr = [{
        title: "Projects",
        id: 'id="js-project"',
        hasPicture: '',
        href: "/html/company/company-projects.html"
    },
    {
        title: "Articles",
        id: 'id="js-articles"',
        hasPicture: '',
        href: "/html/company/company-empty.html"
    },
    {
        title: "Dashboard",
        id: 'id="js-dashbord"',
        hasPicture: '<img src="../images/company_icons/Arrow.png" alt="Arrow"/>',
        href: "/html/company/company-empty.html"
    },
    {
        title: "Reports",
        id: 'id="js-reports"',
        hasPicture: '',
        href: "/html/company/company-empty.html"
    },
    {
        title: "Tasks",
        id: 'id="js-tasks"',
        hasPicture: '',
        href: "/html/company/company-empty.html"
    },
    {
        title: "Events",
        id: 'id="js-events"',
        hasPicture: '',
        href: "/html/company/company-events.html"
    },
    {
        title: "Company Ads",
        id: 'id="js-company-ads"',
        hasPicture: '',
        href: "/html/company/company-ads.html"
    },
    {
        title: "Client Account",
        id: 'id="js-client-account"',
        hasPicture: '',
        href: "/html/company/company-empty.html"
    },
    {
        title: "Feedback/tickets",
        id: 'id="js-feedback"',
        hasPicture: '',
        href: "/html/company/company-empty.html"
    }
];

if (btn) {

    // Show side bar in desktop menu
    function renderSideBarElements() {
        let resultHtml = ""; // create empty variable
        // loop through array
        for (let i = 0; i < arr.length; i++) {
            resultHtml += `
        <li role="menuitem" class="nav-list__item" ${arr[i].id}"> 
            <a href="#" class="nav-list__item-link">${arr[i].title}${arr[i].hasPicture}</a>
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
        <li role="menuitem" class="list__item" ${arr[i].id}"> 
            <a href="${arr[i].href}">${arr[i].title}${arr[i].hasPicture}
        </li>`;
        }
        document.querySelector(".list").innerHTML = resultHtml; //show results
    }

    renderSideBarElementsMobile(); // call function

    // Toggle Company side bar
    function toggleSidebar(ref) {
        document.body.classList.toggle("sidebar-active");
    }
}
