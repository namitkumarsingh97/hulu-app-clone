import React, { useEffect, useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import PropTypes from 'prop-types';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

Results.propTypes = {
  selectedOption: PropTypes.func.isRequired,
};

export default Results;
