
var buttonsArray = document.querySelectorAll('.js-clickme');

buttonsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if (event.target.classList.contains('js-clickme')) {
            var count = Number(event.target.children[1].textContent) ;
            count += 1; 
            event.target.children[1].innerHTML = count;
        }
    });
});
