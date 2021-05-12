import MovieList from "./MovieList";
import styled from "styled-components";

const ListsContainer = styled.div`
position: relative;
display: flex;
justify-content: space-around;
align-items: flex-start;

${({ fullWidth }) => fullWidth && `
@media screen and (min-width: 720px) {
  width: 80%;
}
@media screen and (max-width: 720px) {
  flex-direction: column;
}
`}


`;

export default function Lists(props) {
  const {
    results,
    nominations,
    term,
    addNomination,
    removeNomination,
    disableButton,
  } = props;

  const nominationsExist = () => {
    return nominations.length > 0;
  };
  
  const resultsExist = () => {
    return results.length > 0;
  };

  return (
    <ListsContainer fullWidth={nominationsExist() && resultsExist()}>
      {results.length > 0 && (
        <MovieList
          smallWidth={nominationsExist()}
          results={results}
          handleNomination={addNomination}
          buttonName={"+"}
          disableButton={disableButton}
          title={`Movies about ${term}`}
        />
      )}

      {nominations.length > 0 && (
        <MovieList
          smallWidth={resultsExist()}
          results={nominations}
          handleNomination={removeNomination}
          buttonName={"-"}
          disableButton={() => false}
          title={"Nominations"}
        />
      )}
    </ListsContainer>
  );
}
