import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/api';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, Image, MovieTitle, Rating } from './Home.styled';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies(page)
      .then(data => {
        page === 1
        ? setMovies(data.results)
        : setMovies(prevMovies => [...prevMovies, ...data.results]);
        setTotalPages(data.total_pages);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);

  const loadMore = () => {
    if(page < totalPages) {
      setPage(prevPage => prevPage + 1);
    } 
    return;
  };

  return (
    <div>
      <h1>Trending Movies</h1>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMore}
        hasMore={totalPages <= 1 || totalPages === page ? false : true}
        loader={<h4>Loading...</h4>}
      >
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
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
      </InfiniteScroll>
    </div>
  );
};

export default Home;
