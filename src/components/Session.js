import { useState } from "react";
import nexiiData from "../nexiiData";
import playerData from "../playerData";
import EnemyDeck from "./EnemyDeck";
import Nexus from "./Nexus";
import Player from "./Player";
import TrickDeck from "./TrickDeck";
const Session = () => {
  const [round, setRound] = useState(0);

  return (
    <div>
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
      <div className="playerContainer">
        <Player key={playerData[0].id} player={playerData[0]} />
        <Player key={playerData[1].id} player={playerData[1]} />
        <Player key={playerData[2].id} player={playerData[2]} />
      </div>
      <div className="nexiiContainer">
        <Nexus key={nexiiData[0].id} nexus={nexiiData[0]} round={round} />
        <Nexus key={nexiiData[1].id} nexus={nexiiData[1]} round={round} />
        <Nexus key={nexiiData[2].id} nexus={nexiiData[2]} round={round} />
        <Nexus key={nexiiData[3].id} nexus={nexiiData[3]} round={round} />
      </div>
      <EnemyDeck />
      <TrickDeck />
    </div>
  );
};

export default Session;
