import React, { useEffect, useState } from "react";

const NewGame = () => {
  const [drawnCard, setDrawnCard] = useState({});
  const cards = [
    {
      name: "Goblin",
      type: "creature",
      stats: "1/1",
      color: "red",
      keyword: ["first strike", "wither"],
    },
    {
      name: "Merciful Judgment",
      type: "sorcery",
      color: "white",
      effect:
        "For EACH creature you control, choose one: [a.] exile it, or  [b.] you lose 5 life and target Nexus gains 5 life.",
    },
    {
      name: "Blight the Landscape",
      type: "sorcery",
      color: "red",
      effect: "For each rare you control, blight a land you control if able.",
    },
    {
      name: "Reclamation",
      type: "sorcery",
      color: "green",
      effect:
        "Exile your graveyard. For each creature card exiled in this way, lose 1 life or encounter a 1/1 green Insect creature token with wither.",
    },
    {
      name: "Time Blip",
      type: "sorcery",
      color: "blue",
      effect:
        "Put a stun counter on each tapped permanent you control, or return it to its owner's hand.",
    },
    {
      name: "Utter Terror",
      type: "sorcery",
      color: "black",
      effect:
        "Discard a card from hand at random, plus another card at random for each rare you control, then draw that many minus one.",
    },
    {
      name: "Elf",
      type: "creature",
      stats: "1/2",
      color: "green",
      keyword: ["protector and reach", "lifelink"],
    },
    {
      name: "Merfolk",
      type: "creature",
      stats: "1/1",
      color: "blue",
      keyword: ["skulk", "hexproof", "provoke"],
    },
    {
      name: "Zombie",
      type: "creature",
      stats: "2/2",
      color: "black",
      keyword: ["wither", "deathtouch", "lifelink"],
    },
    {
      name: "Cleric",
      type: "creature",
      stats: "2/1",
      color: "white",
      keyword: ["lifelink", "first strike"],
    },
  ];
  //include an array of adjectives that go with the keywords? "angry goblin"? too cute?

  const drawEnemyCard = () => {
    const drawnCardIndex = Math.floor(Math.random() * cards.length);
    const drawnCardTemplate = cards[drawnCardIndex];
    let drawnCard = { ...drawnCardTemplate };
    drawnCard.type === "creature" &&
      (drawnCard.keyword =
        drawnCard.keyword[
          Math.floor(Math.random() * drawnCard.keyword.length)
        ]);
    //have to split this up, so you can adjust the keyword down to a single one... (0, 1, or 2);
    //battles, artifacts, enchantments, planeswalkers??
    setDrawnCard(drawnCard);
  };
  const renderCardText = () => {
    return drawnCard.type === "sorcery" ? (
      <p>{drawnCard.effect}</p>
    ) : (
      <p>
        Encounter a {drawnCard.stats} {drawnCard.color} {drawnCard.name}{" "}
        creature token with {drawnCard.keyword}.{" "}
      </p>
    );
  };

  useEffect(() => {
    drawEnemyCard();
  }, []);

  return (
    <div>
      <h2>New Game</h2>
      <p>
        Select colors, challenge level, number of players, starting life totals,
        setup turns, etc.
      </p>

      <p>Click to toggle or set each color of each nexus.</p>
      {/* This stuff goes in Playing: */}
      <div>
        <button onClick={() => drawEnemyCard()}>Draw Enemy Card</button>
      </div>
      {renderCardText()}
    </div>
  );
};

export default NewGame;
