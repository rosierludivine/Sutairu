import React, { useState } from "react";
import axios from 'axios';
import image2 from "../images/image2.jpg";
import "./inscription.css";
export default 
function Inscription() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/inscription", {
        email,
        password,
      });
      console.log("Réponse du serveur :", response.data);
      // Traiter la réponse du serveur ici
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error.response ? error.response.data : error.message);
      // Gérer l'erreur ici, par exemple afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={image2} alt="image2" />
      </div>
      <div class="inscription-section">
        <h2>CONNEXION</h2>
        <div class="input-group">
          <label for="email">Email :</label>
          <input type="email" id="email" />
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="button">CONNEXION</button>
        <div class="text">
          Je n’est pas de compte ?
          <strong>
            <a href="/inscription">Insciption</a>
          </strong>
        </div>
        <div class="text">
          <strong>Mot de passe oublié</strong>
        </div>
      </div>
    </div>
  );
}

export default Connection;
