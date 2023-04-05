import React, { useState } from "react";

const Nexus = ({ nexus, round }) => {
  const [life, setLife] = useState(nexus.life);

  const renderIntensifications = (intensifications) => {
    return intensifications.map((rule, i) => {
      if (round >= rule.round) {
        return <span key={i}>rule.text</span>;
      }
      return <span key={i}></span>;
    });
  };

  return (
    <div>
      <div
        className={"nexuscard " + (life > 0 ? nexus.faction : "dead")}
        key={nexus.name}
      >
        <div>
          {nexus.name.toUpperCase()} - ({nexus.colors} Nexus)
        </div>
        <div>
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
          <p>❤️ {life}</p>
          <p>🏁 {nexus.setup}</p>
          <p>⏳ {nexus.rules}</p>
          <p>☠️ {nexus.death}</p>
          <p>💥 {renderIntensifications(nexus.intensifications)}</p>
        </div>
      </div>
    </div>
  );
};
export default Nexus;
