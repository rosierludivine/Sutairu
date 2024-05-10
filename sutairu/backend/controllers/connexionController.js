import User from "../models/User.js";
import bcrypt from "bcrypt";

const userControllers = {
  async loginUser(req, res) {
    const { email, password } = req.body;

    try {
      // Vérifie si l'utilisateur existe dans la base de données
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      // Vérifie si le mot de passe est correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Identifiants incorrects" });
      }

      // Authentification réussie
      return res.status(200).json({ message: "Connexion réussie", user });
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      return res.status(500).json({ error: "Erreur lors de la connexion" });
    }
  },
};

export default userControllers;