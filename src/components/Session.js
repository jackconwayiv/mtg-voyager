import { useState } from "react";
import nexiiData from "../nexiiData";
import EnemyDeck from "./EnemyDeck";
import Nexus from "./Nexus";
import PlayerStats from "./PlayerStats";
import TrickDeck from "./TrickDeck";
const Session = () => {
  const [round, setRound] = useState(1);

  const renderRound = () => {
    return <div key={round}>Round: {round}</div>;
  };

  return (
    <div>
      <p>Setup turns:</p>
      <p>Starting hand size:</p>

      <PlayerStats />
      {renderRound()}
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
