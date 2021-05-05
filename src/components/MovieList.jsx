import Button from "./Button";

export default function MovieList(props) {
  const {results, handleNomination, disableButton} = props;
  return (
    <ul>
      {results.map(result => {return(
        <li key={result.imdbID}>
        <Button 
        click={() => handleNomination(result)}
        name={"Add"}
        disable={disableButton(result.imdbID)}
        />
        <em>{result.Title}</em> {result.Year}
      </li>
      )})}
    </ul>
  )
}