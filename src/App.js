import { useState } from "react";
import "./App.css";
import Campaign from "./components/Campaign";
import Navbar from "./components/Navbar";
import Round from "./components/Round";
import Scenario from "./components/Scenario";
import Session from "./components/Session";
import gameData from "./dataFiles/gameData";

function App() {
  const [round, setRound] = useState(0);
  const [gameStatus, setGameStatus] = useState(gameData.campaign.gameState);
  return (
    <>
      <div className="navWrapper">
        <span className="title">
          <Navbar />
        </span>
        <span className="roundTrack">
          {gameStatus === "playing" && (
            <Round
              round={round}
              setRound={setRound}
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
            />
          )}
        </span>
      </div>
      <div>
        {(gameStatus === "before" || gameStatus === "won") && (
          <Scenario gameStatus={gameStatus} setGameStatus={setGameStatus} />
        )}
        {(gameStatus === "progressing" || gameStatus === "init") && (
          <Campaign gameStatus={gameStatus} setGameStatus={setGameStatus} />
        )}
        {gameStatus === "playing" && <Session round={round} />}
      </div>
      {JSON.stringify(gameData)}
    </>
  );
}

export default App;
