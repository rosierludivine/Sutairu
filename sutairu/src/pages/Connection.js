import React from "react";
import image2 from "../images/image2.jpg";
import "./inscription.css";
function Connection() {
  return (
    <div class="container">
      <div class="image-section">
        <img src={image2} alt="image2" />
      </div>
      <div class="inscription-section">
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
