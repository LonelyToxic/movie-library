import React, { useState } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'DMB', poster: 'dmb.jpg', rating: 10.0, description: 'Army comedy film'},
    { id: 2, title: 'Jarhead', poster: 'jarhead.jpg', rating: 9.0, description: 'Film about operation "Desert storm" from the prespective of a young navy soldier'}
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(searchQuery.toLowerCase())
);

return (
  <div className="App">
    <h1>Movie Library</h1>
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <MovieList movies={filteredMovies} />
  </div>
);
};

export default App;