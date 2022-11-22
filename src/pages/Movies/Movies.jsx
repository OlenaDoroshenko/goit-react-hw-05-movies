import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBox from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    if (!filterParam) {
      return;
    }

    fetchMoviesByQuery(filterParam)
      .then(data => {
        if (!data) {
          setError('Nothing found =(');
          return;
        }
        setMovies(data);
      })
      .catch(error => setError('Failed to load =('));
  }, [filterParam]);

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { filter: query } : {});
    setMovies([]);
    setError(null);
  };

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
