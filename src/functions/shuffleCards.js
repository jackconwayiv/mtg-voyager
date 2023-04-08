function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}
const deck = [
  {
    id: 1,
    name: "Path to Exile",
    color: "white",
    cost: "W",
    type: "instant",
    text: "Exile target attacking creature. You may search your library for a basic land and put into play tapped. If you do, shuffle your library.",
    revealed: false,
  },
  { id: 2, name: "Brainstorm", color: "blue", cost: "U", revealed: false },
  { id: 3, name: "Duress", color: "black", cost: "B", revealed: false },
  { id: 4, name: "Lightning Bolt", color: "red", cost: "R", revealed: false },
  { id: 5, name: "Giant Growth", color: "green", cost: "G", revealed: false },
];

const shuffledDeck = shuffleCards(deck);

// export default shuffledDeck;
export default shuffleCards;
