import React from "react";
const Round = (props) => {
  const round = props.round;
  const dispatch = props.dispatch;
  const gameStatus = props.gameStatus;
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
        {gameStatus === "playing" && (
          <button
            onClick={() => {
              dispatch({ type: "gameStatus", value: "won" });
            }}
          >
            Win!
          </button>
        )}
      </span>
    </div>
  );
};

export default Round;
