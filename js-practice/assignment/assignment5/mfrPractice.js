// Problem 1 : Festival Ribbon Count
const count = (result, color) => {
  result = color === 'blue' ? result + 1 : result;
  return result;
};

const countBlueRibbons = (count) => {
  const ribbons = ["red", "blue", "red", "green", "red", "blue"];
  return ribbons.reduce(count, 0);
};

console.log('No of Blue Ribbons =', countBlueRibbons(count));

// Problem 2 : Stargazing Log
const unique = (accumulator, element) => {
  if (!accumulator.includes(element)) {
    accumulator.push(element);
  }
  return accumulator;
}

const observations = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
console.log('Constellations spotted =', observations.flat().reduce(unique, []));
