// const makeBlankInstantCards = () => {
//   let blankInstantCards = [];
//   for (let x = 0; x < 45; x++) {
//     const blankCard = {
//       id: 9001001 + x,
//       symbol: "🌎",
//       set: "CORE",
//       name: "All Clear",
//       color: "colorless",
//       cost: "0",
//       type: "Instant",
//       text: "No trick.",
//       revealed: true,
//     };
//     blankInstantCards.push(blankCard);
//   }
//   return blankInstantCards;
// };

const cardsFromCORE = [
  // ...makeBlankInstantCards(),
  {
    id: 1001001,
    symbol: "🌎",
    set: "CORE",
    name: "Divine Judgment",
    color: "white",
    cost: "2WW",
    type: "Sorcery",
    text: "Destroy all creatures and planeswalkers. The enemy stops casting spells this turn.",
    revealed: true,
  },
  {
    id: 1001002,
    symbol: "🌎",
    set: "CORE",
    name: "Time Loop",
    color: "blue",
    cost: "2UU",
    type: "Sorcery",
    text: "Return all nonland permanents to their owner's hand. The enemy stops casting spells this turn.",
    revealed: true,
  },
  {
    id: 1001003,
    symbol: "🌎",
    set: "CORE",
    name: "Utter Terror",
    color: "black",
    cost: "2BB",
    type: "Sorcery",
    text: "Each player discards all the cards in their hand, exiles their graveyard, then draws cards equal to the number they discarded minus one.",
    revealed: true,
  },
  {
    id: 1001004,
    symbol: "🌎",
    set: "CORE",
    name: "Pillage and Burn",
    color: "red",
    cost: "2RR",
    type: "Sorcery",
    text: "Each player blights an unblighted (nonbasic) land they control and gains a Woe counter.",
    revealed: true,
  },
  {
    id: 1001005,
    symbol: "🌎",
    set: "CORE",
    name: "State of Nature",
    color: "green",
    cost: "2GG",
    type: "Sorcery",
    text: "Destroy all artifacts and enchantments.",
    revealed: true,
  },
];

export default cardsFromCORE;
