// Activity Filter by cards type

const cardsArray = document.querySelectorAll(".activity-card-item");
const allCardsButton = document.querySelector(".js-cards-all");
const eventsButton = document.querySelector(".js-cards-events");
const blogButton = document.querySelector(".js-cards-blog");
const socialButton = document.querySelector(".js-cards-social");

if (allCardsButton) {
    allCardsButton.addEventListener('click', () => {
        Array.from(cardsArray, e => e.style.display = "block");
    });

    eventsButton.addEventListener('click', () => {
        Array.from(cardsArray, e => e.style.display = "none");
        let eventsArray = document.querySelectorAll(".js-events");
        Array.from(eventsArray, e => e.style.display = "block");
    });

    blogButton.addEventListener('click', () => {
        Array.from(cardsArray, e => e.style.display = "none");
        let blogArray = document.querySelectorAll(".js-blog");
        Array.from(blogArray, e => e.style.display = "block");
    });

    socialButton.addEventListener('click', () => {
        Array.from(cardsArray, e => e.style.display = "none");
        let socialArray = document.querySelectorAll(".js-social");
        Array.from(socialArray, e => e.style.display = "block");
    });

    // Underline button when clicked

    const cardsButtonsBlock = document.querySelector(".activity-filter__list");
    const filterCardsBtns = cardsButtonsBlock.querySelectorAll("li");
    filterCardsBtns.forEach(e => {
        e.addEventListener("click", function () {
            let current = document.getElementsByClassName("activity-filter__list-item--active");
            current[0].className = current[0].className.replace(" activity-filter__list-item--active", "");
            this.className += " activity-filter__list-item--active";
        });
    });
};
