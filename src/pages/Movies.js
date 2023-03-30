import { useState } from 'react';
import { searchMovies } from 'components/api';

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
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;