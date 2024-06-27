import express from "express";
import Modele from "../models/modele.js";
import { Model } from "mongoose";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { login, hoodie, taille, couleur, texte,logo, prix } = req.body;

    // Création d'un nouveau model 
    const newModel = new Modele({
      login,
      hoodie,
      taille,
      couleur,
      texte,
      logo,
      prix,
    });

    // Sauvegarder l'utilisateur
    await newModel.save();

    res.status(201).json({ message: "Le modèle a été créé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la sauvegarde :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la sauvegarde.", error: error.message });
  }
});

export default router;
