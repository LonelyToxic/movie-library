import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card'>
            <img src={movie.poster} alt={`${movie.title} poster`} />
            <h3>{movie.title}</h3>
            <p>Rating: {movie.rating}</p>
            <p>{movie.description}</p>
        </div>
    );
};

export default MovieCard;