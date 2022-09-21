import { React} from "react";
import NavBar from "../component/navbar/index";
import Footer from "../component/footer/index";
import SearchMovies from "../component/SearchMovie";
import apiConfig from "../Api/apiConfig";
import { category } from "../Api/category";

function SearchMovie() {
  return (
    <>
      <NavBar />
      <SearchMovies apiKey={apiConfig.apiKey} url={apiConfig.baseUrl} imgUrl={apiConfig.w500Img} category={category.movie}  />
      <Footer />
    </>
  );
}

export default SearchMovie;
