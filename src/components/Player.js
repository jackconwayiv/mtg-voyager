import React from "react";

const reducer = (state, action) => {
  return 4;
};

const Player = ({ player }) => {
  const resourceSymbols = {
    life: "❤️",
    woe: "😥",
    weal: "💰",
    poison: "🐍",
    energy: "⚡",
    xp: "🏅",
  };

  const renderResources = (player) => {
    const resourceArray = Object.keys(player.resources);
    return resourceArray.map((res) => {
      return (
        <span>
          {resourceSymbols[res]} {player.resources[res]}
        </span>
      );
    });
  };

  return (
    <div className={"playercard " + player.faction}>
      <div className="innerPlayerCard">
        <div className="playerTitleColumn">
          <span className="playerName boldened">{player.name}</span>
        </div>
        <div className="resourceColumn">
          {/* {JSON.stringify(player)} */}
          {/* {player && player.resources && renderResources()} */}
          <span className="resourceButtonContainer finePrint">
            <button className="playerButton">-</button>❤️ 999
            <button className="playerButton">+</button>
          </span>
          <span className="resourceButtonContainer finePrint">
            <button className="playerButton">-</button>😥 0
            <button className="playerButton">+</button>
          </span>
          <span className="resourceButtonContainer finePrint">
            <button className="playerButton">-</button>💰 0
            <button className="playerButton">+</button>
          </span>
        </div>
        <div className="resourceColumn">
          <span className="resourceButtonContainer finePrint">
            <button className="playerButton">-</button>🐍 0
            <button className="playerButton">+</button>
          </span>
          <span className="resourceButtonContainer finePrint">
            <button className="playerButton">-</button>⚡ 0
            <button className="playerButton">+</button>
          </span>
          <span className="resourceButtonContainer finePrint">
            <button className="playerButton">-</button>🏅 0
            <button className="playerButton">+</button>
          </span>
        </div>
      </div>
      <div className="commanderDetails">
        <span className="finePrint">{player.commander}</span>
        <span className="finePrint">
          {player.sigSpell || player.partner || "---"}
        </span>
      </div>
    </div>
  );
};
export default Player;
