import {useState, useEffect } from 'react';
import logo from './PFP.png';
import './App.css';
import SearchBar from './components/SearchBar'
import getMovies from './helpers/getMovies'
import Button from './components/Button';
import MovieList from './components/MovieList';

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  
  useEffect(() => {
    // Perform API call on search bar input
    if (term) {
      getMovies(term)
      .then(results => results.length > 1 && setResults(uniqueResults(results)))
      .catch(() => setResults([]))
    }
    // Reset results to an empty array if the search bar is cleared
    if (term.length < 3) {
      setResults([])
    }
  }, [term])

  const uniqueResults = (unfilteredResults) => {
    // Sometimes the API returns two identical results.
    // Here, we use the Set class to filter out these identical results.
    // Since each object will by default have a unique object reference,
    // we need to convert the data into a JSON string for Set to work properly˛
    const unique = [...new Set(unfilteredResults.map((result => JSON.stringify(result))))].map((string) => JSON.parse(string))
    return unique;
  }
  
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

deleteThisFunction()

const showNominations = () => {
  console.log("NOMINATIONS: ", nominations)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Damn shawty, it's time for the Shoppies! Who are you gonna vote for this time? Add your nominations below!
        </p>
        <button onClick={showNominations}>✅SHOW NOMINATIONS</button>
        <Button click={() => addNomination("😩")} name={"TEST"} disable={disableButton("tt9231040")}></Button>
        <SearchBar onSearch={term => setTerm(term)}/>
        <h3>Movies about {term}:</h3>
        <MovieList 
          results={results}
          handleNomination={addNomination}
          disableButton={disableButton}
          />
          <h3>👇🏻Nominations👇🏻</h3>
        <MovieList 
          results={nominations}
          handleNomination={removeNomination}
          disableButton={() => false}
          />
          <button onClick={showNominations}>✅SHOW NOMINATIONS</button>

      </header>
    </div>
  );
}

export default App;
