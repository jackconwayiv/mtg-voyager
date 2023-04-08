import React from "react";
const Campaign = ({ gameStatus, setGameStatus }) => {
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
      <button
        onClick={() => {
          setGameStatus("before");
        }}
      >
        Start Scenario
      </button>
      <button
        onClick={() => {
          setGameStatus("before");
        }}
      >
        Advance to Next Scenario
      </button>
      <button
        onClick={() => {
          setGameStatus("before");
        }}
      >
        Conclude & Archive Scenario
      </button>
    </div>
  );
};
export default Campaign;
