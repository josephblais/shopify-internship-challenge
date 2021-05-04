import Button from "./Button";

export default function SearchResults(props) {
  const {results, addNomination, disableButton} = props;

  return (
    results.map(result => {return(
    <p>
      <Button 
      click={() => addNomination(result)}
      name={"Add"}
      disable={disableButton(result.imdbID)}
      />
      <em>{result.Title}</em> {result.Year}
    </p>
    )})
  )
}