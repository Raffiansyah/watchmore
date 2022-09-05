import React from "react";
import { useEffect, useState } from "react";
import apiConfig from "../../Api/apiConfig";
import Spinner from "react-bootstrap/Spinner";
import MovieItem from "../MovieItem/MovieITem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function MovieList({ category, contentType, title }) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function getContent() {
        const request = await fetch(
          `${apiConfig.baseUrl}${category}${contentType}${apiConfig.apiKey}`
        );
        const response = await request.json();
        const content = await response.results;

        setContent(content);
        setLoading(false);
      }
      getContent();
    },
    [category, contentType]
  );

  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-between align-items-center p-3">
        <div className="col-4">
        <h1 className="text-white">{title}</h1>
        </div>
        <div className="col-4 text-primary ms-5">
          <Link to="/movie" className="btn btn-outline-primary">See More</Link>
        </div>
      </div>
      {loading && <Spinner animation="border" variant="primary" />}
      <Swiper
        grabCursor={true}
        breakpoints={{
          360: {
            spaceBetween: 5,
            slidesPerView: 2,
          },
          375: {
            spaceBetween: 5,
            slidesPerView: 4,
          },
          768: {
            spaceBetween: 5,
            slidesPerView: 6,
          },
          1024: {
            spaceBetween: 20,
            slidesPerView: 8,
          },
        }}
      >
        {content.map(function (contents) {
          return (
            <SwiperSlide key={contents.id}>
              <Link to={`/movie/${contents.id}`}>
                <MovieItem
                  img={`${apiConfig.w500Img}${contents.poster_path}`}
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MovieList;
