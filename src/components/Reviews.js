const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <div className="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <p>Author: {review.author}</p>
            <p>Date: {review.created_at}</p>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;