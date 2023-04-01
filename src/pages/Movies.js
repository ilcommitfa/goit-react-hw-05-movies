import { useState } from 'react';
import { searchMovies } from 'components/api';
import { Button, Input, Icon, Wrapper } from './Movies.styled';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const { results } = await searchMovies(searchQuery);
    setMovies(results);
  };

  return (
    <>
      <h1>Search movies</h1>
      <Wrapper onSubmit={handleSearchSubmit}>
        <Input 
            type="text"
            autoComplete="off"
            autoFocus
            value={searchQuery}
            onChange={handleSearchInputChange}
             />
        <Button type="submit"><Icon /></Button>
      </Wrapper>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Movies;