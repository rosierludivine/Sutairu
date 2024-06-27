import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./mesdesign.css";
import CardItem from "../components/Carditem";

export default function MesDesigns() {
  const [articles, setArticles] = useState([]); 
  const navigate = useNavigate(); 


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
