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
