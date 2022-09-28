import React from "react";
import { useState, useEffect } from "react";
import MovieItem from "../MovieItem/index";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

function SearchMovie({ url, category, apiKey, imgUrl }) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(2);
  let params = useParams();

  async function loadMore() {
    const request = await fetch(
      `${url}search/${category}?${apiKey}&query=${params.query}&page=${page}`
    );
    const response = await request.json();
    const newMovies = await response.results;

    setMovie([...movie, ...newMovies]);
    setPage(page + 1);
  }

  useEffect(
    () => {
      async function getDiscoverMovie() {
        const request = await fetch(
          `${url}search/${category}?${apiKey}&query=${params.query}&page=1`
        );
        const response = await request.json();
        const movies = await response.results;
        setMovie(movies);
      }
      getDiscoverMovie()
    }, [url, category, apiKey, params]);

  return (
    <div className="container-fluid bg-dark py-5">
      <div className="d-flex justify-content-center"></div>
      <div className="mb-5 mt-5 text-center">
        <h3 className="fw-bold mb-3 text-white">Search result for</h3>
        <h2 className="fw-bolder text-primary">{`"${params.query}"`}</h2>
      </div>
      {movie.length === 0 ? (
        <NotFound />
      ) : (
        <div className="row g-4 py-5">
          {movie.map(function (movies, i) {
            return (
              <div
                className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xs-8 movie-grid mx-auto"
                key={i}
              >
                <Link to={`/movie/${movies.id}`} className="nav-link">
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
      )}
    </div>
  );
}

export default SearchMovie;
