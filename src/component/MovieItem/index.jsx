import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import "./index.css";
import ImgNotFound from "../../asset/ImgNotFound.png"

function MovieITem({ img, title, vote, vote_count }) {
  return (
    <>
      <div className="movie-item position-relative">
        {img !== null ?
        <img src={img} alt="poster" className="img-fluid rounded-3 image" /> :
        <img src={ImgNotFound} alt="poster" className="img-fluid rounded-3 image" />
        }
        <BsPlayCircle color="blue" className="play-btn position-absolute" />
      </div>
      <div className="movie-info text-white p-3">
        <h1>{title}</h1>
        <div className="d-flex align-items-center gap-2">
          <BsFillStarFill color="yellow" />
          <p className="mt-3">
            {vote} ({vote_count})
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieITem;
