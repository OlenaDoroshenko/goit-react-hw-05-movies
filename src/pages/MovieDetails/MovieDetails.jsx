import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMoviesById } from 'api/api';
import { useLocation } from 'react-router-dom';
import BackLink from 'components/base/BackLink/BackLink';
import Box from 'components/base/Box/Box';
import MovieOverview from 'components/MovieOverview/MovieOverview';
import MovieAddInfo from 'components/MovieAddInfo/MovieAddInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      const response = await fetchMoviesById(Number(movieId));
      if (response) {
        setMovie(response);
        setGenres(response.genres.map(genre => genre.name));
        setImageSource(
          `https://image.tmdb.org/t/p/w200/${response.poster_path}`
        );
      }
    } catch {
      setError('Failed to load =(');
    }
  };

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';


  return (
    <Box p="20px">
      <BackLink to={backLinkHref}>Back</BackLink>
      {error && <p>{error}</p>}
      {movie && (
        <>
      <MovieOverview movie={movie} genres={genres} image={imageSource}/>
      <MovieAddInfo state={location.state.from}/>
      <Outlet />
      </>)}
      </Box>
  )
};

export default MovieDetails;
