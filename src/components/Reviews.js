import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/api';
import { List, ReviewTitle, ReviewText } from './Reviews.styled';

const Reviews = () => {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <section>
      <h2>Reviews</h2>
      <List>
        {reviews.length !== 0
          ? reviews.map(review => (
              <li key={review.id}>
                <ReviewTitle>Author: {review.author}</ReviewTitle>
                <ReviewText>{review.content} </ReviewText>
              </li>
            ))
          : "We don't have any reviews for this movie"}
      </List>
    </section>
  );
};

export default Reviews;