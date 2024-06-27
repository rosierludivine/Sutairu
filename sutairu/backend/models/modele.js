import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  login: String,
  hoodie: String,
  taille: String,
  couleur: String,
  texte: String,
  logo: String, 
  prix: Number, 
});


const Model = mongoose.model("article", UserSchema);

export default Model;
