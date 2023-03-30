import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/api';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <LazyLoadImage
              effect="blur"
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
              width={185}
              height={277}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
