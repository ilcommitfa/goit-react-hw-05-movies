import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits } from 'components/api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
      const movieCredits = await fetchMovieCredits(movieId);
      setCredits(movieCredits);
      // Пример получения отзывов
      // const movieReviews = await fetchMovieReviews(movieId);
      // setReviews(movieReviews);
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>

      <Cast cast={credits} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default MovieDetails;