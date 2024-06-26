import React from "react";
import connexion from "../images/connexion.jpg";
import "./inscription.css";
export default function Connection() {
  return (
    <div class="container">
      <div class="image-section">
        <img src={connexion} alt="connexion" />
      </div>
      <div class="connection-section">
        <h2>CONNEXION</h2>
        <div class="input-group">
        <label for="email">Email :</label>
        <input type="email" id="email" />
        </div>
        <div class="input-group">
          <label for="password">Password :</label>
          <input type="password" id="password" />
        </div>
        <button type="button">CONNEXION</button>
        <div class="text">
          Je n’ai pas de compte ?
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
