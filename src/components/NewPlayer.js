import { useEffect, useState } from "react";

const NewPlayer = ({ dispatch, players, playerNumber }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerColor, setPlayerColor] = useState("");
  const [playerCmdr, setPlayerCmdr] = useState("");
  const [playerCmdrB, setPlayerCmdrB] = useState("");

  useEffect(() => {
    if (playerNumber === 1) setPlayerColor("red");
    if (playerNumber === 2) setPlayerColor("white");
    if (playerNumber === 3) setPlayerColor("blue");
  }, [playerNumber]);

  const handleClick = () => {
    const newPlayer = { playerName, playerColor, playerCmdr, playerCmdrB };
    dispatch({ type: "addPlayer", payload: { playerNumber, newPlayer } });
  };

  return (
    <div className={playerColor}>
      <p>red or green light for whether its saved or not...</p>
      <div
        className={
          playerName === players[playerNumber - 1].name &&
          playerColor === players[playerNumber - 1].faction &&
          playerCmdr === players[playerNumber - 1].commander &&
          playerCmdrB === players[playerNumber - 1].commanderB
            ? "green"
            : "red"
        }
      >
        STATUS CHECK
      </div>
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
      <button onClick={() => handleClick()}>Save Player</button>
    </div>
  );
};
export default NewPlayer;
