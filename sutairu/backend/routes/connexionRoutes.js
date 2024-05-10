// connexionRoutes.js

import express from "express";
import connexionControllers from "../controllers/connexionController.js";

const router = express.Router();

// Middleware pour parser les requêtes JSON
router.use(express.json());

// Route pour gérer la création d'un nouvel utilisateur
router.post('/users', connexionControllers.createUser);

export default router;
