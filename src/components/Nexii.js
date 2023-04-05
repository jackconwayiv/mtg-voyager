import React, { useEffect, useState } from "react";
const Nexii = ({ round }) => {
  const [nexii, setNexii] = useState([]);

  useEffect(() => {
    const nicolBolas = {
      id: 1,
      name: "Nicol Bolas",
      colors: "UBR",
      life: 20,
      setup: "During setup, each player starts with -1 card in hand.",
      rules:
        "On enemy upkeep, a random eligible player sacrifices a creature (or noncreature) permanent.",
      death:
        "When this Nexus is destroyed, all creatures in play get -3/-3 until end of turn.",
      intensifications: [{ round: 6, text: "Black creatures have wither." }],
    };
    setNexii([nicolBolas]);
  }, []);

  const renderIntensifications = (intensifications) => {
    return intensifications.map((rule) => {
      if (round >= rule.round) return rule.text;
    });
  };

  const changeNexusLife = (id, val) => {
    const newArray = [...nexii];
    const targetNexus = nexii.filter((nexus) => nexus.id === id)[0];
    const idOfTargetNexus = nexii.indexOf(targetNexus);
  };

  const renderNexus = (nexus) => {
    return (
      <div className="grixis nexuscard" key={nexus.name}>
        <div>
          {nexus.name.toUpperCase()} - ({nexus.colors} Nexus)
        </div>
        <div>
          <p>HEART | {nexus.life}</p>
          <p>SETUP | {nexus.setup}</p>
          <p>RULES | {nexus.rules}</p>
          <p>SKULL | {nexus.death}</p>
          <p>BOOMS | {renderIntensifications(nexus.intensifications)}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>{nexii.map((nexus) => renderNexus(nexus))}</div>
    </div>
  );
};
export default Nexii;
