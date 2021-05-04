export default function Button(props) {
  const {click, name, disable} = props;

  return (
    <button onClick={click} disabled={disable}>{name}</button>
  )
}