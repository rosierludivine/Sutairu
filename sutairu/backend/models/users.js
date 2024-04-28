// usersModel.js

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    login: String,
    nom: String, 
    prenom: String, 
    email: String, 
    password: String, 
    dateOfBirth: {type: Date, default: Date.now}
});

const Users = mongoose.model("users", UserSchema);

export default Users;