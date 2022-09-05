import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import "./MovieItem.css";

function MovieITem({ img }) {
  return (
    <div className="movie-item position-relative">
      <img src={img} alt="poster" className="img-fluid rounded-3 image" />
      <BsPlayCircle color="blue" className="play-btn position-absolute" />
    </div>
  );
}

export default MovieITem;
