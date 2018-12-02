const socialButtonsArray = document.querySelectorAll(".js-clickme");
if (socialButtonsArray) {
    socialButtonsArray.forEach(elem => {
        elem.addEventListener("click", () => {
            if (event.target.classList.contains("js-clickme")) {
                let count = Number(event.target.children[1].textContent);
                count += 1;
                event.target.children[1].innerHTML = count;
            }
        });
    });
};

    const likesDelete = document.querySelector(".js-likes-delete");
    if(likesDelete){
    likesDelete.addEventListener("click", () => {
        const deleteNumber = document.querySelector(".js-delete-number");
        let count = Number(deleteNumber.textContent);
        if (count > 0) {
            count -= 1;
            deleteNumber.innerHTML = count;
        }
    });
};
