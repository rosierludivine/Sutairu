import express from "express";
import Users from "../models/users.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { login, nom, prenom, email, password, dateOfBirth } = req.body;

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Cet email est déjà utilisé." });
    }

    // Créer un nouvel utilisateur
    const newUser = new Users({
      login,
      nom,
      prenom,
      email,
      password, // Le mot de passe sera automatiquement haché avant d'être enregistré
      dateOfBirth,
    });

    // Sauvegarder l'utilisateur dans la base de données
    await newUser.save();

    res.status(201).json({ message: "Utilisateur créé avec succès." });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de l'inscription.", error: error.message });
  }
});

export default router;
