// Hover effects for the navigation links
const navlinks = document.querySelectorAll('.nav-links li a');
const currentPath = window.location.pathname;
navlinks.forEach(link => {
    if (link.pathname === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// impact cards effects 

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.impact-card');

    function revealCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealCards);
    window.addEventListener('resize', revealCards);
    revealCards();
});

function goToDonate() {
    window.location.href = "Pages/donate.html";
}



// ...existing code...

document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById('darkModeToggle');
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

// ...existing code...