// src/AboutPage.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./mesdesign.css";
import pull from "../images/pull.jpg";
import PanierItem from "../components/PanierItem";

function MonPanier() {
  const PanierItems = [
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
  ];

  const navigate = useNavigate(); // Hook to access navigate function
  const commander = () => {
    navigate("/commandes"); // Change the URL to '/login'
  };

  return (
    <div className="card">
      {PanierItems.map((item) => (
        <PanierItem key={item.id} item={item} />
      ))}
      <div className="button-container">
        <button className="prixBtn">Prix : 450</button>
      </div>
      <div className="button-container">
        <button onClick={commander} className="commanderBtn">
          Commander
        </button>
      </div>
    </div>
  );
}

export default MonPanier;
