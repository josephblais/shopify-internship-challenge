import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import getMovies from "./helpers/getMovies";
import MovieList from "./components/MovieList";
import Banner from "./components/Banner";

function App() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {
    // Perform API call on search bar input
    if (term) {
      getMovies(term)
        .then(
          (results) => results.length > 1 && setResults(uniqueResults(results))
        )
        .catch(() => setResults([]));
    }
    // Reset results to an empty array if the search bar is cleared
    if (term.length < 3) {
      setResults([]);
    }
  }, [term]);

  const uniqueResults = (unfilteredResults) => {
    // Sometimes the API returns two identical results.
    // Here, we use the Set class to filter out these identical results.
    // Since each object will by default have a unique object reference,
    // we need to convert the data into a JSON string for Set to work properly˛
    const unique = [
      ...new Set(unfilteredResults.map((result) => JSON.stringify(result))),
    ].map((string) => JSON.parse(string));
    return unique;
  };

  const addNomination = (movie) => {
    setNominations((prev) => [...prev, movie]);
  };

  const removeNomination = (movie) => {
    setNominations(
      nominations.filter((nomination) => nomination.imdbID != movie.imdbID)
    );
  };

  const disableButton = (id) => {
    return (
      nominations.some((nomination) => nomination.imdbID === id) ||
      nominations.length === 5
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar onSearch={(term) => setTerm(term)} />

        {nominations.length === 5 && <Banner />}

        {results.length > 0 && (
          <MovieList
            results={results}
            handleNomination={addNomination}
            buttonName={"+"}
            disableButton={disableButton}
            title={`Movies about ${term}`}
          />
        )}

        {nominations.length > 0 && (
          <MovieList
            results={nominations}
            handleNomination={removeNomination}
            buttonName={"-"}
            disableButton={() => false}
            title={"Nominations"}
          />
        )}
        {/* <button onClick={showNominations}>✅SHOW NOMINATIONS</button> */}
      </header>
    </div>
  );
}

export default App;
