import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => setCards(data))
  }, [])

  function onDelete(deletedItem) {
    const deleteFilter = cards.filter((card) => card.id !== deletedItem)
    setCards(deleteFilter)
  }

  function handleSearch(searchedItem) {
    const newSearch = cards.filter((card) => {
      return card.description.includes(searchedItem)
    });

    setCards(newSearch)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer cards={cards} onDelete={onDelete} />
    </div>
  );
}

export default App;
