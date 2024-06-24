import express from "express";
// import userControllers from "../controllers/usersController.js";

const router = express.Router();

// Middleware pour parser les requêtes JSON
router.use(express.json());

// Route pour gérer l'inscription des utilisateurs
router.post('/users', (req, res) => {
  const userData = {
    "login": req.body.name + '_' + req.body.prenom, // Création du login
    "email": req.body.email,
    "password": req.body.password,
    "prenom": req.body.prenom,
    "nom": req.body.name,
    "dateOfBirth": req.body.dateOfBirth
  };
  console.log(userData); 

  // Enregistrement des données dans la base de données ou traitement supplémentaire ici

  // Réponse au client
  res.status(200).json({ message: 'Utilisateur enregistré avec succès' });
});

export default router;
