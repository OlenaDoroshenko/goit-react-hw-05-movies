import { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}