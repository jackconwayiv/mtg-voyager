import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./About";
import "./App.css";
import EnemyStats from "./EnemyStats";
import Navbar from "./Navbar";
import NewGame from "./NewGame";
import Playing from "./Playing";
import Records from "./Records";
import Rules from "./Rules";
import Sidebar from "./Sidebar";
import Title from "./Title";

function App() {
  return (
    <div>
      <Router>
        <Title />
        <Navbar />
        <div className="container">
          <div></div>
          <div className="mainview">
            <Routes>
              <Route path="/" element={<EnemyStats />} />
              <Route path="/new" element={<NewGame />} />
              <Route path="/live" element={<Playing />} />
              <Route path="/records" element={<Records />} />
              <Route path="/rules" element={<Rules />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
