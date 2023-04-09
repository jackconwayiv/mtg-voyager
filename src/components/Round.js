import React from "react";
const Round = (props) => {
  const dispatch = props.dispatch;
  const campaign = props.campaign;
  const round = campaign.round;
  const gameStatus = campaign.gameStatus;
  const won = campaign.won;
  const lost = campaign.lost;

  return (
    <div className="roundContainer">
      <span>Round: {round}</span>
      {round === 0 && <span>Number of Setup Turns?</span>}
      <span>
        <button
          disabled={round < 1 || gameStatus !== "playing"}
          onClick={() => {
            dispatch({ type: "round", value: -1 });
          }}
        >
          Previous Round
        </button>
        <button
          disabled={gameStatus !== "playing"}
          onClick={() => {
            dispatch({ type: "round", value: 1 });
          }}
        >
          Next Round
        </button>
        {gameStatus === "playing" && won && (
          <button
            onClick={() => {
              dispatch({ type: "winScenario" });
            }}
          >
            Win!
          </button>
        )}
        {gameStatus === "playing" && lost && (
          <button
            onClick={() => {
              dispatch({ type: "loseScenario" });
            }}
          >
            Lose!
          </button>
        )}
      </span>
    </div>
  );
};

export default Round;
