import express from "express";
import Users from "../models/users.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post('/connexion', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Tentative de connexion avec l'email: ${email}`); // Savoir avec quelle mail on essaye de ce connecter 


    const user = await Users.findOne({ email });
    if (!user) {
      console.log("Utilisateur non trouvé"); // Log user not found
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Mot de passe incorrect"); // Log incorrect password
      return res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }

    console.log("Connexion réussie"); // Log successful login
    res.status(200).json({ message: "Connexion réussie", user });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ message: "Erreur lors de la connexion", error: error.message });
  }
});

export default router;
