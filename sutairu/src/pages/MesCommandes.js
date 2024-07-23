import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./mesCommandes.css";
import { countries } from "countries-list";
import ThreeArticle from '../components/ThreeArticle';

function MesCommandes() {
  const [panier, setPanier] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPanier = async () => {
      try {
        const response = await axios.get('http://localhost:5000/panier/lulu@test.com');
        setPanier(response.data.articles);
      } catch (error) {
        console.error('Erreur lors de la récupération du panier :', error);
      }
    };

    fetchPanier();
  }, []);

  const commander = () => {
    navigate('/commandes');
  };

  const calculerPrixTotal = () => {
    let total = 0;
    panier.forEach((item) => {
      if (item.article) {
        total += item.article.prix * item.quantite;
      }
    });
    return total;
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const suivreMonColis = () => {
    navigate("/colis");
  };

  const countryOptions = Object.keys(countries).map((code) => ({
    code,
    name: countries[code].name,
  }));

  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card">
          {panier.map((item) => (
            <div key={item.article._id} className="CardItem">
              <div className="leftSide">
                {item.article && (
                  <>
                    <ThreeArticle type={item.article.hoodie} color={item.article.couleur} />
                    <p className="productName">{item.article.hoodie}</p>
                  </>
                )}
              </div>
              <div className="rightSide">
                <div className='detail'>
                  {item.article && (
                    <>
                      <p>Taille : {item.article.taille}</p>
                      <p>Quantité : {item.quantite}</p>
                      <p>Prix : {item.article.prix}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price-container">
          <button className="prixBtn">
            Prix total : ${calculerPrixTotal()}
          </button>
        </div>
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
