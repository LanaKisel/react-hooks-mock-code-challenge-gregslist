import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ cards, onDelete }) {

  const newCards = cards.map((card) => <ListingCard key={card.id} card={card} onDelete={onDelete} />)

  return (
    <main>
      <ul className="cards">
        {newCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
