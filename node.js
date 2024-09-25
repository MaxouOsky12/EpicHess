// Import des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialisation de l'application Express
const app = express();

// Middleware pour lire les données JSON et gérer les requêtes CORS
app.use(bodyParser.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect('YOUR_MONGO_DB_CONNECTION_STRING', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connecté à MongoDB'))
    .catch((err) => console.log('Erreur de connexion à MongoDB:', err));

// Schéma pour stocker les membres
const memberSchema = new mongoose.Schema({
    name: String,
    joinedAt: { type: Date, default: Date.now }
});

const Member = mongoose.model('Member', memberSchema);

// Route pour rejoindre la révolution (ajouter un membre)
app.post('/join', async (req, res) => {
    const { name } = req.body;
    console.log('Requête reçue pour rejoindre avec le nom:', name);

    if (!name) {
        return res.status(400).json({ success: false, message: 'Le nom est requis.' });
    }

    try {
        // Créer et sauvegarder un nouveau membre
        const newMember = new Member({ name });
        await newMember.save();

        // Compter le nombre total de membres
        const memberCount = await Member.countDocuments();

        // Envoyer une réponse avec le nombre total de membres
        res.json({ success: true, message: 'Bienvenue dans la révolution !', totalMembers: memberCount });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du membre:', error);
        res.status(500).json({ success: false, message: 'Erreur lors de l\'inscription.' });
    }
});

// Route pour obtenir le nombre total de membres
app.get('/members', async (req, res) => {
    try {
        const memberCount = await Member.countDocuments();
        res.json({ totalMembers: memberCount });
    } catch (error) {
        console.error('Erreur lors de la récupération des membres:', error);
        res.status(500).json({ success: false, message: 'Erreur lors de la récupération des membres.' });
    }
});

// Lancer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur lancé sur le port 3000');
});
