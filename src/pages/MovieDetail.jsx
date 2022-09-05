import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../Api/apiConfig";
import { category } from "../Api/category";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";
import DetailHeader from "../component/DetailMovieContent/DetailHeader";
import SimilarMovie from "../component/SimilarMovie/SimilarMovie";

function MovieDetail() {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(
    function () {
      async function getMovie() {
        const request = await fetch(
          `${apiConfig.baseUrl}${category.movie}${params.id}?${apiConfig.apiKey}`
        );
        const response = await request.json();
        const genres = response.genres.map((genre) => genre.name).join(" | ");
        setMovie(response);
        setGenre(genres);
        document.title = response.title;
      }
      getMovie();
    },
    [params]
  );

  return (
    <section className="bg-dark text-white">
      <NavBar />
      <DetailHeader
        backdropImg={`${apiConfig.originalImg}${movie.backdrop_path}`}
        posterPath={`${apiConfig.w500Img}${movie.poster_path}`}
        genre={genre}
        overview={movie.overview}
        title={movie.title}
      />
      <SimilarMovie category={category.movie} />
      <Footer />
    </section>
  );
}

export default MovieDetail;
