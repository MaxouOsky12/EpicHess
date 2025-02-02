// Initialiser le compteur de visiteurs
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Met à jour l'affichage du compteur de visiteurs
document.addEventListener('DOMContentLoaded', function () {
    const visitorElement = document.getElementById('visitor-count');
    if (visitorElement) {
        visitorElement.innerText = `Visiteurs : ${visitorCount}`;
    }
});

// Initialiser le compteur de communauté
let communityCount = localStorage.getItem('communityCount') || 1;

// Fonction pour mettre à jour le compteur de communauté
function updateCounter() {
    const countElement = document.getElementById('community-count');
    if (countElement) {
        countElement.innerText = communityCount;
    }
}

// Fonction appelée lors du clic ou du toucher sur "Rejoindre"
function handleJoin(event) {
    event.preventDefault(); // Évite le double déclenchement sur mobile
    communityCount++;
    localStorage.setItem('communityCount', communityCount);
    
    const countElement = document.getElementById('community-count');
    if (countElement) {
        countElement.innerText = communityCount;

        // Animation avec une classe CSS
        countElement.classList.add('fadeIn');
        setTimeout(() => countElement.classList.remove('fadeIn'), 500);
    }

    alert(`Merci d'avoir rejoint la communauté ! Nous sommes maintenant ${communityCount} membres.`);
}

// Fonction pour réinitialiser les compteurs
function resetCounters(event) {
    event.preventDefault();
    localStorage.removeItem('visitorCount');
    localStorage.removeItem('communityCount');
    location.reload(); // Recharge la page pour voir les changements
}

// Ajouter les événements après chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
    updateCounter();

    const joinButton = document.getElementById('join-button');
    if (joinButton) {
        joinButton.addEventListener('click', handleJoin);
        joinButton.addEventListener('touchstart', handleJoin); // Optimisé pour mobile
    }

    const resetButton = document.getElementById('reset-counter');
    if (resetButton) {
        resetButton.addEventListener('click', resetCounters);
        resetButton.addEventListener('touchstart', resetCounters);
    }
});
