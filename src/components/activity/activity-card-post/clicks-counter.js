setTimeout(function() {
    const socialButtonsArray = document.querySelectorAll(".js-clickme");
    socialButtonsArray.forEach(elem => {
        elem.addEventListener("click", () => {
            if (event.target.classList.contains("js-clickme")) {
                let count = Number(event.target.children[1].textContent);
                count += 1;
                event.target.children[1].innerHTML = count;
            }
        });
    });
}, 10);

setTimeout(function() {
    const likesDelete = document.querySelector(".js-likes-delete");
    likesDelete.addEventListener("click", () => {
        const deleteNumber = document.querySelector(".js-delete-number");
        let count = Number(deleteNumber.textContent);
        if (count > 0) {
            count -= 1;
            deleteNumber.innerHTML = count;
        }
    });
}, 10);

// Change button text color depends on what class do u use

const buttonColorPicker = document.querySelector(".social-button__icon");
const colorTarget = document.querySelector(".js-likes-number")

if(buttonColorPicker.classList.contains("js-empty-heart")){
    colorTarget.style.color= "#13191b";
}