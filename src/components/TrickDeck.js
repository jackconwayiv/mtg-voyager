import React from "react";
import Card from "./Card";
import CardBar from "./CardBar";
const TrickDeck = ({ deck, deckType, dispatch }) => {
  const moveCard = (cardToMove, zoneFrom, zoneTo) => {
    //card is an object
    //zoneFrom and ZoneTo are keys on the deck object
    const newZoneFrom = [
      ...deck[zoneFrom].filter((card) => {
        return card.id !== cardToMove.id;
      }),
    ];
    const newZoneTo = [cardToMove, ...deck[zoneTo]];
    dispatch({
      type: "moveCard",
      deckType,
      index: { zoneFrom, zoneTo },
      value: { newZoneFrom, newZoneTo },
    });
  };

  const drawCard = () => {
    moveCard(deck.library[0], "library", "stack");
  };

  const renderCards = (zone, nameOfZone, typeOfRender) => {
    return zone.map((card, id) => {
      return (
        <span key={id}>
          {typeOfRender === "card" ? (
            <Card
              key={card.id}
              card={card}
              zoneIn={nameOfZone}
              moveCard={moveCard}
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
      <h2>Trick Deck</h2>
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
export default TrickDeck;
