import React, { useEffect } from "react";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";
import apiConfig from "../Api/apiConfig";
import { category, movieType } from "../Api/category";
import MovieGrid from "../component/MovieGrid/MovieGrid";


function Movie() {
  useEffect(function () {
    document.title = "Movie";
  }, []);

  return (
    <>
      <NavBar />
      <MovieGrid url={apiConfig.baseUrl} category={category.movie} movieType={movieType.popular} apiKey={apiConfig.apiKey} imgUrl={apiConfig.w500Img} />
      <Footer />
    </>
  );
}

export default Movie;
