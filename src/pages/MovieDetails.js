import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieCredits, fetchMovieReviews } from 'components/api';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import Chevron from 'react-chevron';
import {Image, Info, List, ListItem, Movie, AddInfo, LinkBack } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const backButton = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
      const movieCredits = await fetchMovieCredits(movieId);
      setCredits(movieCredits);
      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews);
    };
    fetchData();
  }, [movieId]);

  return (
    <>
    <LinkBack to={backButton.current}><Chevron direction={'left'}/>Back</LinkBack>
        <Movie>
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
          <Info>
            <h1>{movie.title}{' '}{movie.release_date
              ? `(${movie.release_date.slice(0, 4)})`
              : ''}</h1>
            <p>Rating: {movie.vote_average}</p>
            <h3>Description</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            {movie.genres 
              ? (<p>{movie.genres.map(genre => genre.name).join(', ')}</p>)
              : ("Sorry, info is abscent")}
          </Info>
        </Movie>

      <Cast cast={credits} />
      <Reviews reviews={reviews} />
    </>
  );
};

export default MovieDetails;