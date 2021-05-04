import {useState, useEffect } from 'react';
import logo from './PFP.png';
import './App.css';
import SearchBar from './components/SearchBar'
import getMovies from './helpers/getMovies'

function App() {
  const [term, setTerm] = useState("");

  const apiTest = getMovies("larry")
  const movies = apiTest
  console.log(apiTest)
  console.log("🧶",movies)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World.
        </p>
        <SearchBar onSearch={term => setTerm(term)}/>
        <h3>App level {term}</h3>
        {/* <h4>API Key: {process.env.REACT_APP_API_KEY}</h4> */}
      </header>
    </div>
  );
}

export default App;
