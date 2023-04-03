import React from "react";

const NewGame = () => {
  const cards = [
    {
      name: "Goblin",
      type: "creature",
      stats: "1/1",
      color: "red",
      keyword: "first strike",
    },
    {
      name: "Elf",
      type: "creature",
      stats: "1/2",
      color: "green",
      keyword: "protector and reach",
    },
    {
      name: "Merfolk",
      type: "creature",
      stats: "1/1",
      color: "blue",
      keyword: "skulk",
    },
    {
      name: "Zombie",
      type: "creature",
      stats: "2/2",
      color: "black",
      keyword: "wither",
    },
    {
      name: "Cleric",
      type: "creature",
      stats: "2/1",
      color: "white",
      keyword: "lifelink",
    },
  ];
  const drawnCardIndex = Math.floor(Math.random() * cards.length);
  const drawnCard = cards[drawnCardIndex];
  return (
    <div>
      <h2>New Game</h2>
      <p>
        Select colors, challenge level, number of players, starting life totals,
        setup turns, etc.
      </p>
      <p>
        Encounter a {drawnCard.stats} {drawnCard.color} {drawnCard.name}{" "}
        creature token with {drawnCard.keyword}.
      </p>
      <p>Track each player's HP, poison, woe, weal, etc.</p>
    </div>
  );
};

export default NewGame;
