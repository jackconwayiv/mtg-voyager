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

  const CheckIfReady = () => {
    return (
      state.players[0].name &&
      state.players[1].name &&
      state.players[2].name &&
      state.players[0].commander &&
      state.players[1].commander &&
      state.players[2].commander
    );
  };

  useEffect(() => {
    setSelectedCampaign(allCampaigns[0]);
  }, []);

  return (
    <div>
      <div>
        <h1>Create a New Voyager MtG Campaign</h1>
      </div>
      <div className="newPlayersContainer">
        <div>
          <p>
            <label htmlFor="campaign">Choose a campaign:</label>
            <select
              value={allCampaigns.indexOf(selectedCampaign)}
              onChange={(e) => handleCampaignChange(e)}
            >
              {allCampaigns.map((campaign) => {
                return (
                  <option
                    key={campaign.id}
                    value={allCampaigns.indexOf(campaign)}
                  >
                    {campaign.title}
                  </option>
                );
              })}
            </select>
          </p>
          <p>
            {selectedCampaign.description} Length:{" "}
            {selectedCampaign.finalScenario} scenarios.
          </p>
        </div>
        <div>
          <label htmlFor="numberOfPlayers">Choose number of players:</label>
          <select
            value={numberOfPlayers}
            disabled={true}
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
        </div>
      </div>
      <div className="newPlayersContainer">
        <div className="newPlayer">
          <NewPlayer
            key={1}
            dispatch={dispatch}
            players={state.players}
            playerNumber={1}
          />
        </div>
        {numberOfPlayers > 1 && (
          <div className="newPlayer">
            <NewPlayer
              key={2}
              dispatch={dispatch}
              players={state.players}
              playerNumber={2}
            />
          </div>
        )}
        {numberOfPlayers > 2 && (
          <div className="newPlayer">
            <NewPlayer
              key={3}
              dispatch={dispatch}
              players={state.players}
              playerNumber={3}
            />
          </div>
        )}
      </div>
      <div>
        {/* <p>
          This button is disabled if there aren't matching number of saved
          players and number of players in the game.
        </p> */}
        <button
          disabled={!CheckIfReady()}
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
    </div>
  );
};
export default Setup;
