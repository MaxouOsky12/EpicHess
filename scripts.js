// Initialiser le compteur de visiteurs
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++; // Incrémente le compteur
localStorage.setItem('visitorCount', visitorCount); // Sauvegarde le compteur dans localStorage

// Met à jour l'affichage du compteur de visiteurs
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('visitor-count').innerText = `Visiteurs : ${visitorCount}`;
});
