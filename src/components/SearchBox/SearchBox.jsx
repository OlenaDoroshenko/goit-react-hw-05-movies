import { useState } from 'react';
import Box from 'components/base/Box/Box';
import PropTypes from 'prop-types';

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
    {/* <form onSubmit={handleSubmit}> */}
      <input type="text" value={query} onChange={handleChange}></input>
      <button type="submit">Search</button>
    {/* </form> */}
    </Box>
  );
};

export default SearchBox;

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}