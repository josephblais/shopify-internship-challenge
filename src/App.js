import {useState, useEffect } from 'react';
import logo from './PFP.png';
import './App.css';
import SearchBar from './components/SearchBar'
import getMovies from './helpers/getMovies'

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([1]);

  
  useEffect(() => {
    // Perform API call on search bar input
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
      .then(results => results.length > 1 && setResults(results))
      .catch(() => setResults([]))
    }
    // Reset results to an empty array if the search bar is cleared
    if (term.length < 3) {
      setResults([])
    }
  }, [term])
  
  console.log("RESULTS ",results)
  console.log("TERM :", term, "TERM LENGTH: ", term.length)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <SearchBar onSearch={term => setTerm(term)}/>
        <h3>Movies about {term}:</h3>
        {/* {results.map(result => {return(
        <p><em>{result.Title}</em> {result.Year}</p>
        )})} */}
      </header>
    </div>
  );
}

export default App;
