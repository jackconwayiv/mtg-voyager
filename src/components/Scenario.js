import React from "react";
import nexiiData from "../dataFiles/nexiiData";
import scenarios from "../dataFiles/scenarioData";
import Nexus from "./Nexus";
const scenario = scenarios[0];
const Scenario = ({ gameStatus, setGameStatus }) => {
  const scenarioNexii = nexiiData.filter((nexus) =>
    scenario.nexii.includes(nexus.id),
  );

  return (
    <div className="scenario">
      <h1>
        Scenario {scenario.code}: {scenario.name}
      </h1>
      {gameStatus === "before" && <p>{scenario.beforeText}</p>}
      {gameStatus === "before" && <p>OBJECTIVE: {scenario.objective}</p>}
      <p>Starting Life Totals</p>
      <p>Number of Setup Turns</p>
      {gameStatus === "won" && <p>{scenario.wonText}</p>}
      {gameStatus === "before" && (
        <button onClick={() => setGameStatus("playing")}>Begin!</button>
      )}
      {gameStatus === "won" && (
        <button onClick={() => setGameStatus("progressing")}>
          Back to Campaign
        </button>
      )}
      {gameStatus === "before" && (
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
