import { fetchTrendingMovies } from 'api/api';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMovies(data))
      .catch(error => setError('Failed to load =('));
  }, []);

  return (
    <main>
      {error && <p>{error}</p>}
      {movies.length > 0 && (
        <>
          <h2>Trending today</h2>
          <MoviesList movies={movies} />
        </>
      )}
    </main>
  );
};

export default Home;
