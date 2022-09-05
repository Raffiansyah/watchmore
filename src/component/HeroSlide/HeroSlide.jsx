import React from "react";
import { useEffect, useState } from "react";
import apiConfig from "../../Api/apiConfig";
import { category } from "../../Api/category";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";
import "./heroslide.css";
import { Link } from "react-router-dom";

function HeroSlide() {
  SwiperCore.use([Autoplay]);
  const [image, setImage] = useState([]);

  useEffect(function () {
    async function getImg() {
      const request = await fetch(
        `${apiConfig.baseUrl}trending/${category.movie}day?${apiConfig.apiKey}`
      );
      const response = await request.json();
      const IMG = await response.results.slice(0, 10);

      setImage(IMG);
    }
    getImg();
  }, []);
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {image.map(function (images) {
          return (
            <SwiperSlide key={images.id} className="position-relative">
              <div className="position-relative">
                <img
                  src={`${apiConfig.originalImg}${images.backdrop_path}`}
                  alt={images.title}
                  className="img-fluid opacity-50"
                />
                <div className="container row justify-content-around align-items-center overlay position-absolute">
                  <div className="col-8 col-lg-6 col-xl-8 text-white">
                    <h1>{images.title}</h1>
                    <p>{images.overview}</p>
                    <Link to={`/movie/${images.id}`} className="btn btn-primary btn-pr">
                      Watch Trailer
                    </Link>
                  </div>
                  <div className="col-4 col-lg-4 col-xl-4">
                    <img
                      src={`${apiConfig.w500Img}${images.poster_path}`}
                      alt={images.title}
                      className="w-75 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HeroSlide;
