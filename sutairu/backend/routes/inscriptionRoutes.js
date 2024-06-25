import express from "express";
import Users from "../models/users.js"; 

const router = express.Router();

// Middleware pour parser les requêtes JSON
router.use(express.json());

// Route pour gérer l'inscription des utilisateurs
router.post('/inscription', async (req, res) => {
  try {
    const userData = {
      "login": req.body.nom + '_' + req.body.prenom, // Création du login
      "email": req.body.email,
      "password": req.body.password,
      "prenom": req.body.prenom,
      "nom": req.body.nom,
      "dateOfBirth": req.body.dateOfBirth
    };

    // Enregistrement des données dans la base de données
    const newUser = new Users(userData);
    await newUser.save();

    // Réponse au client
    res.status(200).json({ message: 'Utilisateur enregistré avec succès', userData });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur', error: error.message });
  }
});

export default router;
