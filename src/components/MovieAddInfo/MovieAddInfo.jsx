import Box from 'components/base/Box/Box';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const MovieAddInfo = () => {
  const location = useLocation();

  return (
    <Box p="8px" boxShadow="3px 3px 8px rgba(0,0,0, 0.3)">
      <h5>Additional information</h5>
      <ul>
        <li>
          <Link to={'cast'} state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default MovieAddInfo;
