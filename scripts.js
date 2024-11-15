// Initialiser le compteur de visiteurs
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++; // Incrémente le compteur
localStorage.setItem('visitorCount', visitorCount); // Sauvegarde le compteur dans localStorage

// Met à jour l'affichage du compteur de visiteurs
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('visitor-count').innerText = `Visiteurs : ${visitorCount}`;
});

// Code pour le compteur de communauté
let communityCount = localStorage.getItem('communityCount') || 1; // Compteur initial, sauvegardé localement

document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
});

function updateCounter() {
    const countElement = document.getElementById('community-count');
    countElement.innerText = communityCount;
}

document.getElementById('join-button').addEventListener('click', function() {
    communityCount++;
    localStorage.setItem('communityCount', communityCount); // Sauvegarde le nouveau compteur dans le localStorage

    const countElement = document.getElementById('community-count');
    
    // Animation du compteur
    countElement.classList.remove('fadeIn');
    void countElement.offsetWidth; // Force un reflow
    countElement.classList.add('fadeIn');

    countElement.innerText = communityCount;

    alert("Merci d'avoir rejoint la communauté ! Nous sommes maintenant " + communityCount + " membres.");
});
