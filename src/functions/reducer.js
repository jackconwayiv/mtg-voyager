import _ from "lodash";
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
  console.log("scenarioIndex", scenarioIndex);
  const scenario = state.campaign.details.scenarios[scenarioIndex];
  console.log("scenario", scenario);
  const newNexii = nexiiData.filter((nexus) => {
    return scenario.nexii.includes(nexus.id);
  });
  console.log(newNexii);
  return newNexii;
};
const fetchEnemyDecks = (state) => {
  const trickDeck = shuffleCards([{}, {}, {}]);
  const threatDeck = shuffleCards([{}, {}, {}]);
  return { trickDeck, threatDeck };
};

//populate new enemy Decks function

function reducer(state, action) {
  console.log(action);
  const { type, value, id, resource, index, deckType } = action;

  const newState = _.cloneDeep(state);

  switch (type) {
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
    case "moveCard":
      newState[deckType][index.zoneFrom] = value.newZoneFrom;
      newState[deckType][index.zoneTo] = value.newZoneTo;
      break;
    case "archiveCampaign":
      newState.campaign.currentScenario = 0;
      newState.campaign.gameStatus = "init";
      //push new campaign record object to archive array
      break;
    case "startNewCampaign":
      newState.campaign.currentScenario = 1;
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
