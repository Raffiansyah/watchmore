import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'swiper/css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetail from './pages/MovieDetail';
import Catalog from './pages/Catalog';
import SearchMovie from './pages/SearchMovie';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie' element={<Movie />} />
        <Route path='movie/:id' element={<MovieDetail />} />
        <Route path='catalog/:movieType' element={<Catalog />} />
        <Route path='search/:query' element={<SearchMovie />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
