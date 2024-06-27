import express from "express";
import Modele from "../models/modele.js"; // Assurez-vous que le chemin vers votre modèle est correct
import { Model } from "mongoose";

const router = express.Router();

// Création d'un article 
router.post("/", async (req, res) => {
  try {
    const { login, hoodie, taille, couleur, texte, logo, prix } = req.body;

    // Création d'un nouvel article avec le modèle Modele
    const newArticle = new Modele({
      login,
      hoodie,
      taille,
      couleur,
      texte,
      logo,
      prix,
    });

    // Sauvegarder l'article
    await newArticle.save();

    res.status(201).json({ message: "L'article a été créé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la création de l'article :", error);
    res.status(500).json({ message: "Erreur lors de la création de l'article.", error: error.message });
  }
});

// Supprimer un article par son ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArticle = await Modele.findByIdAndDelete(id);
    if (!deletedArticle) {
      return res.status(404).json({ message: "Article non trouvé." });
    }
    res.status(200).json({ message: "Article supprimé avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article :", error);
    res.status(500).json({ message: "Erreur lors de la suppression de l'article.", error: error.message });
  }
});

// Afficher tous les articles
router.get("/", async (req, res) => {
  try {
    const articles = await Modele.find();
    res.status(200).json(articles);
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    res.status(500).json({ message: "Erreur lors de la récupération des articles.", error: error.message });
  }
});

export default router;
