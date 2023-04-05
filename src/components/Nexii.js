import React, { useReducer } from "react";

function reducer(state, action) {
  const newState = [{ ...state[0] }, { ...state[1] }];
  console.log("reducer fired");
  switch (action.type) {
    case "increment":
      newState[action.index].life += action.value;
      break;
    case "decrement":
      newState[action.index].life -= action.value;
      break;
    default:
      break;
  }
  return newState;
}

const Nexii = ({ round }) => {
  const [state, dispatch] = useReducer(reducer, [
    {
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
    },
    {
      id: 2,
      name: "Baral",
      colors: "U",
      life: 20,
      setup: "During setup, each player starts with -1 card in hand.",
      rules:
        "On enemy upkeep, a random eligible player sacrifices a creature (or noncreature) permanent.",
      death:
        "When this Nexus is destroyed, all creatures in play get -3/-3 until end of turn.",
      intensifications: [{ round: 6, text: "Black creatures have wither." }],
    },
  ]);

  const renderIntensifications = (intensifications) => {
    return intensifications.map((rule) => {
      if (round >= rule.round) return rule.text;
    });
  };

  const renderNexus = (nexus) => {
    return (
      <div className="grixis nexuscard" key={nexus.name}>
        <div>
          {nexus.name.toUpperCase()} - ({nexus.colors} Nexus)
        </div>
        <div>
          <button
            onClick={() => {
              console.log("clicked");
              dispatch({ type: "decrement", index: nexus.id - 1, value: 5 });
            }}
          >
            -5
          </button>
          <button
            onClick={() => {
              dispatch({ type: "decrement", index: nexus.id - 1, value: 1 });
            }}
          >
            -1
          </button>
          <button
            onClick={() => {
              dispatch({ type: "increment", index: nexus.id - 1, value: 1 });
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              dispatch({ type: "increment", index: nexus.id - 1, value: 5 });
            }}
          >
            +5
          </button>
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
      <div className="nexiiContainer">
        {state.map((nexus) => renderNexus(nexus))}
      </div>
    </div>
  );
};
export default Nexii;
