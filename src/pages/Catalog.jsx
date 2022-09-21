import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../component/navbar/index";
import Footer from "../component/footer/index";
import apiConfig from "../Api/apiConfig";
import { category } from "../Api/category";
import MovieGrid from "../component/MovieGrid/index";

function Catalog() {
  const params = useParams();

  useEffect(
    function () {
      document.title = params.movieType;
    },
    [params]
  );

  return (
    <>
      <NavBar />
      <MovieGrid
        url={apiConfig.baseUrl}
        category={category.movie}
        movieType={`${params.movieType}?`}
        apiKey={apiConfig.apiKey}
        imgUrl={apiConfig.w500Img}
      />
      <Footer />
    </>
  );
}

export default Catalog;
