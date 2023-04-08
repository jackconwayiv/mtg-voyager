//takes an array of set codes
//grabs the approprate arrays of objects representing those cardsets
//bundles them into a new destructured array called "deck"
//does this twice, once for enemy deck (threat deck) and once for trick deck
//returns the appropriate deck (for use in the component that needs it)

import {
  THSE01,
  THSE02,
  THSE03,
  THSE04,
  THSE05,
} from "../dataFiles/therosSets";

const threatDeck = [...THSE01, ...THSE02, ...THSE03, ...THSE04, ...THSE05];
const trickDeck = threatDeck;

export default threatDeck;

// module.exports = { threatDeck, trickDeck };
