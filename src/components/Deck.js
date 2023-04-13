import React from "react";
import Card from "./Card";
import CardBar from "./CardBar";
const Deck = ({ deck, deckType, dispatch }) => {
  const moveCard = (cardToMove, zoneFrom, zoneTo) => {
    dispatch({
      type: "moveCard",
      payload: { cardToMove, deckType, zoneFrom, zoneTo },
    });
  };

  const drawCard = () => {
    dispatch({
      type: "drawCard",
      payload: { deckType },
    });
  };

  const renderCards = (zone, nameOfZone, typeOfRender) => {
    return zone.map((card, id) => {
      //reshuffle error here
      return (
        <span key={id}>
          {typeOfRender === "card" ? (
            <Card
              key={card.id}
              card={card}
              zoneIn={nameOfZone}
              moveCard={moveCard} //reshuffle error here
            />
          ) : (
            <CardBar
              key={card.id}
              card={card}
              zoneIn={nameOfZone}
              moveCard={moveCard}
            />
          )}
        </span>
      );
    });
  };

  return (
    <div>
      <div className="deckZonesDisplay">
        <div className="zone library">
          {" "}
          <img
            src="../cardback.jpg"
            alt="cardback"
            width="200px"
            height="255px"
            onClick={() => {
              drawCard();
            }}
          />
          {deck.library.length}
        </div>
        <div className="zone stack">
          {renderCards(deck.stack, "stack", "card")}
        </div>
        <div className="deckSidebar">
          <div className="zone graveyard">
            {renderCards(deck.graveyard, "graveyard", "bar")}
          </div>
          <div className="zone exile">
            {renderCards(deck.exile, "exile", "bar")}
          </div>
          <div className="zone hand">
            {renderCards(deck.hand, "hand", "bar")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deck;
