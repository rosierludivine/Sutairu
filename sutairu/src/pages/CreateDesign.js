import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import pull from "../images/pull.jpg";
import swipe from "../icons/swipe.svg";
import share from "../icons/share.svg";
import ThreeScene from '../components/three';
import { ChromePicker } from "react-color";

import "./createdesign.css";
export default function CreateDesign() {
  const navigate = useNavigate(); // Hook to access navigate function

  const redirecttoPanier = () => {
    navigate("/monpanier"); // Change the URL to '/login'
  };

  const redirecttoMesDesigns = () => {
    navigate("/mesdesigns"); // Change the URL to '/login'
  };
  const [btnClicked, setBtnClicked] = useState(false);

  const tailleInputClicked = () => {
    setBtnClicked(!btnClicked);
  };

  const [color, setColor] = useState("#ffffff"); // État pour stocker la couleur sélectionnée
  const [showColorPicker, setShowColorPicker] = useState(false); // État pour contrôler l'affichage du sélecteur de couleurs
  const openColorPicker = () => {
    setShowColorPicker(true);
  };
  
  const closeColorPicker = () => {
    setShowColorPicker(false);
  };
  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };
  return (
    <div class="container">
      <div class="left-part">
        <h2 className="create-design">Créer votre design</h2>
        <div className="img-scene">
          <ThreeScene/>
        </div>
        <div class="button-container">
          <button>
            <img src={swipe} alt="swipe" />
          </button>
          <button>
            <img src={share} alt="share" />
          </button>
        </div>
      </div>
      <div class="right-part">
        <input type="text" placeholder="Nom" />
        <input onClick={tailleInputClicked} type="text" placeholder="Taille" />
        {btnClicked ? (
          <div class="button-row">
            <button>XS</button>
            <button>S</button>
            <button>M</button>
          </div>
        ) : (
          ""
        )}

        {btnClicked ? (
          <div class="button-row">
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
        ) : (
          ""
        )}

        <input
          type="text"
          placeholder="Couleur"
          onClick={openColorPicker}
          value={color}
          readOnly
        />

        {showColorPicker && (
          <div style={{ position: "absolute", zIndex: "2" }}>
            <ChromePicker color={color} onChange={handleColorChange} />
            <button onClick={closeColorPicker}>Fermer</button>
          </div>
        )}
        <input type="text" placeholder="Texte" />
        <input type="text" placeholder="Logo" />
        <input type="text" placeholder="Motif" />
        <div class="price">
          <span class="">Prix:</span>
          <span>28,99€</span>
        </div>
        <button class="sauvgarder">Sauvgarde</button>
        <button onClick={redirecttoMesDesigns} class="add-to-basket">
          Ajouter au panier
        </button>
        <button onClick={redirecttoPanier} class="voir-le-panier">
          Voir le panier
        </button>
      </div>
    </div>
  );
}
