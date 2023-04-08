function reducer(state, action) {
  const res = action.resource;
  const val = action.value;

  const newState = { ...state };

  const newResources = {
    ...newState.resources,
    [res]: state.resources[res] + val,
  };
  return { ...state, resources: newResources };
}
export default reducer;

//all over the place:
//set gameStatus

//setup steps:
//populatePlayerArray
//populateNexiiArray
//populateThreatDeck (shuffle first)
//populateTrickDeck (shuffle first)
//populate campaign.scenarios

//during game:
//increment resource (8xP + 1xN options)
//advance round

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
