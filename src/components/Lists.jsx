import MovieList from "./MovieList";
import styled from 'styled-components';


export default function Lists(props) {
  const {
    results,
    nominations,
    term,
    addNomination,
    removeNomination,
    disableButton,
  } = props;
  return (
    <>
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
    </>
  );
}
