    function enterCelebration() {
            document.getElementById('cover-page').classList.add('fade-out');
            setTimeout(() => {
                document.getElementById('cover-page').style.display = 'none';
                document.getElementById('main-invitation').classList.remove('hidden');
                document.getElementById('main-invitation').classList.add('fade-in');
            }, 800);
        }

        // Generate Petals
        const petalContainer = document.getElementById('petals');
        for (let i = 0; i < 20; i++) {
            let petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.animationDelay = Math.random() * 5 + 's';
            petal.style.opacity = Math.random();
            petalContainer.appendChild(petal);
        
            const heart = document.getElementById('blinking-heart');
let isGlow = false;

// This function runs every 700 milliseconds (0.7 seconds)
setInterval(() => {
    if (!isGlow) {
        // Apply the "Big Glow" and "Scale Up"
        heart.style.transform = "scale(1.3)";
        heart.style.filter = "drop-shadow(0 0 20px #FFD700)";
        heart.style.transition = "all 0.6s ease-in-out";
        isGlow = true;
    } else {
        // Return to normal
        heart.style.transform = "scale(1)";
        heart.style.filter = "drop-shadow(0 0 5px rgba(255, 215, 0, 0.2))";
        isGlow = false;
    }
}, 700);
        }

function enterPage(event) {
    event.preventDefault(); // stop instant navigation

    // store flag for music
    localStorage.setItem("playMusic", "true");

    // small delay (optional for smoothness)
    setTimeout(() => {
        window.location.href = "inner.html";
    }, 200);
}


        