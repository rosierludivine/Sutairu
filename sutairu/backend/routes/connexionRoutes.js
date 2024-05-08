import express from "express";
import userControllers from "../controllers/usersController.js";

const router = express.Router();

// Middleware pour parser les requêtes JSON
router.use(express.json());

// Route pour gérer la connexion des utilisateurs
router.post('/login', userControllers.loginUser);

export default router;
