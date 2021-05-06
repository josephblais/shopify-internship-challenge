import Button from "./Button";
import styled from "styled-components";

const ListContainer = styled.div`
  box-shadow: -2rem -2rem 5px 0px #011502;
  // filter: drop-shadow(-2em -1em 2px red);
  background: #f7fe72;
  color: black;
  border: 5px solid white;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px;
`;

const ListTitle = styled.h3`

`;

export default function MovieList(props) {
  const { results, handleNomination, disableButton, buttonName, title } = props;
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <List>
        {results.map((result) => {
          return (
            <li key={result.imdbID}>
              <Button
                click={() => handleNomination(result)}
                name={buttonName}
                disable={disableButton(result.imdbID)}
              />
              <em>{result.Title}</em> {result.Year}
            </li>
          );
        })}
      </List>
    </ListContainer>
  );
}
