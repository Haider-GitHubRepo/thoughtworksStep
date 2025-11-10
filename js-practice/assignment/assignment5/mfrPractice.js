const count = (result, color) => {
  result = color === 'blue' ? result + 1 : result;
  return result;
};

const countBlueRibbons = (count) => {
  const ribbons = ["red", "blue", "red", "green", "red", "blue"];
  return ribbons.reduce(count, 0);
};

console.log('No of Blue Ribbons =', countBlueRibbons(count));
