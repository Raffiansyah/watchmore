import React from "react";
import { useState } from "react";
import MovieItem from "../MovieItem/index";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

function SearchMovie({ url, category, apiKey, imgUrl }) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(2);
  const [query, setQuery] = useState([]);
  const [pageActive, setPageActive] = useState(false);
  const [info, setInfo] = useState(false);

  async function loadMore() {
    const request = await fetch(
      `${url}search/${category}?${apiKey}&query=${query}&page=${page}&include_adult=false`
    );
    const response = await request.json();
    const newMovies = await response.results;

    setMovie([...movie, ...newMovies]);
    setPage(page + 1);
  }

  async function getDiscoverMovie() {
    const request = await fetch(
      `${url}search/${category}?${apiKey}&query=${query}&page=1&include_adult=false`
    );
    const response = await request.json();
    const movies = await response.results;
    setMovie(movies);
    setPageActive(true);
  }

  function onClick(event) {
    event.preventDefault();
    getDiscoverMovie();
    setInfo(true);
  }


  return (
    <div className="container-fluid bg-dark py-5">
      <div className="d-flex justify-content-center">
        <form className="d-flex" role="search" style={{ width: "75%" }}>
          <input
            className="form-control me-2"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-primary" onClick={onClick}>
            Search
          </button>
        </form>
      </div>
      {info && (
        <div className="mb-5 mt-5 text-center">
          <h3 className="fw-bold mb-3 text-white">Search result for</h3>
          <h2 className="fw-bolder text-primary">{`"${query}"`}</h2>
        </div>
      )}
      
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
        {pageActive && (
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={loadMore}>
              load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchMovie;
