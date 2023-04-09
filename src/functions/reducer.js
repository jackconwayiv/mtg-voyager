import _ from "lodash";

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
      break;
    case "nexusLife":
      newState.nexii[id - 1].life += value;
      break;
    default:
      break;
  }

  return newState;
}
export default reducer;

//when does player life and poison get populated from startingLife snapshot?

//setup steps:
//populatePlayerArray
//populateNexiiArray
//populateThreatDeck (shuffle first)
//populateTrickDeck (shuffle first)
//populate campaign.scenarios

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

//what happens if I click "win" and i didn't mean to? can I go back?
//is having to click WIN already a failsafe, on top of decrementing the nexii health?
