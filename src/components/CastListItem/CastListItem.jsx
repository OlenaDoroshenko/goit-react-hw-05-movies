import picture from '../../images/default.jpg';
import StyledCastItem from './CastListItem.styled';
import PropTypes from 'prop-types';

const CastListItem = ({ actor: { profile_path, name, character } }) => {
  return (
    <StyledCastItem>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : picture
        }
        alt={name}
        width="150px"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </StyledCastItem>
  );
};

export default CastListItem;

CastListItem.propTypes = {
  actor: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }),
}
