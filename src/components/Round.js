import React from "react";
const Round = (props) => {
  const round = props.round;
  const setRound = props.setRound;
  return (
    <div className="roundContainer">
      <span>Setup turns:</span>
      <span>Starting hand size:</span>
      <span>Round: {round}</span>
      <span>
        <button
          disabled={round < 1}
          onClick={() => {
            setRound(round - 1);
          }}
        >
          Previous Round
        </button>
        <button
          onClick={() => {
            setRound(round + 1);
          }}
        >
          Next Round
        </button>
      </span>
    </div>
  );
};

export default Round;
