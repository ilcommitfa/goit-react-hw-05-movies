import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'components/api';
import { List, ListItem, Image, Name, Text } from './Cast.styled';

const Cast = () => {

  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <section>
      <h2>Cast</h2>
      <List className="cast-list">
        {cast.map(actor => (
          <ListItem key={actor.id} className="cast-item">
            <Image src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
            <Name>{actor.name}</Name>
            <Text>{actor.character}</Text>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default Cast;