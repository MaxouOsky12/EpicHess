const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint pour récupérer les votes
app.get('/api/votes', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'votes.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération des votes.');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint pour voter
app.post('/api/vote', (req, res) => {
    const { vote } = req.body;

    fs.readFile(path.join(__dirname, 'data', 'votes.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur lors de la lecture des votes.');
            return;
        }
        
        const votes = JSON.parse(data);
        if (votes[vote] !== undefined) {
            votes[vote]++; // Incrémente le vote correspondant
        }

        fs.writeFile(path.join(__dirname, 'data', 'votes.json'), JSON.stringify(votes, null, 2), (err) => {
            if (err) {
                res.status(500).send('Erreur lors de l\'enregistrement du vote.');
                return;
            }
            res.json({ message: 'Vote enregistré avec succès !', votes });
        });
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
