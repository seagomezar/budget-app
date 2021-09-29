let listOfGoals = [];

const dummyGoal1 = {
  id: 1,
  title: "Travel to Mexico",
  type: "travel",
  goal: 4300,
  percentageCompleted: 0
};

const dummyGoal2 = {
  id: 1,
  title: "Apartment in Miami",
  type: "real state",
  goal: 4300,
  percentageCompleted: 0
};

listOfGoals.push(dummyGoal1);
listOfGoals.push(dummyGoal2);

export function saveGoal(goal) {
  listOfGoals.push(goal);
}

export function getGoal(id) {
  return listOfGoals.find(e=>e.id = id);
}

export function getGoals() {
  return listOfGoals;
}

export function deleteGoal(id) {
  listOfGoals = listOfGoals.filter(e=>e.id !== id);
  return listOfGoals;
}

export function deleteGoal(id) {
  listOfGoals = listOfGoals.filter(e=>e.id !== id);
  return listOfGoals;
}

