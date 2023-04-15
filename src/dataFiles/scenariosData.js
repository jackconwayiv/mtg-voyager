//setup turns (affected by nexus)
//starting hand size (affected by nexus)
//round #
//defend for x rounds
//victory objective

//also need to give nexii codes to map to scenarios
//scenario location

//loss text

//scenario reward
//rules reminders... life totals and poison counters persist, life totals reset

const allScenarios = {
  camp1: [
    {
      id: 1,
      code: "1-1",
      name: "The Farmlands",
      nexii: [1, 2, 3],
      faction: "white",
      objective: "Defeat All Nexii",
      beforeText:
        "The farmlands are under attack! Kill the monsters and save the farmhands!",
      wonText:
        "The farmers are eternally grateful and bake you a pumpkin pie in thanks!",
      completedDate: 0,
      attempts: 0,
    },
    {
      id: 2,
      code: "1-2",
      name: "The Forest",
      nexii: [4, 5, 6],
      faction: "green",
      objective: "Defeat All Nexii",
      beforeText:
        "A deep dark forest sprawls out between you and the cave which is the source of tee monsters.",
      wonText:
        "After a grueling journey, you've finally reached your destination -- the mouth of the monsters' lair!",
      completedDate: 0,
      attempts: 0,
    },
    {
      id: 3,
      code: "1-3",
      name: "The Cave",
      nexii: [2, 4, 6],
      faction: "black",
      objective: "Defeat All Nexii",
      beforeText: "The cave is spooky. Are you sure you're up to the task?",
      wonText:
        "Well done! You've rid the cavern of monsters! The locals will be safe at last!",
      completedDate: 0,
      attempts: 0,
    },
  ],
  camp2: [
    {
      id: 1,
      code: "2-1",
      name: "The Village",
      nexii: [1, 3, 5],
      faction: "white",
      objective: "Defeat All Nexii",
      beforeText:
        "The farmlands are under attack! Kill the monsters and save the farmhands!",
      wonText:
        "The farmers are eternally grateful and bake you a pumpkin pie in thanks!",
      completedDate: 0,
      attempts: 0,
    },
    {
      id: 2,
      code: "2-2",
      name: "The Outskirts",
      nexii: [1, 2, 5],
      faction: "red",
      objective: "Defeat All Nexii",
      beforeText:
        "A deep dark forest sprawls out between you and the cave which is the source of tee monsters.",
      wonText:
        "After a grueling journey, you've finally reached your destination -- the mouth of the monsters' lair!",
      completedDate: 0,
      attempts: 0,
    },
    {
      id: 3,
      code: "2-3",
      name: "The Wilds",
      nexii: [3, 4, 6],
      faction: "green",
      objective: "Defeat All Nexii",
      beforeText: "The cave is spooky. Are you sure you're up to the task?",
      wonText:
        "Well done! You've rid the cavern of monsters! The locals will be safe at last!",
      completedDate: 0,
      attempts: 0,
    },
  ],
};
export default allScenarios;
