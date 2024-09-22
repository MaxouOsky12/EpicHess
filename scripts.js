let communityCount = 5000;

document.getElementById('join-button').addEventListener('click', function() {
    communityCount++;
    document.getElementById('community-count').innerText = communityCount;
    alert("Merci d'avoir rejoint la communauté ! Nous sommes maintenant " + communityCount + " membres.");
});
