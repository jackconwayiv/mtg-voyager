import {
  THSE01,
  THSE02,
  THSE03,
  THSE04,
  THSE05,
} from "../dataFiles/therosSets";
import nexiiData from "./nexiiData";
import playerData from "./playerData";
import scenarios from "./scenarioData";

const threatDeck = [...THSE01, ...THSE02, ...THSE03, ...THSE04, ...THSE05];
const trickDeck = threatDeck;

const gameData = {
  players: playerData, //an array of player objects
  nexii: nexiiData, //an array of nexus objects
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
    gameStatus: "init", //flag string
    campaign: {}, //a campaign object
    scenarios, //an array of scenario objects
    currentScenario: 1, //marker number
    setupTurns: 3, //goes up if the party loses
    round: 0,
  },
};

//starting poison and starting life go on player object, not on campaign data

export default gameData;
