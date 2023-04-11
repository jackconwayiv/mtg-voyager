import React, { useState } from "react";
import allCampaigns from "../dataFiles/campaignsData";
const Setup = ({ state, dispatch }) => {
  const [campaign, setCampaign] = useState({});
  return (
    <div>
      <select>
        {allCampaigns.map((campaign) => {
          return (
            <option value={"campaign"} type={"campaign"} key={campaign.id}>
              {campaign.title}
            </option>
          );
        })}
      </select>
      {/* how can you have a blank option leading the select? */}
      {/* make it so that when you select a campaign it changes state */}
      {/* render "about" text based on which campaign is actively selected */}
      {/* make three "createPlayer" components to put player objects into state?
      allow players to reuse previous player objects? player presets/preferences? */}
      <div>
        <button
          onClick={() =>
            dispatch({ type: "startNewCampaign", payload: { campaignId: 2 } })
          }
        >
          New Campaign
        </button>
      </div>
      <div>
        Number of Players | Name | Commander | Second Commander | Color ID
      </div>
      <p>how can you disallow a color that's used elsewhere?</p>
      <div>Game settings: format, challenge level (easy, normal, hard)</div>
      <div>Select a Campaign, or Create a Random Campaign</div>
      <p>Timestamps campaign create date/time.</p>
      <p>
        Populates Campaign object in state: gamestatus, campaign subobject(?),
        scenarios, current and final scenario, starting life and poison, setup
        turns, round, won, and lost
      </p>
      <div>{JSON.stringify(state)}</div>
    </div>
  );
};
export default Setup;
