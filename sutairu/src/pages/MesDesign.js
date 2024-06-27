import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./mesdesign.css";
import CardItem from "../components/Carditem";

export default function MesDesigns() {
  const [articles, setArticles] = useState([]); // État pour stocker les articles
  const navigate = useNavigate(); // Hook pour accéder à la fonction navigate

  // Effectuer une requête GET pour récupérer les articles depuis le backend
  useEffect(() => {
    axios.get("http://localhost:5000/article")
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des articles :", error);
      });
  }, []);

  const redirecttoPanier = () => {
    navigate("/panier"); 
  };

  return (
    <div className="card">
      {articles.map((item) => (
        <CardItem
          key={item._id}
          item={{
            id: item._id,
            image: item.image,
            hoodie: item.hoodie,
            taille: item.taille,
            prix: item.prix,
          }}
        />
      ))}
      <div className="button-container">
        <button onClick={redirecttoPanier} className="voir-le-panier">
          Voir le panier
        </button>
      </div>
    </div>
  );
}
