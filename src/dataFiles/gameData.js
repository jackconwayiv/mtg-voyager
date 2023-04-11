import nexiiData from "./nexiiData";
import playerData from "./playerData";
import allScenarios from "./scenariosData";
import therosCards from "./therosCardSets";
const threatDeck = therosCards.filter((card) => card.type !== "Instant");
const trickDeck = therosCards.filter((card) => card.type === "Instant");

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
      startedOn: "",
      title: "Beginner Campaign",
      finalScenario: 3,
      description: "A simple way to learn the rules.",
      scenarios: allScenarios[0],
      victory:
        "Congratulations! You're on your way to becoming a Voyager MtG veteran!",
    },
    gameStatus: "init", //flag string
    currentScenario: 1, //marker number for progress through campaign
    startingLife: [20, 20, 20],
    startingPoison: [0, 0, 0],
    setupTurns: 3,
    round: 0,
    playersTurn: true,
    won: false,
    lost: false,
  },
  archive: [
    {
      campaignId: 1,
      dateStarted: "date",
      playersData: [
        {
          name: "billy",
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
