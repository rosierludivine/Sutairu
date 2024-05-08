import React, { useState } from "react";
import axios from 'axios';
import image2 from "../images/image2.jpg";
import "./inscription.css";

function Connection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      console.log("Réponse du serveur :", response.data);
      // Traiter la réponse du serveur ici
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      // Gérer l'erreur ici, par exemple afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={image2} alt="image2" />
      </div>
      <div className="inscription-section">
        <h2>CONNEXION</h2>
        <div className="input-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          CONNEXION
        </button>
        <div className="text">
          Je n'ai pas de compte ?
          <strong>
            <a href="/inscription">Inscription</a>
          </strong>
        </div>
        <div className="text">
          <strong>Mot de passe oublié</strong>
        </div>
      </div>
    </div>
  );
}

export default Connection;
