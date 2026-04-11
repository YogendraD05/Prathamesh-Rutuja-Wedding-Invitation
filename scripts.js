// script.js
const weddingDate = new Date("May 1, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-container").innerHTML = "JUST MARRIED!";
    }
}, 1000);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
});
const observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

        document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('header');
            const card = document.getElementById('card');

            // Trigger animations after a slight delay or on scroll
            setTimeout(() => {
                header.classList.add('animate-top');
            }, 300);

            setTimeout(() => {
                card.classList.add('animate-zoom');
            }, 800);
        });

function showInvitation() {
    document.getElementById("invitationBox").style.display = "block";
}

window.onload = function() {
    const shouldPlay = localStorage.getItem("playMusic");
    const music = document.getElementById("bg-music");

    if (shouldPlay === "true") {
        music.play();
        localStorage.removeItem("playMusic"); // optional
    }
};

function openDirections() {
    const destination = "Kumarsen Mangal Karyalay, Patas";

    window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`,
        "_blank"
    );
}


