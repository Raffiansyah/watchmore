import React from "react";
import "./DetailMovie.css";
import DetailInfo from "./DetailInfo";
import DetailTrailer from "./DetailTrailer";
import { BsFillStarFill } from "react-icons/bs";

function DetailItem({ backdropImg, posterPath, title, genre, overview,vote, vote_count }) {
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
            <h4 className="mt-3">{genre}</h4>
            <div className="d-flex align-items-center gap-2">
              <BsFillStarFill color="yellow" />
              <h4 className="mt-3">
                {vote} ({vote_count})
              </h4>
            </div>
            <div className="mt-3">
              <h1>Overview</h1>
              <p>{overview}</p>
            </div>
          </div>
          <DetailInfo />
        </div>
      </div>
      <DetailTrailer />
    </>
  );
}

export default DetailItem;
