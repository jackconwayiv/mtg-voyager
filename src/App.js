import "./App.css";
import Navbar from "./Navbar";
import NewGame from "./NewGame";
import Sidebar from "./Sidebar";
import Title from "./Title";

function App() {
  return (
    <div>
      <Title />
      <Navbar />
      <div className="container">
        <div className="mainview">
          <NewGame />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
