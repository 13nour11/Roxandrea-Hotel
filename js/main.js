// run a sound at the begining

// =================    


let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".nav-link");
let checkDateInputs = document.querySelectorAll("input.form-control");

// make the navbar fixed at scrolling
window.onscroll = () => {
    // 600px
    if (document.documentElement.scrollTop > 600) {
        navbar.classList.add("scroll-navbar");
        // make all links white color except active link
        navLinks.forEach(navLink => { navLink.style.color = "#fff"; });
        // fuction to update active link color at the scrolling
        updateActiveLinkColor(true);
    } else {
        navbar.classList.remove("scroll-navbar");
        navLinks.forEach(navLink => { navLink.style.color = ""; }); // Reset to default color
        updateActiveLinkColor(false);
    }
};
// Update Active Link Color At Scrolling
function updateActiveLinkColor(isScrolling) {
    navLinks.forEach(navLink => {
        if (navLink.classList.contains("active")) {
            if (isScrolling) {
                navLink.classList.remove("text-white");
                navLink.style.color = "#b69100";
            } else {
                navLink.classList.add("text-white");
                navLink.style.color = ""; // Reset to default color
            }
        }
    });
}


// turn all text input into date type input at focus (clicked)
checkDateInputs.forEach( checkDateInput => {
    checkDateInput.addEventListener("focus" , () => {
        checkDateInput.type = (checkDateInput.type === "text") ? "date" : "text";
    })
})

// show background for the div of links when click on button of navbar
// document.addEventListener("DOMContentLoaded", function () {
    /*
    `DOMContentLoaded` is an event that is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. It signifies that the HTML content of the page is ready to be interacted with using JavaScript.
    Here's how you typically use it in JavaScript:
    ```javascript
    document.addEventListener('DOMContentLoaded', function() {
    // Code to run when the DOM is fully loaded
    });
    ```
    The `DOMContentLoaded` event is useful when you want to execute JavaScript code that relies on 
    the structure of the HTML document, but doesn't necessarily need to wait for all external resources 
    (like images or stylesheets) to be fully loaded. 
    It provides a faster alternative to the `load` event, which waits for all resources to load before firing.
    */
    // =============================
//     let toggleButton = document.querySelector(".navbar-toggler");
//     let linksContainer = document.getElementById("main");

//     toggleButton.addEventListener("click", function () {
//         if (window.innerWidth <= 991) {
//             let isCollapsed = linksContainer.classList.contains("show");
//             if (!isCollapsed) {
//                 linksContainer.classList.add("show-links");
//             } else {
//                 linksContainer.classList.remove("show-links");
//             }
//         }
//     });
// });
// =============================

// show background for the div of links when click on button of navbar
// If you want to include the links within the navigation bar and change the background color of the navbar to yellow when the button is clicked on medium and small screens, 
document.addEventListener("DOMContentLoaded", function() {
    let toggleButton = document.querySelector(".navbar-toggler");
    let navbar = document.querySelector('.navbar');
    toggleButton.addEventListener("click", function() {
        if (window.innerWidth <= 991) {
            navbar.classList.toggle("show-links");
            toggleButton.style.borderColor = "#fff";
            toggleButton.style.color = "#fff";
            toggleButton.style.border = "0.75px solid #fff";
        }
    });
});
