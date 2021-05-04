export default function Button(props) {
  const {click, name} = props;

  return (
    <button onClick={click}>{name}</button>
  )
}