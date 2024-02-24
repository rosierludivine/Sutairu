import React from "react";
import "../pages/mesdesign.css";

const CardItemCommandes = ({ item }) => {
  return (
    <div className="CardItem">
      <div className="leftSide">
        <img src={item.image} alt={item.name} />
        <p className="productName">{item.name}</p>
      </div>
      <div className="rightSide">
        <div className="sizePrice">
          <p>Price: ${item.price}</p>
        </div>
        
      </div>
    </div>
  );
};

export default CardItemCommandes;
