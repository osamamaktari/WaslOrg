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





document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById('darkModeToggle');
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navContainer.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navContainer.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('header')) {
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});