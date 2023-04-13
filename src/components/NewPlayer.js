const NewPlayer = ({ dispatch, players, playerNumber }) => {
  const player = players[playerNumber - 1];
  const newPlayer = { ...player };

  const handleUpdate = () => {
    dispatch({
      type: "updatePlayer",
      payload: { playerNumber, newPlayer },
    });
  };

  return (
    <div className={player.faction}>
      <h2>Player {playerNumber}</h2>
      Name:
      <input
        value={player.name}
        onChange={(e) => {
          newPlayer.name = e.target.value;
          handleUpdate();
        }}
      ></input>
      Commander:
      <input
        value={player.commander}
        onChange={(e) => {
          newPlayer.commander = e.target.value;
          handleUpdate();
        }}
      ></input>
      Partner or Signature Spell (leave blank for none):
      <input
        value={player.commanderB}
        onChange={(e) => {
          newPlayer.commanderB = e.target.value;
          handleUpdate();
        }}
      ></input>
      Color:
      <select
        value={player.faction}
        onChange={(e) => {
          newPlayer.faction = e.target.value;
          handleUpdate(e);
        }}
      >
        <option value={"white"}>White</option>
        <option value={"blue"}>Blue</option>
        <option value={"black"}>Black</option>
        <option value={"red"}>Red</option>
        <option value={"green"}>Green</option>
        <option value={"colorless"}>Colorless</option>
      </select>
    </div>
  );
};
export default NewPlayer;
