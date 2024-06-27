import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import inscriptionRoutes from "./routes/inscriptionRoutes.js";
import connexionRoutes from "./routes/connexionRoutes.js";
import sauvegardeRoutes from "./routes/sauvegardeRoutes.js"; 

// Configuration Express
const app = express();
const uri = "mongodb+srv://UserDB:RUV0xqiwSQjnEX9o@sutairu.dabgfok.mongodb.net/Sutairu?retryWrites=true&w=majority"; // URL de notre base de données 

// Configuration CORS
app.use(cors({
  origin: 'http://localhost:3000', // Autoriser les requêtes depuis localhost:3000 notre front 
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware pour parser les requêtes JSON
app.use(express.json());

async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log("connected to Mongodb");

        // Routes
        app.use("/inscription", inscriptionRoutes); 
        app.use("/connexion", connexionRoutes); 
        app.use("/article", sauvegardeRoutes);
        // app.use("/articles", articleRoutes);

        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    } catch (error) {
        console.error('Erreur connecting to MongoDB :', error);
    }
}

connectToDatabase();