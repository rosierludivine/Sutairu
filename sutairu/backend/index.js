// Code  for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database

const mongoose = require('mongoose');

const uri = "mongodb+srv://UserDB:RUV0xqiwSQjnEX9o@sutairu.dabgfok.mongodb.net/?retryWrites=true&w=majority&appName=Sutairu";

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, {
            dbName: 'sutairu',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connecté à la base de données');
    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
    }
}

connectToDatabase();
// Schema for users of app

const UserSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true,

    },

    email: {

        type: String,

        required: true,

        unique: true,

    },

    date: {

        type: Date,

        default: Date.now,

    },
});

const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express

const express = require('express');
const app = express();

const cors = require("cors");

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {


    resp.send("App is Working");

    // You can check backend is working or not by 

    // entering http://loacalhost:5000



    // If you see App is working means

    // backend working properly
});


app.post("/register", async (req, resp) => {

    try {

        const user = new User(req.body);

        let result = await user.save();

        result = result.toObject();

        if (result) {

            delete result.password;

            resp.send(req.body);

            console.log(result);

        } else {

            console.log("User already register");

        }


    } catch (e) {

        resp.send("Something Went Wrong");

    }
});
app.listen(5000);