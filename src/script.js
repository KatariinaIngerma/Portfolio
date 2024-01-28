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

const menuToggle = document.getElementById('menu-toggle');
        const menuOverlay = document.getElementById('menu-overlay');

        menuToggle.addEventListener('click', () => {
            menuOverlay.classList.toggle('hidden');
        });


function filterProjects(category) {
    // Get all project cards
    var projectCards = document.querySelectorAll('.project-card');
    
     // If the category is 'all', show all projects; otherwise, filter based on the category
    projectCards.forEach(function (card) {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            var cardCategory = card.classList.contains(category);
            card.style.display = cardCategory ? 'block' : 'none';
                }
        });
    }
