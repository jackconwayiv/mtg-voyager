const nexiiData = [
  {
    id: 1,
    name: "Nicol Bolas",
    colors: "UBR",
    faction: "black",
    life: 20,
    setup: "During setup, each player starts with -1 card in hand.",
    rules:
      "On enemy upkeep, a random eligible player sacrifices a creature (or noncreature) permanent.",
    death:
      "When this Nexus is destroyed, all creatures in play get -3/-3 until end of turn.",
    intensifications: { round: 6, text: "Black creatures have wither." },
    enraged: { life: 10, text: "This nexus is angry!" },
  },
  {
    id: 2,
    name: "Baral",
    colors: "U",
    faction: "blue",
    life: 20,
    // setup: "During setup, each player starts with -1 card in hand.",
    // rules:
    //   "On enemy upkeep, a random eligible player sacrifices a creature (or noncreature) permanent.",
    // death:
    //   "When this Nexus is destroyed, all creatures in play get -3/-3 until end of turn.",
    // intensifications: { round: 6, text: "Black creatures have wither." },
    // enraged: { life: 10, text: "This nexus is angry!" },
  },
  {
    id: 3,
    name: "Vraska",
    colors: "BG",
    faction: "green",
    life: 20,
    setup: "During setup, each player starts with -1 card in hand.",
    rules:
      "On enemy upkeep, a random eligible player sacrifices a creature (or noncreature) permanent.",
    death:
      "When this Nexus is destroyed, all creatures in play get -3/-3 until end of turn.",
    intensifications: { round: 6, text: "Black creatures have wither." },
    enraged: { life: 10, text: "This nexus is angry!" },
  },
  {
    id: 4,
    name: "Emrakul",
    colors: "C",
    faction: "colorless",
    life: 20,
    setup: "During setup, each player starts with -1 card in hand.",
    rules:
      "On enemy upkeep, a random eligible player sacrifices a creature (or noncreature) permanent.",
    death:
      "When this Nexus is destroyed, all creatures in play get -3/-3 until end of turn.",
    intensifications: { round: 6, text: "Black creatures have wither." },
    enraged: { life: 10, text: "This nexus is angry!" },
  },
];

export default nexiiData;
