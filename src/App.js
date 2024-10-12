import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/details';
import Home from './pages/home';
import FavoriteMovies from './pages/favorite-movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/view-details/:id`} element={<Details />} />
          <Route path={`/favorite-movies`} element={<FavoriteMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
