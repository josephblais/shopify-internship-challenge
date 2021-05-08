import styled from 'styled-components';

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;


  ${({ white }) => white && `
    color: white;
  `}
`;

export default function Button(props) {
  const {click, name, disable, white} = props;

  return (
    <ActionButton 
      onClick={click} 
      disabled={disable}
      white={white}
      >
      {name}
    </ActionButton>
  )
}