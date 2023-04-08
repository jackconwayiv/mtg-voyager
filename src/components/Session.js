import nexiiData from "../dataFiles/nexiiData";
import playerData from "../dataFiles/playerData";
import EnemyDeck from "./EnemyDeck";
import Nexus from "./Nexus";
import Player from "./Player";
import TrickDeck from "./TrickDeck";
const Session = (props) => {
  const round = props.round;
  return (
    <div>
      <div className="playerContainer">
        <Player key={playerData[0].id} player={playerData[0]} />
        <Player key={playerData[1].id} player={playerData[1]} />
        <Player key={playerData[2].id} player={playerData[2]} />
      </div>
      <div className="nexiiContainer">
        <Nexus key={nexiiData[0].id} nexus={nexiiData[0]} round={round} />
        <Nexus key={nexiiData[1].id} nexus={nexiiData[1]} round={round} />
        <Nexus key={nexiiData[2].id} nexus={nexiiData[2]} round={round} />
        {/* <Nexus key={nexiiData[3].id} nexus={nexiiData[3]} round={round} /> */}
      </div>
      <TrickDeck />
      <EnemyDeck />
    </div>
  );
};

export default Session;
