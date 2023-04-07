import React, { useReducer } from "react";

function reducer(state, action) {
  const res = action.resource;
  const val = action.value;
  const newState = { ...state };
  const newResources = {
    ...newState.resources,
    [res]: state.resources[res] + val,
  };
  return { ...state, resources: newResources };
}

const Player = ({ player }) => {
  const [state, dispatch] = useReducer(reducer, player);

  const resourceSymbol = {
    life: "❤️",
    woe: "📈",
    weal: "📉",
    poison: "🐍",
    energy: "⚡",
    xp: "🏅",
    taxA: "💰",
    taxB: "💰",
  };

  const renderResources = (state, type) => {
    const presourceArray = Object.keys(state.resources);
    let resourceArray = [];
    switch (type) {
      case "left":
        resourceArray = [
          presourceArray[0],
          presourceArray[1],
          presourceArray[2],
        ];
        break;
      case "right":
        resourceArray = [
          presourceArray[3],
          presourceArray[4],
          presourceArray[5],
        ];
        break;
      case "taxA":
        resourceArray = [presourceArray[6]];
        break;
      case "taxB":
        resourceArray = [presourceArray[7]];
        break;
      default:
        break;
    }

    return resourceArray.map((res) => {
      return (
        <span className="resourceButtonContainer finePrint" key={res}>
          <button
            className="playerButton"
            disabled={state.resources[res] === 0}
            onClick={() => {
              dispatch({ resource: res, value: -1 });
            }}
          >
            -
          </button>
          {resourceSymbol[res]} {player && state.resources[res]}
          <button
            className="playerButton"
            onClick={() => {
              dispatch({ resource: res, value: 1 });
            }}
          >
            +
          </button>
        </span>
      );
    });
  };

  return (
    <div
      className={
        state.resources.life > 0
          ? "playercard " + player.faction + "player"
          : "playercard dead"
      }
    >
      <div className="innerPlayerCard">
        <div className="playerTitleColumn">
          <span className="playerName boldened">{player.name}</span>
        </div>
        <div className="resourceColumn">
          {player && player.resources && renderResources(state, "left")}
        </div>
        <div className="resourceColumn">
          {player && player.resources && renderResources(state, "right")}
        </div>
      </div>
      <div className="commanderDetails">
        <div className="commanderTax">
          <span className="finePrint">{player.commander}</span>
          {player && player.commander && renderResources(state, "taxA")}
        </div>
        <div className="commanderTax">
          <span className="finePrint">{player.commanderB || " "}</span>
          {player && player.commanderB && renderResources(state, "taxB")}
        </div>
      </div>
    </div>
  );
};
export default Player;
