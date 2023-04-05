import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NewGame from "./components/NewGame";
import Rules from "./components/Rules";
import Session from "./components/Session";
import TrickDeck from "./components/TrickDeck";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <div></div>
          <div className="mainview">
            <Routes>
              <Route path="/" element={<Session />} />
              <Route path="/new" element={<NewGame />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <div className="sidebar">
            <TrickDeck />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
