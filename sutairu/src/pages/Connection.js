import React, { useState } from "react";
import axios from 'axios';
import image2 from "../images/image2.jpg";
import "./inscription.css";

function Connection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // État pour le message d'erreur

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Réinitialiser le message d'erreur avant la tentative de connexion
    try {
      const response = await axios.post("http://localhost:5000/connexion", {
        email,
        password,
      });
      console.log("Réponse du serveur :", response.data);
      // Traiter la réponse du serveur ici (par exemple, rediriger l'utilisateur)
    } catch (error) {
      console.error("Erreur lors de la connexion :", error.response ? error.response.data : error.message);
      // Mettre à jour l'état avec le message d'erreur
      setErrorMessage(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="container">
      <div className="image-section">
        <img src={image2} alt="image2" />
      </div>
      <div className="inscription-section">
        <h2>CONNEXION</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">CONNEXION</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Afficher le message d'erreur */}
        <div className="text">
          Je n’ai pas de compte ?
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
