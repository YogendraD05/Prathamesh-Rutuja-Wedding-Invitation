// Petals
const petalContainer = document.getElementById('petals');

for (let i = 0; i < 20; i++) {
    let petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petal.style.opacity = Math.random();
    petalContainer.appendChild(petal);
}

// Heart Animation
const heart = document.getElementById('blinking-heart');
let isGlow = false;

setInterval(() => {
    if (!isGlow) {
        heart.style.transform = "scale(1.3)";
        heart.style.filter = "drop-shadow(0 0 20px #FFD700)";
        isGlow = true;
    } else {
        heart.style.transform = "scale(1)";
        heart.style.filter = "drop-shadow(0 0 5px rgba(255, 215, 0, 0.2))";
        isGlow = false;
    }
}, 700);

// Page Navigation
function enterPage(event) {
    event.preventDefault();
    localStorage.setItem("playMusic", "true");

    setTimeout(() => {
        window.location.href = "invitation.html";
    }, 200);
}