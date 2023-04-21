import { useReducer } from "react";
import "./App.css";
import Campaign from "./components/Campaign";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Round from "./components/Round";
import Scenario from "./components/Scenario";
import Session from "./components/Session";
import Setup from "./components/Setup";
import gameData from "./dataFiles/gameData";
import reducer from "./functions/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, gameData);
  const campaign = state.campaign;
  const gameStatus = state.campaign.gameStatus;

  //need a new component for init, a campaign chooser menu

  return (
    <div className="appContainer">
      <div className="navWrapper">
        <span className="title">
          <Navbar />
        </span>
        <span className="roundTrack">
          {gameStatus === "playing" && (
            <Round dispatch={dispatch} campaign={state.campaign} />
          )}
        </span>
      </div>
      <div>
        {gameStatus === "init" && <Setup state={state} dispatch={dispatch} />}
        {(gameStatus === "before" ||
          gameStatus === "won" ||
          gameStatus === "lost") && (
          <Scenario
            campaign={campaign}
            nexii={state.nexii}
            dispatch={dispatch}
          />
        )}
        {(gameStatus === "progressing" || gameStatus === "campaign") && (
          <Campaign campaign={campaign} dispatch={dispatch} />
        )}
        {gameStatus === "playing" && (
          <Session
            state={state}
            index={campaign.currentScenario - 1}
            dispatch={dispatch}
          />
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
