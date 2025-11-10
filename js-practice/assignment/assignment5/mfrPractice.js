// Problem 1 : Festival Ribbon Count

const countTheElement = (result, element, eleToCheck) =>
  element === eleToCheck ? result + 1 : result;

const countBlue = (result, color) => {
  return countTheElement(result, color, "blue");
};

const countBlueRibbons = (count) => {
  const ribbons = ["red", "blue", "red", "green", "red", "blue"];
  return ribbons.reduce(count, 0);
};

console.log("\nNo of Blue Ribbons =", countBlueRibbons(countBlue));

// Problem 2 : Stargazing Log
const unique = (accumulator, element) => {
  if (!accumulator.includes(element)) {
    accumulator.push(element);
  }
  return accumulator;
};

const observations = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
const constellations = observations
  .flatMap((x) => x)
  .reduce(unique, []);
console.log("\nConstellations spotted =", constellations);

// Problem 3 : Birdwatching Duplicate Removal
const birdSpecies = ["sparrow", "crow", "sparrow", "eagle", "crow"];
console.log("\nSpecies seen are :", birdSpecies.reduce(unique, []));

// Problem 4 : Classroom Attendance Check
const students = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
const distinctStudents = students
  .flatMap((x) => x)
  .reduce(unique, []);
console.log("\nDistinct Students :", distinctStudents);

// Problem 5 : Candy Jar Stocking
const countCandies = (result, element) => {
  result += element;
  return result;
};

const candyLogs = [[5, 3], [2], [4, 1]];

const totalCandies = candyLogs
  .flatMap((x) => x)
  .reduce(countCandies, 0);

console.log("\nTotal candies = ", totalCandies);

// Problem 6 : Music Rehearsal Notes
const sequences = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];

const hasDo = sequences
  .flatMap((x) => x)
  .some((note) => note === "do");

console.log("\nDoes any group sang 'do' :", hasDo);

// Problem 7 : Weather Sensor Validation
const temperatures = [[22, 23], [25, 24, 22], [29]];

const isBelow32 = temperatures
  .flatMap((x) => x)
  .every((temp) => temp < 32);

console.log("\nIs every temperature below 32 :", isBelow32);

// Problem 8 : Fitness Tracker Miles

const runnerLogs = [[2, 3, 2], [4], [1, 1]];

const total = (result, element) => {
  return result += element;
};

const totalMiles = runnerLogs
  .flatMap((x) => x)
  .reduce(total, 0);

console.log("\nTotal miles =", totalMiles);

// Problem 9 : Art Workshop Color Variety
const paintColors = [["blue", "yellow"], ["yellow", "green"], ["blue"]];

const distinctColors = paintColors
  .flatMap((x) => x)
  .reduce(unique, []);

console.log("\nDistinct Colors :", distinctColors);

// Problem 10 : Library Return Counter
const books = ["Dune", "Dune", "Foundation", "Dune"];

const countDune = (result, book) => {
  return countTheElement(result, book, "Dune");
};

const times = books.reduce(countDune, 0);

console.log("\nNumber of times “Dune” was returned =", times);
