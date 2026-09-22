// ==============================
// MOBILE NAVIGATION
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// ==============================
// CLOSE MOBILE MENU
// AFTER CLICKING A LINK
// ==============================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ==============================
// WELCOME MESSAGE
// ==============================

console.log(
    "Welcome to Tii Isaac Mandiayin's personal website."
);