import { fetchCastById } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from 'components/base/Box/Box';
import CastListItem from 'components/CastListItem/CastListItem';

const CastList = () => {
  const { movieId } = useParams();
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast();
  });

  const fetchCast = async () => {
    try {
      const response = await fetchCastById(Number(movieId));

      if (response.length === 0) {
        setError('No info found');
      }

      setCast(response);
    } catch {
      setError('Failed to load =(');
    }
  };

  return (
    <Box>
      {error && <p>{error}</p>}
      {cast.length > 0 && (
        <ul>
          {cast.map((i, index) => (
            <CastListItem actor={i} key={index} />
          ))}
        </ul>
      )}
    </Box>
  );
};

export default CastList;
