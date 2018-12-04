// top button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

if(document.getElementById("myBtn")){
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    let timeOut;
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
      window.scrollBy(0,-50);
      timeOut=setTimeout('topFunction()',10);
    }
    else clearTimeout(timeOut);
  };
}