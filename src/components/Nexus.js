import React from "react";

const Nexus = ({ nexus, round, dispatch }) => {
  const life = nexus.life;

  return (
    <div
      className={"nexuscard " + (life > 0 ? nexus.faction : "dead")}
      key={nexus.name}
    >
      <div className="nexusTitle">
        <span className="nexusName boldened">{nexus.name}</span>
        <span>{nexus.colors}</span>
      </div>

      <div className="lifeButtons">
        <button
          disabled={life < 5}
          onClick={() => {
            dispatch({
              type: "nexusLife",
              id: nexus.id,
              value: -5,
            });
          }}
        >
          -5
        </button>
        <button
          disabled={life < 1}
          onClick={() => {
            dispatch({
              type: "nexusLife",
              id: nexus.id,
              value: -1,
            });
          }}
        >
          -1
        </button>
        <span className="boldened">❤️ {life}</span>
        <button
          onClick={() => {
            dispatch({
              type: "nexusLife",
              id: nexus.id,
              value: 1,
            });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "nexusLife",
              id: nexus.id,
              value: 5,
            });
          }}
        >
          +5
        </button>
      </div>
      <div className="nexusText">
        {round === 0 && nexus.setup && <p>🏁 {nexus.setup}</p>}
        {life > 0 && round > 0 && nexus.rules && <p>⏳ {nexus.rules}</p>}
        {life > 0 &&
          round > 0 &&
          nexus.enraged &&
          nexus.enraged.life >= life && <p>💢 {nexus.enraged.text}</p>}
        {life > 0 &&
          nexus.intensifications &&
          round >= nexus.intensifications.round && (
            <p>💥 {nexus.intensifications.text}</p>
          )}
        {life === 0 && round > 0 && nexus.death && <p>☠️ {nexus.death}</p>}
      </div>
    </div>
  );
};
export default Nexus;
