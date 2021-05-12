import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import styled from 'styled-components';

const HiddenLabel = styled.label`
display: none
`;

const SearchBar = styled.input`
  background: none;
  border: none;
  border-bottom: 5px solid white;
  filter: drop-shadow(-30px 20px 15px #000000);
  height: 2em;
  max-width: 75vw;
  color: black;
  font-size: 2em;
  &:focus { outline: none};
  &::placeholder { color: white; opacity: 1}
`;

export default function Searchbar({onSearch}) {
  const [value, setValue] = useState("");

  const term = useDebounce(value, 500);
  
  // const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);


  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        {/* This label is hidden but is visible for screen readers */}
        <HiddenLabel htmlFor="search-bar">
          <span className="visually-hidden">Search Films</span>
        </HiddenLabel>
        <SearchBar
          type="text"
          id="search-bar"
          placeholder="Search Films"
          onChange={(event) => setValue(event.target.value)}
          name="s"
        />
      </form>
    </>
  );
}
