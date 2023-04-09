import React from "react";

const Player = ({ player, dispatch }) => {
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
  //() => dispatch({ type: "gameStatus", value: "playing" })

  //refactor resource button trays into a component that also takes a "scale" or "style" param, pull it out into separate file, use it in nexus and player

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
              dispatch({
                type: "playerResource",
                id: player.id,
                resource: res,
                value: -1,
              });
            }}
          >
            -
          </button>
          {resourceSymbol[res]} {player && state.resources[res]}
          <button
            className="playerButton"
            onClick={() => {
              dispatch({
                type: "playerResource",
                id: player.id,
                resource: res,
                value: 1,
              });
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
        player.resources.life > 0
          ? "playercard " + player.faction + "player"
          : "playercard dead"
      }
    >
      <div className="innerPlayerCard">
        <div className="playerTitleColumn">
          <span className="playerName boldened">{player.name}</span>
        </div>
        <div className="resourceColumn">
          {player && player.resources && renderResources(player, "left")}
        </div>
        <div className="resourceColumn">
          {player && player.resources && renderResources(player, "right")}
        </div>
      </div>
      <div className="commanderDetails">
        <div className="commanderTax">
          <span className="finePrint">{player.commander}</span>
          {player && player.commander && renderResources(player, "taxA")}
        </div>
        <div className="commanderTax">
          <span className="finePrint">{player.commanderB || " "}</span>
          {player && player.commanderB && renderResources(player, "taxB")}
        </div>
      </div>
    </div>
  );
};
export default Player;
