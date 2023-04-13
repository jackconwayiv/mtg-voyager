import React, { useEffect, useState } from "react";
import allCampaigns from "../dataFiles/campaignsData";
import NewPlayer from "./NewPlayer";
const Setup = ({ state, dispatch }) => {
  const [selectedCampaign, setSelectedCampaign] = useState({});
  const [numberOfPlayers, setNumberOfPlayers] = useState(3);
  //when does campaign get initialized?

  const handleCampaignChange = (e) => {
    setSelectedCampaign(allCampaigns[e.target.value]);
  };

  useEffect(() => {
    setSelectedCampaign(allCampaigns[0]);
  }, []);

  return (
    <div>
      <h1>Create a New Voyager MtG Campaign:</h1>
      <label htmlFor="campaign">Choose a campaign:</label>
      <select
        value={allCampaigns.indexOf(selectedCampaign)}
        onChange={(e) => handleCampaignChange(e)}
      >
        {allCampaigns.map((campaign) => {
          return (
            <option key={campaign.id} value={allCampaigns.indexOf(campaign)}>
              {campaign.title}
            </option>
          );
        })}
      </select>
      <label htmlFor="numberOfPlayers">Choose number of players:</label>
      <select
        value={numberOfPlayers}
        onChange={(e) => setNumberOfPlayers(e.target.value)}
      >
        <option key={1} value={1}>
          1
        </option>
        <option key={2} value={2}>
          2
        </option>
        <option key={3} value={3}>
          3
        </option>
      </select>
      <p>
        {selectedCampaign.description} Length: {selectedCampaign.finalScenario}{" "}
        scenarios.
      </p>

      {/* allow players to reuse previous player objects? player presets/preferences? */}
      <div>
        <div>
          <NewPlayer key={1} dispatch={dispatch} playerNumber={1} />
        </div>
        {numberOfPlayers > 1 && (
          <div>
            <NewPlayer key={2} dispatch={dispatch} playerNumber={2} />
          </div>
        )}
        {numberOfPlayers > 2 && (
          <div>
            <NewPlayer key={3} dispatch={dispatch} playerNumber={3} />
          </div>
        )}
        Number of Players{" "}
      </div>
      <div>
        <p>
          This button is disabled if there aren't matching number of saved
          players and number of players in the game.
        </p>
        <button
          onClick={() =>
            dispatch({
              type: "startNewCampaign",
              payload: { campaign: selectedCampaign },
            })
          }
        >
          New Campaign
        </button>
      </div>
      <div>Game settings: format, challenge level (easy, normal, hard)</div>
      <div>Select a Campaign, or Create a Random Campaign</div>
      <p>Timestamps campaign create date/time.</p>
      <p>
        Populates Campaign object in state: gamestatus, campaign subobject(?),
        scenarios, current and final scenario, starting life and poison, setup
        turns, round, won, and lost, wins and losses
      </p>
    </div>
  );
};
export default Setup;
