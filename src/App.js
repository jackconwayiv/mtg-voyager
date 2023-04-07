import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Round from "./components/Round";
import Session from "./components/Session";

function App() {
  const [round, setRound] = useState(0);
  return (
    <>
      <div className="navWrapper">
        <span className="title">
          <Navbar />
        </span>
        <span className="roundTrack">
          <Round round={round} setRound={setRound} />
        </span>
      </div>
      <div>
        <Session round={round} />
      </div>
    </>
  );
}

export default App;
