import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetail from './pages/MovieDetail';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie' element={<Movie />} />
        <Route path='movie/:id' element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
