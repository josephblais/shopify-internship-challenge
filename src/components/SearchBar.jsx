import { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: right;
  color: red;
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
        <label htmlFor="search-bar">
          <span className="visually-hidden">Search Films</span>
        </label>
        <input
          type="text"
          id="search-bar"
          placeholder="Search Films"
          onChange={(event) => setValue(event.target.value)}
          name="s"
        />
      </form>
      <h2>{term}</h2>
      <Title>Heyoo</Title>
    </>
  );
}
