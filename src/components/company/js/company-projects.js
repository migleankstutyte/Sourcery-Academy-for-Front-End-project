setTimeout(function() {
    // show side-bar content, when side-bar element is clicked
    const content = document.getElementById("js-content");
    const projects = document.getElementById("js-project");
    projects.addEventListener("click", function() {
        content.innerHTML = `
        <div class="filter-bar">
            <div class="filter-bar__left">
                <div class="first-block">
                    <button class="filter-bar-button" title="View all" role="button" aria-label="View All">
                        <p class="filter-bar-button__main">View All</p>
                    </button>
                    <button class="filter-bar-button filter-bar-button--active" title="Teams" id="teams" role="button" aria-label="Reccurence" aria-pressed="true">
                        <p class="filter-bar-button__main">Teams<i class="fas fa-times" id="fa-times"></i></p>
                    </button>
                    <select class="filter-bar-button filter-bar-button--select" title="Select project" aria-label="Projects"aria-orientation="vertical" role="listbox"><i class="fas fa-angle-down"></i>
                        <option class="filter-bar-button__main" role="option" value="0">Projects</option>
                        <option class="filter-bar-button__main" role="option" value="1">CSG Government Solutions</option>
                        <option class="filter-bar-button__main" role="option" value="2">Nexenta</option>
                        <option class="filter-bar-button__main" role="option" value="3">Uptake Technologies</option>
                        <option class="filter-bar-button__main" role="option" value="4">Monotype.com</option>
                        <option class="filter-bar-button__main" role="option" value="5">Byline Bank</option>
                        <option class="filter-bar-button__main" role="option" value="6">Art Institute of Chicago</option>
                        <option class="filter-bar-button__main" role="option" value="7">Fonts.com</option>
                        <option class="filter-bar-button__main" role="option" value="8">AclsOnline.us</option>
                        <option class="filter-bar-button__main" role="option" value="9">Jet Support</option>
                        <option class="filter-bar-button__main" role="option" value="10">Monotype Recorder</option>
                        <option class="filter-bar-button__main" role="option" value="11">Penta Technologies</option>
                        <option class="filter-bar-button__main" role="option" value="12">Monotype.com</option>
                        <option class="filter-bar-button__main" role="option" value="13">Byline Bank</option>
                        <option class="filter-bar-button__main" role="option" value="14">Nexenta</option>
                    </select>
                </div>
                <div class="second-block">
                    <button class="filter-bar-button" title="Choose date" id="pick-date" role="button" aria-label="Choose date">
                        <p class="filter-bar-button__main"><img src="/../../images/company_icons/Calendar_ico.png" alt="Calendar"/>Dates<i class="fas fa-angle-down"></i></p>
                        <div id="calendar" class="calendar">
                            <input type="date" value="2018-12-04"/>
                        </div>
                    </button>
                    <div class="no-space">
                        <button class="filter-bar-button filter-bar-button--small create-btn" title="Email" role="button" aria-label="Email">
                            <a href="#openEmailModal" class="create-btn__button-text create-btn__button-text--email">
                                <p class="filter-bar-button__main">
                                    <img src="/../../images/company_icons/Email.png" alt="Email"/></i>
                                </p>
                            </a>
                        </button><button class="filter-bar-button filter-bar-button--small" title="Download" id="download" role="button" aria-label="Download">
                                <a href="#openDownloadModal" class="create-btn__button-text create-btn__button-text--email">
                                    <p class="filter-bar-button__main"><img src="/../../images/company_icons/Download.png" alt="Download"/></p>
                                </a>
                        </button>
                    </div>
                </div>
                <div id="openEmailModal" class="modal modal--email">
                    <div class="modal__content">
                        <a href="#close" title="Close" class="close" aria-label="Close"><i class="fas fa-times"></i></a>
                        <div class="modal__row">
                            <label for="email" class="modal__row-title">Email</label>
                            <input type="email" name="email" id="email" class="modal__row-textarea" aria-label="requirments" aria-multiline="true" contenteditable="true">
                        </div>
                        <div>
                            <button type="submit" id="send" title="Send" class="create-btn__button create-btn__button--send">Send</button>
                            <button class="create-btn__button create-btn__button--close"><a href="#close" title="Close" class="create-btn__button-text" role="button" aria-label="Send" tabindex="1" >Close</a></button>
                        </div>
                        <div id="textDiv" class="modal__row modal__row--text"></div>
                    </div>
                </div>
                <div id="openDownloadModal" class="modal modal--download">
                    <div class="modal__content">
                        <a href="#close" title="Close" class="close" aria-label="Close"><i class="fas fa-times"></i></a>
                        <p>Downloaded</p>
                    </div>
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
