import React from "react";
const Card = ({ card }) => {
  if (card.revealed) {
    return (
      <div className={"card " + card.color} key={card.id}>
        <div className="cardTitle">
          <p className="boldened">{card.name}</p>
          <p>{card.cost}</p>
        </div>
        <div>{card.type}</div>
        <div className="cardText">{card.text}</div>
        <div>
          <p className="finePrint setCode">
            {card.set} {card.id}
          </p>
        </div>
      </div>
    );
  } else
    return (
      <img src="../cardback.jpg" alt="cardback" width="200px" height="255px" />
    );
};
export default Card;
