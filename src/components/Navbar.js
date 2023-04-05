import { React } from "react";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div>
        <h1>Voyager MtG</h1>
      </div>
      {/* <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/rules">
          <button>Rules</button>
        </Link>{" "}
        <Link to="/about">
          <button>About</button>
        </Link>
      </div> */}
      <div>
        <img src="../W.svg" alt="white mana symbol" className="mana-symbol" />{" "}
        <img src="../U.svg" alt="blue mana symbol" className="mana-symbol" />{" "}
        <img src="../B.svg" alt="black mana symbol" className="mana-symbol" />{" "}
        <img src="../R.svg" alt="red mana symbol" className="mana-symbol" />{" "}
        <img src="../G.svg" alt="green mana symbol" className="mana-symbol" />{" "}
      </div>
    </div>
  );
};

export default Navbar;
