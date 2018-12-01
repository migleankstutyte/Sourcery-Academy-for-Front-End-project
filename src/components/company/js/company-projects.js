setTimeout(function() {
    // show side-bar content, when side-bar element is clicked
    const content = document.getElementById("js-content");
    const projects = document.getElementById("js-project");
    projects.addEventListener("click", function() {
        content.innerHTML = `
        <div class="filter-bar">
            <div class="filter-bar__left">
            <button class="filter-bar-button" role="button" aria-label="View All">
                <p class="filter-bar-button__main">View All</p>
            </button>
            <button class="filter-bar-button filter-bar-button--active" role="button" aria-label="Reccurence" aria-pressed="true">
                <p class="filter-bar-button__main">Teams<i class="fas fa-times"></i></p>
            </button>
            <button class="filter-bar-button" role="button" aria-label="Projects">
                <p class="filter-bar-button__main">Projects<i class="fas fa-angle-down"></i></p>
            </button>
            <button class="filter-bar-button" role="button" aria-label="Choose date">
                <p class="filter-bar-button__main"><img src="../images/company_icons/Calendar_ico.png" alt="Calendar"/>Dates<i class="fas fa-angle-down"></i></p>
            </button>
            <div class="no-space">
                <button class="filter-bar-button filter-bar-button--small" role="button" aria-label="Projects">
                    <p class="filter-bar-button__main"><img src="../images/company_icons/Email.png" alt="Email"/></i></p>
                </button><button class="filter-bar-button filter-bar-button--small" role="button" aria-label="Projects">
                    <p class="filter-bar-button__main"><img src="../images/company_icons/Download.png" alt="Download"/></p>
                </button>
            </div>
            </div>
            <div class="filter-bar__right">
                <div class="search">
                <input type="search"title="Keywords for a site-wide search"
                aria-label="Keywords for a site-wide search" class="form-control input-append" placeholder="Search"/>
                <img role="img" src="/images/company_icons/Magnifying_ico.svg" alt="search"/>
            </div>
            </div>
        </div>

        <table class="projects" role="table" aria-label="Events">
            <tr class="projects__headline" role="row">
                <th class="projects__headline-projects" role="columnheader">Project</th>
                <th class="projects__headline-progress" role="columnheader">Progress</th>
                <th class="projects__headline-act" role="columnheader">Act.h</th>
                <th class="projects__headline-est" role="columnheader">Est.h</th>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">CSG Government Solutions</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--34-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">34%</td>
                <td class="projects__row-act" role="cell">350</td>
                <td class="projects__row-est" role="cell">1500</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Nexenta</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--74-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">74%</td>
                <td class="projects__row-act" role="cell">1800</td>
                <td class="projects__row-est" role="cell">2500</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Uptake Technologies</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--24-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">24%</td>
                <td class="projects__row-act" role="cell">1000</td>
                <td class="projects__row-est" role="cell">1800</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Monotype.com</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--100-green"></div>
                    </div>
                </td>
                <td class="projects__row-progress projects__row-progress--green">100%</td>
                <td class="projects__row-act" role="cell">1900</td>
                <td class="projects__row-est" role="cell">1900</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Byline Bank</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--24-400-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">24%</td>
                <td class="projects__row-act" role="cell">400</td>
                <td class="projects__row-est" role="cell">1500</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Art Institute of Chicago </div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--37-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">37%</td>
                <td class="projects__row-act" role="cell">800</td>
                <td class="projects__row-est" role="cell">2500</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Fonts.com</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--24-red"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">-24%<img src="../images/company_icons/Arrow_red.png" alt="Arrow"/></td>
                <td class="projects__row-act projects__row-act--red">2500</td>
                <td class="projects__row-est" role="cell">1800</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">AclsOnline.us</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--24-350-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">24%</td>
                <td class="projects__row-act" role="cell">350</td>
                <td class="projects__row-est" role="cell">1900</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Jet Support</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--55-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">55%</td>
                <td class="projects__row-act" role="cell">1800</td>
                <td class="projects__row-est" role="cell">1500</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Monotype Recorder</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--76-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">76%</td>
                <td class="projects__row-act" role="cell">1000</td>
                <td class="projects__row-est" role="cell">2500</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Penta Technologies</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--21-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">21%</td>
                <td class="projects__row-act" role="cell">1900</td>
                <td class="projects__row-est" role="cell">1800</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Monotype.com</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--11-red"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">-11%<img src="../images/company_icons/Arrow_red.png" alt="Arrow"/></td>
                <td class="projects__row-act projects__row-act--red">2500</td>
                <td class="projects__row-est" role="cell">1900</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Byline Bank</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--15-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">15%</td>
                <td class="projects__row-act" role="cell">800</td>
                <td class="projects__row-est" role="cell">1500</td>
            </tr>
            <tr class="projects__row" role="row">
                <td class="projects__row-projects" role="cell">
                    <div class="description">
                        <div class="description__image"><img src="../images/company_icons/Ico.png" alt="Folder icon"/></div>
                        <div class="description__title">Nexenta</div>
                    </div>
                    <div class="line">
                        <div class="line__long"></div>
                        <div class="line__underline line__underline--81-blue"></div>
                    </div>
                </td>
                <td class="projects__row-progress" role="cell">81%</td>
                <td class="projects__row-act" role="cell">2100</td>
                <td class="projects__row-est" role="cell">2500</td>
            </tr>
        </table>

        `;
    });
}, 10);
