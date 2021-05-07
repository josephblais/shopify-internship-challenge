import styled from 'styled-components';

const ActionButton = styled.button`
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
`;

export default function Button(props) {
  const {click, name, disable} = props;

  return (
    <ActionButton 
      onClick={click} 
      disabled={disable}
      >
      {name}
    </ActionButton>
  )
}