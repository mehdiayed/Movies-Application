import './App.css';
import { useEffect, useState } from 'react';
import search from "./search.svg"
import MovieCard from './MovieCard';
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ef6a7710"


const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm,SetsearchTerm] = useState('');

  const searchMovies = async (title) => {

    const result = await fetch(`${API_URL}&s=${title}`);
    const data = await result.json();
    setmovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Avengers')
  }, []);

  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input type="text" placeholder='Search for a movies' value={searchTerm} onChange={(e) => {SetsearchTerm(e.target.value)}} />
        <img src={search} alt="search" onClick={()=>{searchMovies(searchTerm)}}/>
      </div>
      {
        movies?.length > 0
          ? (
            <div className="container">
              {/* <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt="poster"></img>
          </div>
          <div>
            <span>{movie1.type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div> */}
              {movies.map((movie) => (
                <MovieCard movie={movie}></MovieCard>
              ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>no movies flound</h2>
            </div>
          )
      }


    </div>
  );
}

export default App;
