import React, { useEffect } from "react";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";
import MovieList from "../component/MovieList/MovieList";
import {
  category,
  movieType,
  movieTitle,
} from "../Api/category";
import HeroSlide from "../component/HeroSlide/HeroSlide";

function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);

  return (
    <div className="bg-dark">
      <NavBar />
      <HeroSlide />
      <MovieList
        category={category.movie}
        contentType={movieType.upcoming}
        title={movieTitle.upcoming}
      />
      <MovieList
        category={category.movie}
        contentType={movieType.now_playing}
        title={movieTitle.now_playing}
      />
      <MovieList
        category={category.movie}
        contentType={movieType.top_rated}
        title={movieTitle.top_rated}
      />
      <Footer />
    </div>
  );
}

export default Home;
