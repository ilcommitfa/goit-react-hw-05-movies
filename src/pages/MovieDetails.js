import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'components/api';
import Chevron from 'react-chevron';
import {Image, Info, List, Movie, AddInfo, LinkButton } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieDetails(movieId)
    .then(data => {
      setMovie(data);
    })
    .catch(error => {
      console.log(error);
    });
}, [movieId]);

return (
  <>
      <LinkButton to={backLinkLocationRef.current}><Chevron direction={'left'}/>Back</LinkButton>
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
          <AddInfo>
            <h3>Additional information</h3>
              <List>
                <li>
                  <LinkButton to="cast">Cast</LinkButton>
                </li>
                <li>
                  <LinkButton to="reviews">Reviews</LinkButton>
                </li>
            </List>
          </AddInfo>
          </Info>
        </Movie>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
  </>
  );
};

export default MovieDetails;