import React from "react";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import MovieItem from "../MovieItem/index";
import { Link } from "react-router-dom";
import "./index.css";

function MovieGrid({ url, category, movieType, apiKey, imgUrl , title}) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);

  async function loadMore() {
    const request = await fetch(
      `${url}${category}/${movieType}${apiKey}&page=${page}`
    );
    const response = await request.json();
    const newMovies = await response.results;

    setMovie([...movie, ...newMovies]);
    setPage(page + 1);
  }

  useEffect(
    function () {
      async function getDiscoverMovie() {
        const request = await fetch(
          `${url}${category}/${movieType}${apiKey}&page=1`
        );
        const response = await request.json();
        const movies = await response.results;

        setMovie(movies);

        setLoading(false);
      }
      getDiscoverMovie();
    },
    [apiKey, category, movieType, url]
  );

  return (
    <div className="container-fluid bg-dark">
      {loading && <Spinner animation="border" variant="primary" size="lg" />}
      <h1>{title}</h1>
      <div className="row g-4 py-5">
        {movie.map(function (movies, i) {
          return (
            <div
              className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-8 movie-grid mx-auto"
              key={i}
            >
              <Link to={`/movie/${movies.id}`} className='nav-link'>
                <MovieItem
                  img={`${imgUrl}${movies.poster_path}`}
                  title={movies.title}
                  vote={movies.vote_average}
                  vote_count={movies.vote_count}
                />
              </Link>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={loadMore}>
            load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieGrid;
