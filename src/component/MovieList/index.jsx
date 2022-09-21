import React from "react";
import { useEffect, useState } from "react";
import apiConfig from "../../Api/apiConfig";
import Spinner from "react-bootstrap/Spinner";
import MovieItem from "../MovieItem/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function MovieList({ category, contentType, title }) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function getContent() {
        const request = await fetch(
          `${apiConfig.baseUrl}${category}/${contentType}${apiConfig.apiKey}`
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
          <Link to={`/catalog/${contentType}`} className="nav-link">
            <h1 className="text-white">{title}</h1>
          </Link>
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
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 5,
            slidesPerView: 4,
          },
          1024: {
            spaceBetween: 40,
            slidesPerView: 6,
          },
        }}
      >
        {content.map(function (contents) {
          return (
            <SwiperSlide key={contents.id}>
              <Link to={`/movie/${contents.id}`} className="nav-link">
                <MovieItem
                  img={`${apiConfig.w500Img}${contents.poster_path}`}
                  title={contents.title}
                  vote={contents.vote_average}
                  vote_count={contents.vote_count}
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
