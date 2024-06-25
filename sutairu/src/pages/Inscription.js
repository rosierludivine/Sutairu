import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import image2 from "../images/image2.jpg";
import "./inscription.css";
function Inscription() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:5000/register', {
      method: "post",
      body: JSON.stringify({ nom, email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      setEmail("");
      setNom("");
    }
  }

  // Valeur des champs qui vont etre demander lors de l'inscription 
  //Valeur par default 
  const [values, setValues] = useState({
    nom: '', 
    prenom:'', 
    email: '',
    password:'', 
    dateOfBirth:''
  })

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method:'post',
        url: 'http://localhost:5000/inscription',
        data: values, // mettre les données a envoyer dans la requetes 
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('User created:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
      // Gérer les erreurs ici
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div class="container">
      <div class="image-section">
        <img src={image2} alt="image2" />
      </div>
      <div class="inscription-section">
        <h2>INSCRIPTION</h2>
        <div class="input-group">
          <label for="nom">Nom:</label>
          <input type="text" id="nom" 
          onChange={e => setValues({...values, nom: e.target.value})} />
        </div>
        <div class="input-group">
          <label htmlFor="surname">Prénom :</label>
          <input type="text" id="surname" name='prenom'
          onChange={e => setValues({...values, prenom: e.target.value})} />
        </div>
        <div class="input-group">
          <label for="email">Email :</label>
          <input type="email" id="email" 
          onChange={e => setValues({...values, email: e.target.value})} />
        </div>
        <div class="input-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" name='password'
          onChange={e => setValues({...values, password: e.target.value})} />
        </div>
        <div class="input-group">
          <label for="text">Date de naissance :</label>
          <input type="date" id="text" 
          onChange={e => setValues({...values, dateOfBirth: e.target.value})} />
        </div>
        <button type="submit" >
          CRÉER MON COMPTE
        </button>
        {/* {isModalVisible && (
          <div>
            <div className="modal-overlay" onClick={btnAnnuler}></div>
            <div className="modal-content">
              <h2>Votre compte a bien été crée</h2>
              <div className="modal-buttons">
                <button onClick={} className="modal-btn">
                  Revoir à la page de connexion
                </button>
                <button onClick={btnAnnuler} className="modal-btn">
                  Annuler
                </button>
              </div>
            </div>
          </div> */}
        {/* )} */}
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
    </form>
  );
}

export default Inscription;