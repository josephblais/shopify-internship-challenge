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
 }

 const removeNomination = (movie) => {
  setNominations(nominations.filter(nomination => nomination.imdbID != movie.imdbID))
 }

const disableButton = (id) => {
  return nominations.some(nomination => nomination.imdbID === id) || nominations.length === 5
}

const deleteThisFunction = () => {
  console.log("🤡")
  return false;
}

const showNominations = () => {
  console.log("NOMINATIONS: ", nominations)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <button onClick={showNominations}>✅SHOW NOMINATIONS</button>
        <Button click={() => addNomination("😩")} name={"TEST"} disable={disableButton("tt9231040")}></Button>
        <SearchBar onSearch={term => setTerm(term)}/>
        <h3>Movies about {term}:</h3>
        <SearchResults 
          results={results}
          handleNomination={addNomination}
          disableButton={disableButton}
          />
          <h3>👇🏻Nominations👇🏻</h3>
        <SearchResults 
          results={nominations}
          handleNomination={removeNomination}
          disableButton={deleteThisFunction}
          />
          <button onClick={showNominations}>✅SHOW NOMINATIONS</button>

      </header>
    </div>
  );
}

export default App;
