import {useState, useEffect } from 'react';
import logo from './PFP.png';
import './App.css';
import SearchBar from './components/SearchBar'
import getMovies from './helpers/getMovies'

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  
  useEffect(() => {
    if (term) {

      getMovies(term)
      .then(res => setResults(res))
    }
  }, [term])
  
  console.log(results)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <SearchBar onSearch={term => setTerm(term)}/>
        <h3>App level {term}</h3>
      </header>
    </div>
  );
}

export default App;
