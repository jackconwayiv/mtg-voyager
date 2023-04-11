import React from "react";
const CardBar = ({ card, zoneIn, moveCard }) => {
  if (card.revealed) {
    //put on top of library, 10 down in library, shuffle into library
    return (
      <div className={"cardBar " + card.color} key={card.id}>
        <div className="cardTitle">
          <p className="boldened">{card.name}</p>
          <p>{card.cost}</p>
        </div>
        <div>
          <p className="finePrint setCode">
            {zoneIn !== "stack" && (
              <button
                className="zoneButton"
                onClick={() => {
                  moveCard(card, zoneIn, "stack");
                }}
              >
                👀
              </button>
            )}
            {zoneIn !== "graveyard" && (
              <button
                className="zoneButton"
                onClick={() => {
                  moveCard(card, zoneIn, "graveyard");
                }}
              >
                🪦
              </button>
            )}
            {zoneIn !== "exile" && (
              <button
                className="zoneButton"
                onClick={() => {
                  moveCard(card, zoneIn, "exile");
                }}
              >
                🌀
              </button>
            )}
            {zoneIn !== "library" && (
              <button
                className="zoneButton"
                onClick={() => {
                  moveCard(card, zoneIn, "library");
                }}
              >
                📚
              </button>
            )}
            {zoneIn !== "hand" && (
              <button
                className="zoneButton"
                onClick={() => {
                  moveCard(card, zoneIn, "hand");
                }}
              >
                ✋
              </button>
            )}
            {card.symbol} {card.id}
          </p>
        </div>
      </div>
    );
  } else
    return (
      <img src="../cardback.jpg" alt="cardback" width="200px" height="255px" />
    );
};
export default CardBar;
