import { useEffect, useState } from "react";
import { DeletMovie } from "../utils/utils";
import "./style.css";

function CardItem({ cardData }) {


  
  const clickDel = (id) =>{
      DeletMovie(id).then(() => {
    window.location.reload(false)
  })
  }



  return (
    <div className="CardItem">
    <button onClick={() => clickDel(cardData && cardData.id)}>Delete</button>
     
        <h2>{cardData.title && cardData.title}</h2>
      <p>{cardData.year && cardData.year}</p>
      <img src={cardData.poster && cardData.poster} alt={cardData.title && cardData.title} />
      <p>{cardData.description && cardData.description}</p>
      <div className="genre">

        <ul>
        {cardData && Array.isArray(cardData.genres && cardData.genres) ? cardData.genres.map((genre, index) => 
        <li key={index}>{genre}</li>):null}
        </ul>
        

      </div>
    </div>
  );
}

export default CardItem;