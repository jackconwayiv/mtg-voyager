import React from "react";
import nexiiData from "../dataFiles/nexiiData";
import Nexus from "./Nexus";
const Scenario = ({ campaign, dispatch }) => {
  const scenario = campaign.scenarios[campaign.currentScenario - 1];

  const scenarioNexii = nexiiData.filter((nexus) =>
    scenario.nexii.includes(nexus.id),
  );

  return (
    <div className="scenario">
      <h1>
        Scenario {scenario.code}: {scenario.name}
      </h1>
      {campaign.gameStatus === "before" && <p>{scenario.beforeText}</p>}
      {campaign.gameStatus === "before" && (
        <p>OBJECTIVE: {scenario.objective}</p>
      )}
      <p>Starting Life Totals</p>
      <p>Number of Setup Turns</p>
      {campaign.gameStatus === "won" && <p>{scenario.wonText}</p>}
      {campaign.gameStatus === "before" && (
        <button
          onClick={() => dispatch({ type: "gameStatus", value: "playing" })}
        >
          Begin!
        </button>
      )}
      {campaign.gameStatus === "won" && (
        <button
          onClick={() => dispatch({ type: "gameStatus", value: "progressing" })}
        >
          Back to Campaign
        </button>
      )}
      {campaign.gameStatus === "before" && (
        <div>
          <h2>Who You're Facing:</h2>
          <div className="nexiiContainer">
            {scenarioNexii.map((nexus) => {
              return <Nexus key={nexus.id} nexus={nexus} round={0} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Scenario;
