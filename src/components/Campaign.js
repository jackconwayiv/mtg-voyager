import React from "react";
const Campaign = ({ campaign, dispatch }) => {
  const haveUnlocked = (id) => {
    return campaign.currentScenario >= id;
  };
  const atScenario = (id) => {
    return campaign.currentScenario === id;
  };

  return (
    <div>
      <div>
        <h1>{campaign.details.title}</h1>
        <p>{campaign.details.description}</p>
      </div>
      {/* should the following be pulled out into a component? */}
      <div className="scenarioCardContainer">
        {campaign.details.scenarios.map((scenario) => {
          return (
            <div
              key={scenario.id}
              className={"scenarioCard " + scenario.faction}
            >
              <p className="boldened scenarioName">
                [{scenario.code}] {haveUnlocked(scenario.id) && scenario.name}
              </p>
              <p>{haveUnlocked(scenario.id) && scenario.beforeText}</p>
              <p>
                {haveUnlocked(scenario.id) &&
                  `Objective: ${scenario.objective}`}
              </p>
              <p>
                <button
                  disabled={
                    !atScenario(scenario.id) ||
                    campaign.gameStatus !== "campaign"
                  }
                  onClick={() => {
                    dispatch({ type: "gameStatus", value: "before" });
                  }}
                >
                  Begin Scenario
                </button>
              </p>
            </div>
          );
        })}
      </div>
      {/* <p>Current Scenario: {JSON.stringify(campaign.currentScenario)}</p> */}
      {/* {campaign.gameStatus === "campaign" && <button>Start Scenario</button>} */}
      {campaign.gameStatus === "progressing" &&
        campaign.currentScenario < campaign.details.finalScenario && (
          <button
            onClick={() => {
              dispatch({ type: "nextScenario" });
            }}
          >
            Advance to Next Scenario
          </button>
        )}
      {campaign.gameStatus === "progressing" &&
        campaign.currentScenario === campaign.details.finalScenario && (
          <button
            onClick={() => {
              dispatch({ type: "archiveCampaign" });
            }}
          >
            Conclude & Archive Campaign
          </button>
        )}
    </div>
  );
};
export default Campaign;
