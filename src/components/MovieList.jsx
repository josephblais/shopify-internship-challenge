import Button from "./Button";

export default function MovieList(props) {
  const {results, handleNomination, disableButton, buttonName} = props;
  return (
    <ul>
      {results.map(result => {return(
        <li key={result.imdbID}>
        <Button 
        click={() => handleNomination(result)}
        name={buttonName}
        disable={disableButton(result.imdbID)}
        />
        <em>{result.Title}</em> {result.Year}
      </li>
      )})}
    </ul>
  )
}