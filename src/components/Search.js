import React, { useState } from "react";

function Search({ onSearch }) {

  const [searchedItem, setSearchedItem] = useState("")

  function handleChange(e) {
    setSearchedItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(searchedItem)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchedItem}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
