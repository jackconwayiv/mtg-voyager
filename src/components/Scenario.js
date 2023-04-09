import React from "react";
import Nexus from "./Nexus";
const Scenario = ({ nexii, campaign, dispatch }) => {
  const scenario = campaign.details.scenarios[campaign.currentScenario - 1];

  return (
    <div className="scenario">
      <h1>
        {campaign.gameStatus === "lost" && <span>You Lost </span>}
        {campaign.gameStatus === "won" && <span>You Won </span>}Scenario{" "}
        {scenario.code}: {scenario.name}
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
            {nexii.map((nexus) => {
              return <Nexus key={nexus.id} nexus={nexus} round={0} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Scenario;
