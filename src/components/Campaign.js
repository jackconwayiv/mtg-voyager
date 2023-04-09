import React from "react";
const Campaign = ({ campaign, dispatch }) => {
  return (
    <div>
      <h1>Campaign View</h1>
      <p>
        Set up a new campaign - input format, players, difficulty settings,
        which scenario to play.
      </p>
      <p>
        See the map nodes for the ongoing campaign. See the end of scenario data
        for each previous session. Change (some) details about campaign. Retire
        early.
      </p>
      <p>
        See the victory text and rewards for the completed campaign. See a
        scoreboard comparing your previous runs, or other groups' runs?
      </p>
      {campaign.details.scenarios.map((scenario) => {
        return (
          <span key={scenario.id}>
            [[{scenario.code}] {scenario.name}]
          </span>
        );
      })}
      <p>Current Scenario: {JSON.stringify(campaign.currentScenario)}</p>
      {campaign.gameStatus === "campaign" && (
        <button
          onClick={() => {
            dispatch({ type: "gameStatus", value: "before" });
          }}
        >
          Start Scenario
        </button>
      )}
      {campaign.gameStatus === "progressing" &&
        campaign.currentScenario < campaign.details.finalScenario && (
          <button
            onClick={() => {
              dispatch({ type: "nextScenario" });
            }}
          >
            Advance to Next Scenario
          </button>
        )}
      {campaign.gameStatus === "progressing" &&
        campaign.currentScenario === campaign.details.finalScenario && (
          <button
            onClick={() => {
              dispatch({ type: "archiveCampaign" });
            }}
          >
            Conclude & Archive Campaign
          </button>
        )}
    </div>
  );
};
export default Campaign;
