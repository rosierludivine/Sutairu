import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import inscriptionRoutes from "./routes/inscriptionRoutes.js";

const app = express();
const uri = "mongodb+srv://UserDB:RUV0xqiwSQjnEX9o@sutairu.dabgfok.mongodb.net/?retryWrites=true&w=majority&appName=Sutairu";

// Configuration CORS
app.use(cors({
  origin: 'http://localhost:3000', // Autoriser les requêtes depuis localhost:3000
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

async function connectToDatabase() {
    try {
        app.use(express.json());

        await mongoose.connect(uri); 
        console.log("connected to Mongodb");
        
        // Routes

        // app.use("/users", userRouter);
        app.use("/inscription", inscriptionRoutes);


        app.listen(5000, ()=> {
            console.log("Server is running on port 5000")
        });
    } catch (error) {
        console.error('Erreur connecting to MongoDB :', error);
    }
}

connectToDatabase();
