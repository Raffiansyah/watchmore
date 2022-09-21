import React from "react";
import ImgNotPage from '../asset/404 Page Not Found _Monochromatic.svg'
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="text-center">
        <ImgNotPage src="../asset/404 Page Not Found _Monochromatic.svg" width={500} height={250} />
        <h1 className="my-3">Page Not Found</h1>
        <Link to="/" className="btn btn-outline-primary">
          Homepage
        </Link>
      </div>
    </div>
  );
}
