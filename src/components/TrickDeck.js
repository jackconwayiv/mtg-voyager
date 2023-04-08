import React from "react";
import threatDeck from "../functions/assembleDeck";
import shuffleCards from "../functions/shuffleCards";
import Card from "./Card";
const TrickDeck = () => {
  const shuffle = () => {
    return shuffleCards(threatDeck);
  };

  const renderCards = (deck) => {
    return deck.map((card, id) => {
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
      <div className="zone stack">{renderCards(shuffle(threatDeck))}</div>
    </div>
  );
};
export default TrickDeck;
