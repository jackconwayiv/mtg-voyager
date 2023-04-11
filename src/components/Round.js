import React from "react";
const Round = (props) => {
  const dispatch = props.dispatch;
  const campaign = props.campaign;
  const round = campaign.round;
  const playersTurn = campaign.playersTurn;

  // add buttons to advance through setup turns BEFORE the real rounds start
  // break rounds up into turns, player turn and enemy turn
  // enemy turn 1 happens before player turn 1? or are the setup turns player round 1?

  return (
    <div className="roundContainer">
      <span>
        {round === 0 && <>Number of Setup Turns?</>} Round: {round}
        {playersTurn && (
          <button
            onClick={() => {
              dispatch({ type: "toggleTurn" });
            }}
          >
            Finish Player Turn
          </button>
        )}
        {!playersTurn && (
          <button
            onClick={() => {
              dispatch({ type: "toggleTurn" });
            }}
          >
            Finish Enemy Turn
          </button>
        )}
      </span>
      <div>
        {round > 1 && (
          <button
            disabled={round < 2}
            onClick={() => {
              dispatch({ type: "round", value: -1 });
            }}
          >
            Previous Round
          </button>
        )}
        {round === 0 && (
          <button
            onClick={() => {
              dispatch({ type: "round", value: 1 });
            }}
          >
            Start Game
          </button>
        )}
        {round > 0 && (
          <button
            onClick={() => {
              dispatch({ type: "round", value: 1 });
            }}
          >
            Next Round
          </button>
        )}
        {campaign.won && (
          <button
            onClick={() => {
              dispatch({ type: "winScenario" });
            }}
          >
            Win!
          </button>
        )}
        {campaign.lost && (
          <button
            onClick={() => {
              dispatch({ type: "loseScenario" });
            }}
          >
            Lose!
          </button>
        )}
      </div>
    </div>
  );
};

export default Round;
