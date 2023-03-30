import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LazyLoadComponent><Home /></LazyLoadComponent>} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        <Route path="*" element={<Home />} />
        </Route>
      </Routes>
  );
};

export default App;