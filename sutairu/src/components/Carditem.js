import React from "react";
import "../pages/mesdesign.css";
import edit from "../icons/edit.svg";

import deleteSvg from "../icons/deleteSvg.svg";

const CardItem = ({ item }) => {
  return (
    <div className="CardItem">
      <div className="leftSide">
        <img src={item.image} alt={item.hoodie} />
        <p className="productName">{item.hoodie}</p>
      </div>
      <div className="rightSide">
        <div className="sizePrice">
          <p>Taille: {item.taille}</p>
          <p>Prix: ${item.prix}</p>
        </div>
        <button className="ajouterBtn">Ajouter au panier</button>
        <div className="deleteIcon">
          <img src={edit} alt="edit icon" style={{width: "25px", height:"auto"}}/>
          <img src={deleteSvg} alt="delete icon" style={{width: "25px", height:"auto"}}/>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
