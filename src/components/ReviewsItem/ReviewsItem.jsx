import PropTypes from 'prop-types';

const ReviewsItem = ({ review: { author, content } }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
    review: PropTypes.shape({
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }
    ).isRequired,
}