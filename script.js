/* ================= SKILL CARDS ================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(function (card) {

    card.addEventListener("click", function () {

        this.classList.toggle("active");

    });

});


/* ================= NAVIGATION ================= */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ================= SCROLL EFFECT ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


/* ================= PAGE LOAD ================= */

window.addEventListener("load", function () {

    console.log("CyberBrijesh Portfolio Loaded Successfully");

});