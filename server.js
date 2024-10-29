// server.js (Côté serveur avec Express)
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser le JSON
app.use(express.json());

// Lire le compteur à partir d'un fichier
let visitorCount = 0;

if (fs.existsSync('count.txt')) {
    visitorCount = parseInt(fs.readFileSync('count.txt', 'utf-8'), 10);
}

// API pour obtenir le nombre de visiteurs
app.get('/api/visitors', (req, res) => {
    res.json({ count: visitorCount });
});

// API pour incrémenter le nombre de visiteurs
app.post('/api/visitors', (req, res) => {
    visitorCount++;
    fs.writeFileSync('count.txt', visitorCount.toString());
    res.json({ count: visitorCount });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
