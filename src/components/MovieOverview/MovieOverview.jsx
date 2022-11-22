import Box from 'components/base/Box/Box';
import PropTypes from 'prop-types';

const MovieOverview = ({ movie, genres, image }) => {
  return (
    <Box display="flex" boxShadow="3px 3px 8px rgba(0,0,0, 0.3)">
      <img src={image} alt={movie.title} />
      <Box ml="14px">
        <h3>{movie.title}</h3>
        <span>User Score:{movie.popularity}</span>
        <h4>Overview</h4>
        <span>{movie.overview}</span>
        <h5>Genres</h5>
        {genres.map(genre => (
          <span key={genre}>{genre}</span>
        ))}
      </Box>
    </Box>
  );
};

export default MovieOverview;

MovieOverview.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
  genres: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};
