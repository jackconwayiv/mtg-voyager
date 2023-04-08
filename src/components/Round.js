import React from "react";
const Round = (props) => {
  const round = props.round;
  const setRound = props.setRound;
  const gameStatus = props.gameStatus;
  const setGameStatus = props.setGameStatus;
  return (
    <div className="roundContainer">
      <span>Round: {round}</span>
      {round === 0 && <span>Number of Setup Turns?</span>}
      <span>
        <button
          disabled={round < 1 || gameStatus !== "playing"}
          onClick={() => {
            setRound(round - 1);
          }}
        >
          Previous Round
        </button>
        <button
          disabled={gameStatus !== "playing"}
          onClick={() => {
            setRound(round + 1);
          }}
        >
          Next Round
        </button>
        {gameStatus === "playing" && (
          <button onClick={() => setGameStatus("won")}>Win!</button>
        )}
      </span>
    </div>
  );
};

export default Round;
