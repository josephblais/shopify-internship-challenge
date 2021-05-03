import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function Searchbar() {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 500);

  // const onSearch = useCallback(props.onSearch, [term]);

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
    </>
  );
}
