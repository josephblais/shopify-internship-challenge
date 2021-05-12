import Button from './Button';
import styled from 'styled-components';

const ListContainer = styled.div`
  box-shadow: -2rem 2rem 0px 0px #011502;
  background: #f7fe72;
  color: black;
  border: 5px solid white;
  border-radius: 10px;
  margin-top: 4rem;
  width: 50vw;

  ${({ smallWidth }) => smallWidth && `
    @media screen and (min-width: 720px) {
      width: 30vw;
    }
    @media screen and (max-width: 720px) {
      width: 75vw;
    }
  `}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px;
`;

const ListTitle = styled.h3`
  padding-left: 1em;
`;

const Year = styled.span`
opacity: 20%;
font-size: 1.5em;
position: relative;
left: -20px;
`;

export default function MovieList(props) {
  const { smallWidth, results, handleNomination, disableButton, buttonName, title } = props;
  return (
    <ListContainer smallWidth={smallWidth}>
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
              <em>{result.Title}</em> 
              <Year>{result.Year}</Year>
            </li>
          );
        })}
      </List>
    </ListContainer>
  );
}
