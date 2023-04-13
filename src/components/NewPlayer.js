import { useEffect, useState } from "react";

const NewPlayer = ({ dispatch, playerNumber }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerColor, setPlayerColor] = useState("");
  const [playerCmdr, setPlayerCmdr] = useState("");
  const [playerCmdrB, setPlayerCmdrB] = useState("");

  useEffect(() => {
    if (playerNumber === 1) setPlayerColor("red");
    if (playerNumber === 2) setPlayerColor("white");
    if (playerNumber === 3) setPlayerColor("blue");
  }, [playerNumber]);

  return (
    <div className={playerColor}>
      <p>red or green light for whether its saved or not...</p>
      <h2>Player {playerNumber}</h2>
      Name:
      <input
        value={playerName}
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      ></input>
      Commander:
      <input
        value={playerCmdr}
        onChange={(e) => {
          setPlayerCmdr(e.target.value);
        }}
      ></input>
      Partner or Signature Spell (leave blank for none):
      <input
        value={playerCmdrB}
        onChange={(e) => {
          setPlayerCmdrB(e.target.value);
        }}
      ></input>
      Color:
      <select
        value={playerColor}
        onChange={(e) => {
          setPlayerColor(e.target.value);
        }}
      >
        <option value={"white"}>White</option>
        <option value={"blue"}>Blue</option>
        <option value={"black"}>Black</option>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"colorless"}>Colorless</option>
      </select>
      <button>Save Player</button>
    </div>
  );
};
export default NewPlayer;
