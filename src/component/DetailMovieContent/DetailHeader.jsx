import React from "react";
import "./DetailMovie.css";
import DetailInfo from "./DetailInfo";
import DetailTrailer from "./DetailTrailer";

function DetailItem({ backdropImg, posterPath, title, genre, overview }) {
  return (
    <>
      <div>
        <img
          src={backdropImg}
          alt={`poster ${title}`}
          className="img-backdrop"
        />
      </div>
      <div className="container header py-5">
        <div className="row justify-content-evenly align-items-center">
          <div className="col-lg-4 poster-path">
            <img
              src={posterPath}
              alt={`poster ${title}`}
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col-lg-8 col-sm-12 info-detail">
            <h1>{title}</h1>
            <h4>{genre}</h4>
            <p>{overview}</p>
            <DetailInfo />
          </div>
        </div>
      </div>
      <DetailTrailer />
    </>
  );
}

export default DetailItem;
