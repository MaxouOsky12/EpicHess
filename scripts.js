// Compteur de la communauté
let communityCount = localStorage.getItem('communityCount') || 1; // Compteur initial sauvegardé localement

document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    updateResults(); // Affiche les résultats du sondage au chargement
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

// Sondage
let votes = {
    juste: parseInt(localStorage.getItem('juste')) || 0,
    injuste: parseInt(localStorage.getItem('injuste')) || 0,
    'pas certain': parseInt(localStorage.getItem('pas certain')) || 0,
};

// Fonction pour mettre à jour l'affichage des résultats
function updateResults() {
    document.getElementById('juste-count').innerText = votes.juste;
    document.getElementById('injuste-count').innerText = votes.injuste;
    document.getElementById('pas-certain-count').innerText = votes['pas certain'];
}

// Gestion des votes
document.getElementById('vote-button').addEventListener('click', function() {
    const selectedOpinion = document.querySelector('input[name="opinion"]:checked');
    if (!selectedOpinion) {
        alert("Veuillez sélectionner une option avant de voter.");
        return;
    }

    const voteValue = selectedOpinion.value;
    votes[voteValue]++;
    localStorage.setItem('juste', votes.juste);
    localStorage.setItem('injuste', votes.injuste);
    localStorage.setItem('pas certain', votes['pas certain']);
    
    updateResults();
    
    // Affichage des résultats
    document.getElementById('poll-results').style.display = 'block';
    
    alert("Merci pour votre vote !");
});

