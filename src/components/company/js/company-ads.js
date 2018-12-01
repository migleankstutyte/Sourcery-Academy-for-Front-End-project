// show side-bar content, when side-bar element is clicked
const content = document.getElementById("js-content");
const ads = document.getElementById("js-company-ads");

ads.addEventListener("click", function() {
    document.getElementById("js-content").innerHTML = `
        <div class="create-btn">
            <div class="create-btn__button">
                <a href="#openModal" title="Create new ad" class="create-btn__button-text">Create New Ad</a>
            </div>
        </div>
        
        <div id="openModal" class="modal">
            <div class="modal__content">
                <a href="#close" title="Close" class="close"><i class="fas fa-times"></i></a>
                <h1>Create New Ad</h1>
                <div class="modal__row">
                    <label for="title" class="modal__row-title">Title</label>
                    <select name="cars" id="title" class="modal__row-select">
                        <option value="blank">-</option>
                        <option value="Designer (UI)">Designer (UI)</option>
                        <option value="Director of Engineering Office in Vilnius">Director of Engineering Office in Vilnius</option>
                        <option value=".Net Developer">.Net Developer</option>
                        <option value="QA Analyst">QA Analyst</option>
                        <option value="Product Owner">Product Owner</option>
                        <option value="Senior Designer (UI)">Senior Designer (UI)</option>
                        <option value="Senior iOS Developer">Senior iOS Developer</option>
                        <option value="Senior Java Developer">Senior Java Developer</option>
                        <option value="Senior .Net Developer">Senior .Net Developer</option>
                        <option value="Strategic Account Executive">Strategic Account Executive</option>
                    </select>
                </div>
                <div class="modal__row">
                    <label for="requirment" class="modal__row-title">Requirments</label>
                    <textarea name="message" rows="5" cols="48" class="modal__row-textarea"></textarea>
                </div>
                <div class="modal__row">
                    <label for="date" class="modal__row-title">Application deadline</label>
                    <input type="date" id="date" class="modal__row-input"></input>
                </div>
                <div class="create-btn__button">
                    <a href="#close" title="Add new ad" class="create-btn__button-text">Add new ad</a>
                </div>
            </div>
        </div>
        </div>

        <button onclick="topFunction()" id="myBtn" class="to-top-button" title="Go to top" type="button" role="button" aria-label="Go to top"><i class="fas fa-angle-up fa-2x"></i></button>

        <div class="ads">
            <div class="ads__headline">
                <div class="ads__headline-title">Title</div>
                <div class="ads__headline-date">Date</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Senior Java Developer</div>
                <div class="ads__row-date">05-24 11:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Senior Designer (UI)</div>
                <div class="ads__row-date">05-20 12:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">.Net Developer</div>
                <div class="ads__row-date">05-18 10:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Senior iOS Developer</div>
                <div class="ads__row-date">05-18 14:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">QA Analyst</div>
                <div class="ads__row-date">05-16 10:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Strategic Account Executive</div>
                <div class="ads__row-date">05-15 10:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Product Owner</div>
                <div class="ads__row-date">05-15 19:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Designer (UI)</div>
                <div class="ads__row-date">05-09 08:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Director of Engineering Office in Vilnius</div>
                <div class="ads__row-date">05-09 12:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Senior .Net Developer</div>
                <div class="ads__row-date">05-08 13:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">.Net Developer</div>
                <div class="ads__row-date">05-04 10:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Senior Java Developer</div>
                <div class="ads__row-date">05-02 09:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">QA Analyst</div>
                <div class="ads__row-date">05-02 11:30 AM</div>
            </div>
            <div class="ads__row">
                <div class="ads__row-title">Strategic Account Executive</div>
                <div class="ads__row-date">04-17 14:30 AM</div>
            </div>
        </div>`;
});

setTimeout(function() {
    // show side-bar content, when side-bar element is clicked
    const events = document.getElementById("js-events");
    events.addEventListener("click", function() {
        document.getElementById("js-content").innerHTML = `
        <div class="filter-bar">
            <div class="filter-bar__left">
                <button class="filter-bar-button" role="button" aria-label="View All">
                    <p class="filter-bar-button__main">View All</p>
                </button>
                <button class="filter-bar-button filter-bar-button--active" role="button" aria-label="Reccurence" aria-pressed="true">
                    <p class="filter-bar-button__main">Reccurence<i class="fas fa-times"></i></p>
                </button>
            </div>
            <div class="filter-bar__right">
                <div class="search">
                    <input type="search"title="Keywords for a site-wide search" aria-label="Keywords for a site-wide search" class="form-control input-append" placeholder="Search"/>
                    <img role="img" src="/images/company_icons/Magnifying_ico.svg" alt="search"/>
                </div>
            </div>
        </div>

        <button onclick="topFunction()" id="myBtn" class="to-top-button" title="Go to top" type="button" role="button" aria-label="Go to top"><i class="fas fa-angle-up fa-2x"></i></button>

        <table class="events" role="table" aria-label="Events">
            <tr class="events__headline" role="row">
                <th class="events__headline-title" role="columnheader">Title</th>
                <th class="events__headline-recurring" role="columnheader">Is recurring</th>
                <th class="events__headline-date" role="columnheader">Start-end Date</th>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">April birthdays!</td>
                <td class="events__row-recurring" role="cell" role="cell">No</td>
                <td class="events__row-date" role="cell" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Vilnius pizza party</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Vilnius Geek Night 2</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">March Birthdays!</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Hercules Trophy Baltics</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Kaunas Half Marathon</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Vilnius Challenge</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Kaunas Marathon</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Kaunas Marathon</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">ATDD for AngularJS projects</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Chicago Spring Half Marathon</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Devbridge @ Automate 2015</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">Devbridge @ SXSW</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
            <tr class="events__row" role="row">
                <td class="events__row-title" role="cell">February Raging Bagel</td>
                <td class="events__row-recurring" role="cell">No</td>
                <td class="events__row-date" role="cell">05-05 11:00 AM - 05-06 11:30 AM</td>
            </tr>
        </table>
        `;
    });
}, 10);
