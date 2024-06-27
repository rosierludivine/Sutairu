import React from "react";
import "../pages/mesdesign.css";
import edit from "../icons/edit.svg";
import axios from 'axios';
import pull from "../images/pull.jpg";
import deleteSvg from "../icons/deleteSvg.svg";

const CardItem = ({ item }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/article/${item.id}`);//delete a partir de l'id de l'article 
      console.log('Article supprimé :', response.data);
      alert("Article supprimé avec succès");
      window.location.reload()//permettre de rafraichir la page 
      // Vous pouvez ajouter ici une logique pour mettre à jour l'état des articles si nécessaire
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article :', error);
      alert('Erreur lors de la suppression de l\'article');
    }
    
  };
  
  return (
    <div className="CardItem">
      <div className="leftSide">
        <img src={pull} alt={item.hoodie} /> {/* image en dure */}
        <p className="productName">{item.hoodie}</p>
      </div>
      <div className="rightSide">
        <div className="sizePrice">
          <p>Taille: {item.taille}</p>
          <p>Prix: ${item.prix}</p>
        </div>
        <button className="ajouterBtn">Ajouter au panier</button>
        <div className="deleteIcon">
          <button className="boutonIconEdit"><img src={edit} alt="edit icon" style={{width: "25px", height:"auto"}}/></button>
          <button className="boutonIcon" onClick={handleDelete}><img src={deleteSvg} alt="delete icon" style={{width: "25px", height:"auto"}}/></button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
