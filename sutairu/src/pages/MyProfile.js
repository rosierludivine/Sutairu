import React from "react";

import "./myprofile.css";
function MyProfile() {
  return (
    <div className="profile-container">
      <h1>Mon Profil</h1>
      <div className="row">
        <div className="info-card">
          <h2>Mes informations</h2>
          <p>
            <input type="text" placeholder="Votre nom" />
          </p>
          <p>
            <input type="text" placeholder="Votre prenom" />
          </p>
          <p>
            <input type="email" placeholder="Votre Email" />
          </p>
          <p>
            <input type="text" placeholder="Votre Age" />
          </p>
        </div>
        <div className="logout-container">
          <button className="btn">Se déconnecter</button>
        </div>
      </div>
      <div className="row">
        <button className="faq-btn">Chartes & FAQ</button>
        <div className="password-card">
          <h2>Changer mon mot de passe</h2>
          <p>
            <input type="password" placeholder="Ancien mot de passe" />
          </p>
          <p>
            <input type="password" placeholder="Nouveau mot de passe" />
          </p>
          <button className="btn">Changez le mot de passe</button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
