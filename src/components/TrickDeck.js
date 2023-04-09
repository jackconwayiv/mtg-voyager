import React from "react";
import shuffleCards from "../functions/shuffleCards";
import Card from "./Card";
const TrickDeck = ({ deck }) => {
  const shuffle = () => {
    return shuffleCards(deck);
  };

  const renderCards = (deck) => {
    return deck.library.map((card, id) => {
      return (
        <span
          key={id}
          onClick={() => {
            console.log("clicked");
            card.revealed = !card.revealed;
          }}
        >
          <Card card={card} />
        </span>
      );
    });
  };

  return (
    <div>
      <h2>Trick Deck</h2>
      <div className="zone stack">{renderCards(shuffle(deck))}</div>
    </div>
  );
};
export default TrickDeck;
