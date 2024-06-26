import React from "react";
import { useNavigate } from "react-router-dom";
import "./mesdesign.css";
import pull from "../images/pull.jpg";
import CardItem from "../components/Carditem";

export default function MesDesigns() {
  const CardItems = [
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

  const redirecttoPanier = () => {
    navigate("/panier"); // Change the URL to '/login'
  };

  return (
    <div className="card">
      {CardItems.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
      <div className="button-container">
        <button onClick={redirecttoPanier} className="voir-le-panier">
          Voir le panier
        </button>
      </div>
    </div>
  );
}
