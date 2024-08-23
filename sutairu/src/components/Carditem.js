import React from "react";
import { useNavigate } from 'react-router-dom';  // Assurez-vous que le hook est importé
import axios from 'axios';
import edit from "../icons/edit.svg";
import deleteSvg from "../icons/deleteSvg.svg";
import ThreeArticle from "../components/ThreeArticle";
import "../pages/mesdesign.css";

const CardItem = ({ item, ajouterAuPanier }) => {
  const navigate = useNavigate();  // Utilisation de useNavigate pour initialiser navigate

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/article/${item.id}`);
      alert("Article supprimé avec succès");
      window.location.reload();
    } catch (error) {
      alert('Erreur lors de la suppression de l\'article');
    }
  };

  const handleEdit = () => {
    navigate(`/edit-design/${item.id}`);  // Utilisation correcte de navigate ici
  };

  const handleAddToCart = async () => {
    try {
      await axios.post('http://localhost:5000/panier', {
        user: "lulu@test.com",  // Remplacer par l'utilisateur actuel
        articleId: item.id,
        quantite: 1
      });
      alert('Article ajouté au panier');
    } catch (error) {
      alert('Erreur lors de l\'ajout de l\'article au panier');
    }
  };

  return (
    <div className="CardItem">
      <div className="leftSide">
        <div className="threeArticle">
          <ThreeArticle type={item.hoodie} color={item.couleur} />
        </div>
        <p className="productName">{item.hoodie}</p>
      </div>
      <div className="rightSide">
        <div className="sizePrice">
          <p>Taille: {item.taille}</p>
          <p>Prix: ${item.prix}</p>
        </div>
        <button className="ajouterBtn" onClick={handleAddToCart}>
          Ajouter au panier
        </button>
        <div className="deleteIcon">
          <button className="boutonIconEdit" onClick={handleEdit}>
            <img src={edit} alt="edit icon" style={{width: "25px", height:"auto"}} />
          </button>
          <button className="boutonIcon" onClick={handleDelete}>
            <img src={deleteSvg} alt="delete icon" style={{width: "25px", height:"auto"}}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
