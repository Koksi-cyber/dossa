// window.addEventListener('scroll', function () {
//     let header = document.querySelector('nav');
//     header.classList.toggle('sticky', window.scrollY > 0);
// });

// var loadingOverlay = document.querySelector('.loading');
// function toggleLoading(event) {

//     document.activeElement.blur();

//     if (loadingOverlay.classList.contains('hidden')) {
//         loadingOverlay.classList.remove('hidden');
//     } else {
//         loadingOverlay.classList.add('hidden');
//     }
// }
// loadingOverlay.addEventListener('click', toggleLoading);


// copied code

(function () {

    

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    $(document).ready(function() { 
$("#shape").hover(function() {
  $(this).toggleClass('paused'); //Pauses on hover
});
});
})();
