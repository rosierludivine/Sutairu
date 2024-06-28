import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import inscriptionRoutes from "./routes/inscriptionRoutes.js";
import connexionRoutes from "./routes/connexionRoutes.js";
import sauvegardeRoutes from "./routes/sauvegardeRoutes.js"; 
import panierRoutes from "./routes/panierRoutes.js"; 

const app = express();
const uri = "mongodb+srv://UserDB:RUV0xqiwSQjnEX9o@sutairu.dabgfok.mongodb.net/Sutairu?retryWrites=true&w=majority";

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log("connected to Mongodb");

        app.use("/inscription", inscriptionRoutes); 
        app.use("/connexion", connexionRoutes); 
        app.use("/article", sauvegardeRoutes);
        app.use("/panier", panierRoutes); 

        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    } catch (error) {
        console.error('Erreur connecting to MongoDB :', error);
    }
}

connectToDatabase();
