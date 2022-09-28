import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsHouseDoor, BsCollectionPlay } from "react-icons/bs";
import { useState } from "react";

function NavBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const search = () => {
    if (query !== "") {
      navigate(`/search/${query}`)
      setQuery("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark border-bottom border-secondary">
      <div className="container-fluid">
        <h1 className="navbar-brand fs-2">
          Watch <span className="text-primary">More.</span>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse pt-3 pb-3" id="navbarNav">
          <ul className="navbar-nav fs-4 ms-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link d-flex justify-content-center gap-1"
              >
                <BsHouseDoor className="mt-1" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/movie"
                className="nav-link d-flex justify-content-center gap-1"
              >
                <BsCollectionPlay className="mt-1" /> Movie
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search" onSubmit={search}>
            <input
              className="form-control me-2"
              placeholder="Search movie.."
              onChange={(e) => onChange(e)}
            />
            <Link to={`/search/${query}`} className="btn btn-outline-primary">Search</Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
