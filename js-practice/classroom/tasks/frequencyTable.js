const vowels = ["a", "e", "i", "o", "u", "a", "e", "i"];
const numbers = [1, 2, 3, 1, 2, 3, 1, 5, 6, 2, 1, 3];

const frequency = (table, target) => {
  if (!(target in table)) {
    table[target] = 0;
  }
  table[target]++;
  return table;
};

const vowelFrequencyTable = vowels.reduce(frequency, {});
const numFrequencyTable = numbers.reduce(frequency, {});

console.log("\nVowels Frequency Table : ", vowelFrequencyTable);
console.log("\nNumbers Frequency Table : ", numFrequencyTable);
