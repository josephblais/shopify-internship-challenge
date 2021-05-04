import Button from "./Button";

export default function SearchResults(props) {
  const {results, addNomination} = props;

  return (
    results.map(result => {return(
    <p>
      <Button 
      click={() => addNomination(result)}
      name={"Add"}
      />
      <em>{result.Title}</em> {result.Year}
    </p>
    )})
  )
}