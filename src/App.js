import {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'

function App() {
  const [term, setTerm] = useState("");

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
