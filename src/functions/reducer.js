import _ from "lodash";

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

function reducer(state, action) {
  console.log(action);
  const { type, value, id, resource } = action;

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
      newState.nexii[id - 1].life += value;
      newState.campaign.won = checkIfWon(newState.nexii);
      break;
    case "nextScenario":
      newState.campaign.currentScenario += 1;
      newState.campaign.gameStatus = "before";
      break;
    case "archiveCampaign":
      newState.campaign.currentScenario = 1; //this should be 0? but that currently doesn't mean anything
      newState.campaign.gameStatus = "init";
      //add an object to archive array that lists the player data, scenario data, number of attempts, date started, and date completed
      break;
    case "startNewCampaign":
      newState.campaign.currentScenario = 1;
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
      //could pull this out since it's used on win and on lose
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

//when does player life and poison get populated from startingLife snapshot?

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
//populatePlayerArray
//populateNexiiArray
//populateThreatDeck (shuffle first)
//populateTrickDeck (shuffle first)
//populate campaign.scenarios

//what happens if I click "win" and i didn't mean to? can I go back?
//is having to click WIN already a failsafe, on top of decrementing the nexii health?
