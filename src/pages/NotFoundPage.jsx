import React from "react";
import ImgNotPage from "../asset/NotFoundPage.svg";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="not-found bg-dark d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center text-white">
        <img src={ImgNotPage} width={500} height={250} alt="ilustration" />
        <h1 className="my-3">Page Not Found</h1>
        <Link to="/" className="btn btn-outline-primary">
          Homepage
        </Link>
      </div>
    </div>
  );
}
