import React, { useEffect, useState } from "react";
const PlayerStats = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers([{}, {}, {}]);
  }, []);
  return (
    <div className="playerContainer">
      <div className="playercard">
        PLAYER 1 name, cmd, spell, HP, poison, woe, weal, energy, xp
      </div>
      <div className="playercard">PLAYER 2</div>
      <div className="playercard">PLAYER 3</div>
    </div>
  );
};
export default PlayerStats;
