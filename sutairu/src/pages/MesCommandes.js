import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mesdesign.css";
import pull from "../images/pull.jpg";
import CardItemCommandes from "../components/CardItemCommandes";
import { countries } from "countries-list";

function MesCommandes() {
  const CardItemsCommmande = [
    {
      id: 1,
      name: "Product 1",
      size: "M",
      price: 25,
      image: pull,
    },
    {
      id: 2,
      name: "Product 2",
      size: "L",
      price: 30,
      image: pull,
    },
    {
      id: 3,
      name: "Product 3",
      size: "S",
      price: 20,
      image: pull,
    },
    {
      id: 4,
      name: "Product 4",
      size: "XL",
      price: 35,
      image: pull,
    },
    {
      id: 5,
      name: "Product 4",
      size: "XL",
      price: 35,
      image: pull,
    },
    {
      id: 6,
      name: "Product 4",
      size: "XL",
      price: 35,
      image: pull,
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle the modal's visibility
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to hide the modal
  const suivreMonColis = () => {
    navigate("/colis"); // Change the URL to '/login'
  };

  const navigate = useNavigate(); // Hook to access navigate function

//   const closeModal = () => {
//     setIsModalVisible(false);
//   };

  const countryOptions = Object.keys(countries).map((code) => ({
    code,
    name: countries[code].name,
  }));

  return (
    <div className="container">
      <div className="articles">
        <h1>Les Articles</h1>
        <div className="cartsPart" style={{width: "100%"}}>
          {CardItemsCommmande.map((item) => (
            <CardItemCommandes key={item.id} item={item} />
          ))}
        </div>
        <button type="submit" class="pay-button">
          Total: 132€
        </button>
      </div>
      {/* second part */}
      <div class="payment-form child">
        <h1>Le payement</h1>
        <div class="payment-options">
          <button class="option selected">Cartes</button>
          <button class="option">Apple Pay</button>
          <button class="option">PayPal</button>
        </div>
        <form>
          <div class="form-group">
            <label for="card-number" class="card-text">Numéro de Carte :</label>
            <input type="text" id="card-number" class="placeholder" placeholder="Votre nom" />
          </div>
          <div class="form-group">
            <label for="expiration" class="card-text">Expiration :</label>
            <input type="text" id="expiration" class="placeholder" placeholder="Votre expiration" />
          </div>
          <div class="form-group">
            <label for="cvc" class="card-text">CVC : </label>
            <input type="text" id="cvc"  class="placeholder"placeholder="Votre CVC" />
          </div>
          <div class="form-group">
            <label for="country" class="card-text">Pays :</label>
            <select id="country" class="country">
              <option value="">Sélectionnez un pays</option>
              {countryOptions.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <button type="button"  className="butt-paye" onClick={showModal}>
            Payer
          </button>
          {isModalVisible && (
            <div>
              <div className="modal-overlay"></div>
              <div className="modal-content">
                <h2>Votre paiement a bien été accepté</h2>
                <div className="modal-buttons">
                  <button onClick={suivreMonColis} className="modal-btn">
                    Suivre mon colis
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MesCommandes;
