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
    const totalVotes = votes.juste + votes.injuste + votes['pas certain'];
    
    document.getElementById('juste-count').innerText = votes.juste;
    document.getElementById('injuste-count').innerText = votes.injuste;
    document.getElementById('pas-certain-count').innerText = votes['pas certain'];

    // Calcul des pourcentages
    const justePercentage = totalVotes > 0 ? ((votes.juste / totalVotes) * 100).toFixed(2) : 0;
    const injustePercentage = totalVotes > 0 ? ((votes.injuste / totalVotes) * 100).toFixed(2) : 0;
    const pasCertainPercentage = totalVotes > 0 ? ((votes['pas certain'] / totalVotes) * 100).toFixed(2) : 0;

    // Affichage des pourcentages
    document.getElementById('juste-percentage').innerText = justePercentage + '%';
    document.getElementById('injuste-percentage').innerText = injustePercentage + '%';
    document.getElementById('pas-certain-percentage').innerText = pasCertainPercentage + '%';
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
