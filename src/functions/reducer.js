import _ from "lodash";
import allCampaigns from "../dataFiles/campaignsData";
import nexiiData from "../dataFiles/nexiiData";
import shuffleCards from "../functions/shuffleCards";

const checkIfLost = (players) => {
  const filtered = players.filter((player) => player.resources.life === 0);
  console.log(filtered);
  return filtered.length === players.length;
};
const checkIfWon = (nexii) => {
  const filtered = nexii.filter((nexus) => nexus.life === 0);
  console.log(filtered);
  return filtered.length === nexii.length;
};

const fetchNewNexii = (state) => {
  const scenarioIndex = state.campaign.currentScenario - 1;
  const scenario = state.campaign.details.scenarios[scenarioIndex];
  const newNexii = nexiiData.filter((nexus) => {
    return scenario.nexii.includes(nexus.id);
  });
  return newNexii;
};

const moveCard = (newState, cardToMove, deckType, zoneFrom, zoneTo) => {
  const newZoneFrom = [
    ...newState[deckType][zoneFrom].filter((card) => {
      return card.id !== cardToMove.id;
    }),
  ];
  const newZoneTo = [cardToMove, ...newState[deckType][zoneTo]];
  newState[deckType][zoneFrom] = newZoneFrom;
  newState[deckType][zoneTo] = newZoneTo;
};

const millOut = (newState) => {
  newState.nexii.forEach((nexus) => {
    nexus.life = Math.ceil(nexus.life / 2);
  });
};

//populate new enemy Decks function

const fetchEnemyDecks = (state) => {
  const trickDeck = shuffleCards([{}, {}, {}]);
  const threatDeck = shuffleCards([{}, {}, {}]);
  return { trickDeck, threatDeck };
};

const reshuffleGraveyard = (newState, deckType) => {
  const newYard = shuffleCards(newState[deckType].graveyard);
  for (let i = 0; i < newYard.length; i++) {
    moveCard(newState, newYard[i], deckType, "graveyard", "library");
  }
};

const resolveFromStack = (newState, deckType) => {
  const stack = newState[deckType].stack;
  for (let i = 0; i < stack.length; i++) {
    moveCard(newState, stack[i], deckType, "stack", "graveyard");
  }
};

function reducer(state, action) {
  console.log(action);
  const { type, value, id, resource, index } = action;

  const newState = _.cloneDeep(state);

  switch (type) {
    case "toggleTurn":
      newState.campaign.playersTurn = !newState.campaign.playersTurn;
      break;
    case "round":
      newState.campaign.round += value;
      break;
    case "gameStatus":
      newState.campaign.gameStatus = value;
      break;
    case "playerResource":
      newState.players[id - 1].resources[resource] += value;
      newState.campaign.lost = checkIfLost(newState.players);
      break;
    case "nexusLife":
      newState.nexii[index].life += value;
      newState.campaign.won = checkIfWon(newState.nexii);
      break;
    case "nextScenario":
      newState.campaign.currentScenario += 1;
      newState.nexii = fetchNewNexii(newState);
      // call function to populate both enemy decks based on Nexii and scenario core set
      newState.campaign.gameStatus = "before";
      break;
    case "drawCard":
      if (newState[action.payload.deckType].stack.length > 0) {
        resolveFromStack(newState, action.payload.deckType);
      }

      if (newState[action.payload.deckType].library.length === 0) {
        reshuffleGraveyard(newState, action.payload.deckType);
        millOut(newState);
      }
      moveCard(
        newState,
        newState[action.payload.deckType].library[0],
        action.payload.deckType,
        "library",
        "stack",
      );
      break;
    case "moveCard":
      moveCard(
        newState,
        action.payload.cardToMove,
        action.payload.deckType,
        action.payload.zoneFrom,
        action.payload.zoneTo,
      );
      break;
    case "archiveCampaign":
      newState.campaign.currentScenario = 0;
      newState.campaign.gameStatus = "init";
      //push new campaign record object to archive array
      break;
    case "startNewCampaign":
      newState.campaign.currentScenario = 1;
      newState.campaign.details = allCampaigns[action.payload.campaignId - 1];
      newState.nexii = fetchNewNexii(newState);
      newState.campaign.gameStatus = "campaign";
      break;
    case "winScenario":
      newState.campaign.startingLife = state.players.map(
        (player) => player.resources.life,
      );
      console.log("lifes: ", newState.campaign.startingLife);
      newState.campaign.startingPoison = state.players.map(
        (player) => player.resources.poison,
      );
      console.log("poisons: ", newState.campaign.startingPoison);
      //could pull this out into its own function since it's used on win and on lose
      newState.players.forEach((player) =>
        Object.keys(player.resources).forEach((resource) => {
          if (resource !== "life" && resource !== "poison") {
            player.resources[resource] = 0;
          }
        }),
      );
      console.log(newState.players[0].resources);
      if (newState.campaign.setupTurns > 3) newState.campaign.setupTurns -= 1;
      console.log("setup turns: ", newState.campaign.setupTurns);
      newState.campaign.round = 0;
      console.log("round is ", newState.campaign.round);
      newState.campaign.gameStatus = "won";
      newState.campaign.won = false;
      newState.campaign.lost = false;
      break;
    case "loseScenario":
      newState.players.forEach((player) => {
        player.resources.life = newState.campaign.startingLife[player.id - 1];
        player.resources.poison =
          newState.campaign.startingPoison[player.id - 1];
      });
      console.log(newState.players[0].resources);
      //could pull this out since it's used on win and on lose
      newState.players.forEach((player) =>
        Object.keys(player.resources).forEach((resource) => {
          if (resource !== "life" && resource !== "poison") {
            player.resources[resource] = 0;
          }
        }),
      );
      newState.campaign.setupTurns += 1;
      newState.nexii = fetchNewNexii(newState); //this may not be needed, added it due to dev testing setup
      newState.campaign.gameStatus = "lost";
      newState.campaign.won = false;
      newState.campaign.lost = false;
      break;
    default:
      break;
  }
  console.dir(newState.trickDeck);
  return newState;
}
export default reducer;

//triggerWon:
//snapshot player life and player poison
//reset weal, woe, energy, xp, taxA, and taxB, AND round to 0 upon winClick
//increment setupTurns down (if not 3)
//advance campaign.currentScenario
//set gameStatus

//triggerLost:
//reset starting life and poison to previous snapshot
//reset weal, woe, energy, xp, taxA, and taxB, AND round to 0 upon loseClick
//increment setup turns up
//set gameStatus

//setup steps:
//populatePlayerArray (on create campaign)
//populate campaign.scenarios (on create campaign)
//when does player life and poison get populated from startingLife snapshot?

//advance round:
//populateNexiiArray (on advance round)
//populateThreatDeck (shuffle first) (on advance round)
//populateTrickDeck (shuffle first) (on advance round)
