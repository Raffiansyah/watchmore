import React from "react";
import { Link } from "react-router-dom";
import { BsHouseDoor, BsSearch, BsCollectionPlay } from "react-icons/bs"

function NavBar() {
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav fs-4 ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link d-flex justify-content-center gap-1">
                <BsHouseDoor className="mt-1" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie" className="nav-link d-flex justify-content-center gap-1">
                <BsCollectionPlay className="mt-1" /> Movie
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link d-flex justify-content-center gap-1">
              <BsSearch className="mt-1" /> Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
