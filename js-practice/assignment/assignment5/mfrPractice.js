// Problem 1 : Festival Ribbon Count
const count = (result, color) => {
  result = color === 'blue' ? result + 1 : result;
  return result;
};

const countBlueRibbons = (count) => {
  const ribbons = ["red", "blue", "red", "green", "red", "blue"];
  return ribbons.reduce(count, 0);
};

console.log('\nNo of Blue Ribbons =', countBlueRibbons(count));

// Problem 2 : Stargazing Log
const unique = (accumulator, element) => {
  if (!accumulator.includes(element)) {
    accumulator.push(element);
  }
  return accumulator;
};

const observations = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
console.log('\nConstellations spotted =', observations.flatMap(x => x).reduce(unique, []));

// Problem 3 : Birdwatching Duplicate Removal
const birdSpecies = ["sparrow", "crow", "sparrow", "eagle", "crow"];
console.log('\nSpecies seen are :', birdSpecies.reduce(unique, []));

// Problem 4 : Classroom Attendance Check
const students = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
console.log('\nDistinct Students :', students.flatMap(x => x).reduce(unique, []));

// Problem 5 : Candy Jar Stocking
const countCandies = (result, element) => {
  result += element;
  return result;
};

const candyLogs = [[5, 3], [2], [4, 1]];
console.log('\nTotal candies = ', candyLogs.flatMap(x => x).reduce(countCandies, 0));


