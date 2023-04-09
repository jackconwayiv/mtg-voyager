import EnemyDeck from "./EnemyDeck";
import Nexus from "./Nexus";
import Player from "./Player";
import TrickDeck from "./TrickDeck";
const Session = ({ state, dispatch }) => {
  return (
    <div>
      <div className="playerContainer">
        {/* map this */}
        <Player
          key={state.players[0].id}
          player={state.players[0]}
          dispatch={dispatch}
        />
        <Player
          key={state.players[1].id}
          player={state.players[1]}
          dispatch={dispatch}
        />
        <Player
          key={state.players[2].id}
          player={state.players[2]}
          dispatch={dispatch}
        />
      </div>
      <div className="nexiiContainer">
        {/* map this */}
        <Nexus
          key={state.nexii[0].id}
          nexus={state.nexii[0]}
          index={0}
          round={state.campaign.round}
          dispatch={dispatch}
        />
        <Nexus
          key={state.nexii[1].id}
          nexus={state.nexii[1]}
          index={1}
          round={state.campaign.round}
          dispatch={dispatch}
        />
        <Nexus
          key={state.nexii[2].id}
          nexus={state.nexii[2]}
          index={2}
          round={state.campaign.round}
          dispatch={dispatch}
        />
      </div>
      <TrickDeck deck={state.trickDeck} dispatch={dispatch} />
      <EnemyDeck deck={state.threatDeck} dispatch={dispatch} />
    </div>
  );
};

export default Session;
