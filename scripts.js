// Compteur de visiteurs
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Met à jour l'affichage du compteur de visiteurs
document.addEventListener('DOMContentLoaded', function() {
    const visitorElement = document.getElementById('visitor-count');
    if (visitorElement) {
        visitorElement.innerText = `Visiteurs : ${visitorCount}`;
    }
});

// Compteur de joueurs testant les maps
document.addEventListener('DOMContentLoaded', function () {
    let playersCount = localStorage.getItem('playersCount') || 0;
    document.getElementById('players-count').innerText = playersCount;

    document.querySelectorAll('.join-map').forEach(button => {
        button.addEventListener('click', function () {
            playersCount++;
            localStorage.setItem('playersCount', playersCount);
            document.getElementById('players-count').innerText = playersCount;
            alert("Merci d'avoir testé notre map !");
        });
    });
});
