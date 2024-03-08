import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import image2 from "../images/image2.jpg";
import "./inscription.css";
function Inscription() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:5000/register', {
      method: "post",
      body: JSON.stringify({ name, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setEmail("");
      setName("");
    }
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle the modal's visibility
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const btnAnnuler = () => {
    setIsModalVisible(false);
  };

  const navigate = useNavigate(); // Hook to access navigate function

  const redirectToLogin = () => {
    navigate("/connection"); // Change the URL to '/login'
  };

  return (
    <div class="container">
      <div class="image-section">
        <img src={image2} alt="image2" />
      </div>
      <div class="inscription-section">
        <h2>INSCRIPTION</h2>
        <div class="input-group">
          <label for="name">Nom:</label>
          <input type="text" placeholder="name"
          value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div class="input-group">
          <label for="surname">Prénom :</label>
          <input type="text" id="surname" />
        </div>
        <div class="input-group">
          <label for="email">Email :</label>
          <input type="email" id="email" 
          value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="input-group">
          <label for="password">Mot de passe :</label>
          <input type="password" id="password" />
        </div>
        <div class="input-group">
          <label for="text">Date de naissance :</label>
          <input type="text" id="text" />
        </div>
        <button type="button" onClick={showModal}>
          CRÉER MON COMPTE
        </button>
        {isModalVisible && (
          <div>
            <div className="modal-overlay" onClick={btnAnnuler}></div>
            <div className="modal-content">
              <h2>Votre compte a bien été crée</h2>
              <div className="modal-buttons">
                <button onClick={redirectToLogin} className="modal-btn">
                  Revoir à la page de connexion
                </button>
                <button onClick={btnAnnuler} className="modal-btn">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
        <div class="text">
          J'atteste <strong>l'exactitude des données.</strong>
        </div>
        <div class="text">
          En créant mon compte j’accepte les{" "}
          <strong>Conditions générales d’utilisations</strong>
        </div>
        <div class="text">
          J’accepte la <strong>récolte des données</strong>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
