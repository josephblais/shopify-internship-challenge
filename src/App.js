import {useState, useEffect } from 'react';
import logo from './PFP.png';
import './App.css';
import SearchBar from './components/SearchBar'
import getMovies from './helpers/getMovies'

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([1]);

  
  useEffect(() => {
    if (term) {
      // const API_KEY = process.env.REACT_APP_API_KEY;
      // const OMDB_URL = `https://www.omdbapi.com/`;
      // async function getMovies(query) {
      //   const encodedQuery = query.trim().replace(" ", "+")
      //   const movies = await fetch(`${OMDB_URL}?apikey=${API_KEY}&s=${encodedQuery}&type=movie&page=1`)
      //                       .then(res => res.json())
      //                       .then(results => setResults(results.Search))
      
      //   return movies;
      // }

      getMovies(term)
      .then(results => setResults(results))
    }
  }, [term])
  
  console.log("RESULTS ",results)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <SearchBar onSearch={term => setTerm(term)}/>
        <h3>Movies about {term}:</h3>
        {results.map(result => {return(
        <p><em>{result.Title}</em> {result.Year}</p>
        )})}
      </header>
    </div>
  );
}

export default App;
