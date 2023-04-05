import React from "react";

const reducer = (state, action) => {
  return 4;
};

const Player = ({ player }) => {
  return (
    <div className="playercard">
      <div className="playerContainer">
        <span>{player.name.toUpperCase()}</span>
        <span>{player.commander}</span>
        <span>{player.sigSpell || player.partner || "---"}</span>
      </div>
      <div className="playerContainer">
        {/* map over these to keep it DRY baby */}
        <span>
          <button>-</button>❤️ 20<button>+</button>
        </span>
        <span>🐍 0</span>
        <span>😥 0</span>
        <span>💰 0</span>
        <span>⚡ 0</span>
        <span>🏅 0</span>
      </div>
    </div>
  );
};
export default Player;
