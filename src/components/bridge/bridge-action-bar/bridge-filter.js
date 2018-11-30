// Bridge Filter by Location

const membersArray = document.querySelectorAll(".bridge-team__member");
const allButton = document.querySelector(".js-all-team");
const kaunasButton = document.querySelector(".js-kaunas-team");
const vilniusButton = document.querySelector(".js-vilnius-team");
const chicagoButton = document.querySelector(".js-chicago-team");

allButton.addEventListener('click', () => {
    Array.from(membersArray, e => e.style.display = "block");
});

kaunasButton.addEventListener('click', () => {
    Array.from(membersArray, e => e.style.display = "none");
    let kaunasArray = document.querySelectorAll(".js-kaunas");
    Array.from(kaunasArray, e => e.style.display = "block");
});

vilniusButton.addEventListener('click', () => {
    Array.from(membersArray, e => e.style.display = "none");
    let vilniusArray = document.querySelectorAll(".js-vilnius");
    Array.from(vilniusArray, e => e.style.display = "block");
});

chicagoButton.addEventListener('click', () => {
    Array.from(membersArray, e => e.style.display = "none");
    let chicagoArray = document.querySelectorAll(".js-chicago");
    Array.from(chicagoArray, e => e.style.display = "block");
});

///////////////////////////////////////////////////////
// Bridge Dropdown Filter

const bridgeSelector = document.querySelector('.bridge-filter__button');
const bridgeArray = document.querySelectorAll(".bridge");

bridgeSelector.addEventListener('change', () => {
    Array.from(bridgeArray, e => e.style.display = "none");
    let insideClass = bridgeSelector.options[bridgeSelector.selectedIndex].className;
    if (insideClass == "select-departament") {
        Array.from(bridgeArray, e => e.style.display = "block");
    } 
    else{
        let newValue = document.querySelector(".js-" + insideClass);
        newValue.style.display = "block";
    }
});
