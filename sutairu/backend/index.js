import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import inscriptionRoutes from "./routes/inscriptionRoutes.js";

const app = express();
const uri = "mongodb+srv://UserDB:RUV0xqiwSQjnEX9o@sutairu.dabgfok.mongodb.net/?retryWrites=true&w=majority&appName=Sutairu";

async function connectToDatabase() {
    try {
        app.use(express.json());

        // Configuration des en-têtes CORS
        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Autoriser les requêtes depuis localhost:5000
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Autoriser les méthodes HTTP spécifiées
            res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Autoriser les en-têtes spécifiés
            next();
        });

        await mongoose.connect(uri); 
        console.log("connected to Mongodb");
        
        app.use("/users",userRouter);

        app.use("/inscription", inscriptionRoutes);

        app.listen(5000, ()=> {
            console.log("Server is running on port 5000")
        });
    } catch (error) {
        console.error('Erreur connecting to MongoDB :', error);
    }
}



connectToDatabase(); // Appel de la fonction pour se connecter à la base de données
