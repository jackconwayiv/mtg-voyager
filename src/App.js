import { useReducer } from "react";
import "./App.css";
import Campaign from "./components/Campaign";
import Navbar from "./components/Navbar";
import Round from "./components/Round";
import Scenario from "./components/Scenario";
import Session from "./components/Session";
import gameData from "./dataFiles/gameData";
import reducer from "./functions/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, gameData);
  const round = state.campaign.round;
  const campaign = state.campaign;
  const gameStatus = state.campaign.gameStatus;
  return (
    <>
      <div className="navWrapper">
        <span className="title">
          <Navbar />
        </span>
        <span className="roundTrack">
          {gameStatus === "playing" && (
            <Round round={round} dispatch={dispatch} gameStatus={gameStatus} />
          )}
        </span>
      </div>
      <div>
        {(gameStatus === "before" || gameStatus === "won") && (
          <Scenario campaign={campaign} dispatch={dispatch} />
        )}
        {(gameStatus === "progressing" || gameStatus === "init") && (
          <Campaign campaign={campaign} dispatch={dispatch} />
        )}
        {gameStatus === "playing" && (
          <Session state={state} dispatch={dispatch} />
        )}
      </div>
    </>
  );
}

export default App;
