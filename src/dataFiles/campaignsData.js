import scenarios from "./scenariosData";

const allCampaigns = [
  {
    id: 1,
    startedDate: "",
    title: "Beginner Campaign",
    finalScenario: 3,
    description: "A simple way to learn the rules.",
    scenarios: scenarios.camp1,
    victory:
      "Congratulations! You're on your way to becoming a Voyager MtG veteran!",
  },
  {
    id: 2,
    startedDate: "",
    title: "Intermediate Campaign",
    finalScenario: 3,
    description: "A more intermediate way to enjoy this game.",
    scenarios: scenarios.camp2,
    victory: "You done good. Be proud.",
  },
];

export default allCampaigns;
