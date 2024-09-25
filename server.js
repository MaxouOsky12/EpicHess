const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialisation de l'application Express
const app = express();

// Middleware pour lire les données JSON et gérer les requêtes CORS
app.use(bodyParser.json());
app.use(cors());

// Connexion à la base de données MongoDB
mongoose.connect('YOUR_MONGO_DB_CONNECTION_STRING', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB'))
    .catch((err) => console.log('Erreur de connexion à MongoDB:', err));

// Schéma et modèle pour stocker les membres qui rejoignent la révolution
const memberSchema = new mongoose.Schema({
    name: String,
    joinedAt: { type: Date, default: Date.now }
});

const Member = mongoose.model('Member', memberSchema);

// Route pour rejoindre la révolution (ajouter un membre)
app.post('/join', async (req, res) => {
    const { name } = req.body;
    
    try {
        const newMember = new Member({ name });
        await newMember.save();
        
        const memberCount = await Member.countDocuments();
        res.json({ success: true, message: 'Bienvenue dans la révolution !', totalMembers: memberCount });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erreur lors de l\'inscription.' });
    }
});

// Route pour obtenir le nombre total de membres
app.get('/members', async (req, res) => {
    try {
        const memberCount = await Member.countDocuments();
        res.json({ totalMembers: memberCount });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erreur lors de la récupération des membres.' });
    }
});

// Lancer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur lancé sur le port 3000');
});
