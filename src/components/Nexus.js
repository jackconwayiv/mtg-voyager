import React, { useState } from "react";

const Nexus = (props) => {
  const nexus = props.nexus;
  const round = props.round;

  const [life, setLife] = useState(nexus.life);

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
            setLife(life - 5);
          }}
        >
          -5
        </button>
        <button
          disabled={life < 1}
          onClick={() => {
            setLife(life - 1);
          }}
        >
          -1
        </button>
        <span className="boldened">❤️ {life}</span>
        <button
          onClick={() => {
            setLife(life + 1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setLife(life + 5);
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
