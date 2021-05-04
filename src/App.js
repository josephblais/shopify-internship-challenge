import {useState, useEffect } from 'react';
import logo from './PFP.png';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults';
import getMovies from './helpers/getMovies'
import Button from './components/Button';

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  
  useEffect(() => {
    // Perform API call on search bar input
    if (term) {
      getMovies(term)
      .then(results => results.length > 1 && setResults(results))
      .catch(() => setResults([]))
    }
    // Reset results to an empty array if the search bar is cleared
    if (term.length < 3) {
      setResults([])
    }
  }, [term])
  
 const addNomination = (movie) => {
  setNominations(prev => [...prev, movie])
  console.log(nominations);
 }

const disableButton = (id) => {
  return nominations.some(nomination => nomination.imdbID === id)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <Button click={() => addNomination("😩")} name={"TEST"} disable={disableButton("tt9231040")}></Button>
        <SearchBar onSearch={term => setTerm(term)}/>
        <h3>Movies about {term}:</h3>
        <SearchResults 
          results={results}
          addNomination={addNomination}
          disableButton={disableButton}
          />
      </header>
    </div>
  );
}

export default App;
