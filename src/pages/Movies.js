import { useState, useEffect } from 'react';
import { searchMovies } from 'components/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Button, Input, Icon, Wrapper, List, ListItem, Image, MovieTitle, Rating } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || '';

  const handleChange = (e) => {
    setSearchParams({query: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (query !== '') {
      const fetchData = async () => {
        const { results } = await searchMovies(query);
        setMovies(results);
    };
      fetchData();
    }
  }, [query, location]);

  return (
    <>
      <h1>Search movies</h1>
      <Wrapper onSubmit={handleSubmit}>
        <Input
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        />
        <Button type="submit"><Icon /></Button>
      </Wrapper>
      <List>
        {movies.map((movie) => (
          <ListItem key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <Rating>Rating: {movie.vote_average}</Rating>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Movies;