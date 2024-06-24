import React, { useState } from "react";
import axios from 'axios';
import image2 from "../images/image2.jpg";
import "./inscription.css";

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
      <div className="inscription-section">
        <h2>INSCRIPTION</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">INSCRIPTION</button>
        </form>
      </div>
    </div>
  );
}

export default Inscription;
