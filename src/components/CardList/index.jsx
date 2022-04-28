import { useState, useEffect } from "react";
import CardItem from "../CardItem";
import { GetApi } from "../utils/utils";
import "./style.css";

function CardList() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
GetApi().then((data) => setMoviesData(data))
  }, []);

  return (
    <div className="CardList">
      <h1>Lista dei film</h1>
      <div className="CardList__wrapper">
        {moviesData &&
          moviesData.map((movie) => (
            <CardItem cardData={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default CardList;