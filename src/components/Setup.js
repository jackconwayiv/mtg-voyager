import React from "react";
const Setup = ({ state, dispatch }) => {
  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "startNewCampaign" })}>
          New Campaign
        </button>
      </div>
      <div>
        Number of Players | Name | Commander | Second Commander | Color ID
      </div>
      <p>how can you disallow a color that's used elsewhere?</p>
      <div>Game settings: format, challenge level (easy, normal, hard)</div>
      <div>Select a Campaign, or Create a Random Campaign</div>
      <p>Timestamps campaign create date/time.</p>
      <p>
        Populates Campaign object in state: gamestatus, campaign subobject(?),
        scenarios, current and final scenario, starting life and poison, setup
        turns, round, won, and lost
      </p>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};
export default Setup;
