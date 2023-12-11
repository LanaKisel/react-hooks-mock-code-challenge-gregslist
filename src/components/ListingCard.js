import React, { useState } from "react";

function ListingCard({ card, onDelete }) {

  const [like, setLike] = useState(true)

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: "DELETE"
    }
    )
      .then(r => r.json())
      .then(() => onDelete(card))
  }

  function handleLike() {
    if (like === true) {
      setLike(!like)
    }
    else if (!like) {
      setLike(true)
    }
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={card.description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
