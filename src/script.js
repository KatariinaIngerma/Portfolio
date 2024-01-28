// script.js

document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Get all navigation links
    var navLinks = document.querySelectorAll(".nav-link");

    // Loop through each link and check if it corresponds to the current page
    navLinks.forEach(function (link) {
        var linkHref = link.getAttribute("href");

        // Set the link as active if it corresponds to the current page
        if (linkHref === currentPage) {
            link.classList.add("active-page");
        } else {
            link.classList.remove("active-page");
        }
    });
});
