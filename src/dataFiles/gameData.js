import cardsFromBRO2 from "../../data/BROcards";
import shuffleCards from "../functions/shuffleCards";
import cardsFromBRO from "./cardsFromBRO";
import cardsFromCORE from "./cardsFromCORE";
import nexiiData from "./nexiiData";
import playerData from "./playerData";
import allScenarios from "./scenariosData";
import therosCards from "./therosCardSets";
const threatDeck = shuffleCards(
  [...therosCards, ...cardsFromBRO, ...cardsFromCORE, ...cardsFromBRO2].filter(
    (card) => card.type !== "Instant",
  ),
);
const trickDeck = shuffleCards(
  [...therosCards, ...cardsFromBRO, ...cardsFromCORE, ...cardsFromBRO2].filter(
    (card) => card.type === "Instant",
  ),
);

const gameData = {
  players: playerData, //an array of player objects
  nexii: [nexiiData[0], nexiiData[1], nexiiData[2]], //an array of nexus objects
  threatDeck: {
    library: threatDeck, //an array of card objects
    hand: [],
    stack: [],
    graveyard: [],
    exile: [],
  },
  trickDeck: {
    library: trickDeck, //an array of card objects
    hand: [],
    stack: [],
    graveyard: [],
    exile: [],
  },
  campaign: {
    details: {
      id: 1,
      title: "Beginner Campaign",
      finalScenario: 3,
      description: "A simple way to learn the rules.",
      scenarios: allScenarios[0],
      victory:
        "Congratulations! You're on your way to becoming a Voyager MtG veteran!",
    },
    gameStatus: "init", //flag string
    currentScenario: 1, //marker number for progress through campaign
    numberOfPlayers: 3,
    startedDate: 1681427182957,
    startingLife: [20, 20, 20],
    startingPoison: [0, 0, 0],
    setupTurns: 3,
    round: 0,
    playersTurn: true,
    won: false,
    lost: false,
    wins: 0,
    losses: 0,
  },
  archive: [
    {
      campaignId: 1,
      startedDate: "date",
      wins: 0,
      losses: 0,
      numberOfPlayers: 3,
      playersData: [
        {
          name: "billy",
          color: "black",
          commander: "hi",
          commanderB: "hi",
          endingLife: 3,
          endingPoison: 6,
        },
        {},
      ],
      scenariosData: [{ id: 1, attempts: 1, dateCompleted: "date" }],
    },
  ],
};

export default gameData;
