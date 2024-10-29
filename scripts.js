document.addEventListener('DOMContentLoaded', function() {
    fetchVotes();

    document.getElementById('vote-button').addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="opinion"]:checked');

        if (selectedOption) {
            const voteValue = selectedOption.value;

            fetch('http://localhost:3000/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ vote: voteValue })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                updateResults(data.votes);
            })
            .catch(error => {
                console.error('Erreur:', error);
            });
        } else {
            alert("Veuillez sélectionner une option avant de voter.");
        }
    });
});

function fetchVotes() {
    fetch('http://localhost:3000/api/votes')
    .then(response => response.json())
    .then(data => {
        updateResults(data);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

function updateResults(votes) {
    const totalVotes = votes.juste + votes.injuste + votes.pas_certain;

    document.getElementById('juste-count').innerText = votes.juste;
    document.getElementById('injuste-count').innerText = votes.injuste;
    document.getElementById('pas-certain-count').innerText = votes.pas_certain;

    document.getElementById('juste-percentage').innerText = totalVotes ? ((votes.juste / totalVotes) * 100).toFixed(2) + '%' : '0%';
    document.getElementById('injuste-percentage').innerText = totalVotes ? ((votes.injuste / totalVotes) * 100).toFixed(2) + '%' : '0%';
    document.getElementById('pas-certain-percentage').innerText = totalVotes ? ((votes.pas_certain / totalVotes) * 100).toFixed(2) + '%' : '0%';

    document.getElementById('poll-results').style.display = 'block';
}
