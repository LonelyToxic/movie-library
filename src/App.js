import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'DMB', poster: '/dmb.jpg', rating: 10.0, description: 'Army comedy film'},
    { id: 2, title: 'Jarhead', poster: '/18c745a686214eaa9b77911d799c.jpg', rating: 9.0, description: 'Film about operation "Desert storm" from the prespective of a young navy soldier'}
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const filteredMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const toggleTheme = () => {
  setIsDarkTheme(!isDarkTheme)
};

useEffect(() => {
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}, [isDarkTheme]);

return (
  <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
    <h1>Movie Library</h1>
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
    </button>
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    <MovieList movies={filteredMovies} />
  </div>
);
};

export default App;