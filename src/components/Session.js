import { useState } from "react";
import Nexii from "./Nexii";
import PlayerStats from "./PlayerStats";
const Session = () => {
  const [round, setRound] = useState(1);

  const renderRound = () => {
    return <div>Round: {round}</div>;
  };

  return (
    <div>
      <PlayerStats />
      {renderRound()}
      <button
        onClick={() => {
          setRound(round + 1);
        }}
      >
        Next Round
      </button>
      <Nexii round={round} />
    </div>
  );
};

export default Session;
