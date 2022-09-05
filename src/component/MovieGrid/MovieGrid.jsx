import React from "react";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import MovieItem from "../../component/MovieItem/MovieITem";
import { Link } from "react-router-dom";

function MovieGrid({ url, category, movieType, apiKey, imgUrl }) {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(true);

  async function getDiscoverMovie() {
    const request = await fetch(
      `${url}${category}${movieType}${apiKey}&page=1`
    );
    const response = await request.json();
    const movies = await response.results;

    setMovie(movies);

    setLoading(false);
  }

  async function loadMore() {
    const request = await fetch(
      `${url}${category}${movieType}${apiKey}&page=${page}`
    );
    const response = await request.json();
    const newMovies = await response.results;

    setMovie([...movie, ...newMovies]);
    setPage(page + 1);
  }

  useEffect(function () {
    getDiscoverMovie();
  }, []);

  return (
    <div className="container-fluid bg-dark">
      {loading && <Spinner animation="border" variant="primary" size="lg" />}
      <div className="row g-4 py-5">
        {movie.map(function (movies, i) {
          return (
            <div
              className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-8 w-50"
              key={i}
            >
              <Link to={`/movie/${movies.id}`}>
                <MovieItem img={`${imgUrl}${movies.poster_path}`} />
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
