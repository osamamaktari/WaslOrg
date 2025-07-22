// Hover effects for the navigation links
const navlinks = document.querySelectorAll('.nav-links li a');
const currentPath = window.location.pathname;
navlinks.forEach(link => {
    if (link.pathname === currentPath) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
})




const imges = [
    "/Images/group-buddies-relaxing-chess.png",
    "/Images/group-buddies-relaxing-park.png"
];

let current = 0;
const hero = document.getElementById("hero");

function changebg() {
    current = (current + 1) % imges.length;
    hero.style.backgroundImage = `url('${imges[current]}')`;
}


hero.style.backgroundImage = `url('${imges[0]}')`;


setInterval(changebg, 5000);