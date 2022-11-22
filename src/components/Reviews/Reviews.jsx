import { fetchReviewsById } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from 'components/base/Box/Box';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';

const Reviews = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchCast();
  });

  const fetchCast = async () => {
    try {
      const response = await fetchReviewsById(Number(movieId));

      if (response.length === 0) {
        setError('No info found');
      }
      setReviews(response);
    } catch {
      setError('Failed to load =(');
    }
  };

  return (
    <Box>
      {error && <p>{error}</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map((i, index) => (
            <ReviewsItem key={index} review={i} />
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Reviews;
