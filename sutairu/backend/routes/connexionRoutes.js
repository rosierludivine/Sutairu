// connexionRoutes.js

import express from "express";
import connexionController from "../controllers/connexionController.js";

const router = express.Router();

// Middleware pour parser les requêtes JSON
router.use(express.json());

// Route pour gérer la création d'un nouvel utilisateur
router.post('/Sutairu/connection', (req, res) => {
    // Gérer la requête POST ici
    console.log(req.body); // imprime le corps de la requête
    res.send('Utilisateur créé avec succès!');
  });
  

export default router;
