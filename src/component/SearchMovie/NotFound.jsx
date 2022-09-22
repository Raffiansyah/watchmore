import React from "react";
import ImgNotFound from "../../asset/NotFoundMovie.svg";

function NotFound() {
  return (
    <div className="text-center text-white">
      <img src={ImgNotFound} className="img-fluid" alt="ilustration" />
      <h1 className="mt-5">Upsss! Movie Not Found</h1>
    </div>
  );
}

export default NotFound;
