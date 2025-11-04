let numberOfTimes = 0;

function mean(data) {
  let sum = 0;
  for (let index = 0; index < data.length; index++) {
    sum += data[index];
  }

  return sum / data.length;
}

function median(data) {
  const sortedData = sort(data);

  const midValue = (sortedData.length - 1) / 2;
  const lowerMid = sortedData[Math.floor(midValue)];
  const upperMid = sortedData[Math.ceil(midValue)];

  return (lowerMid + upperMid) / 2;
}

function sort(data) {
  const sortedData = data;

  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      numberOfTimes++;
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function stdDeviation(sortedData) {
  const meanValue = mean(sortedData);
  let sumOfSquares = 0;

  for (let index = 0; index < sortedData.length; index++) {
    const difference = sortedData[index] - meanValue;
    sumOfSquares += Math.pow(difference, 2);
  }
  const variance = sumOfSquares / sortedData.length;

  return Math.sqrt(variance);
}

function showStats(scores, player) {
  console.log('\n', player, 'Scores in 2025 IPL')
  console.log(scores)
  // console.log('Sorted Data :', sortedData);
  // console.log(`Benchmark : \n\tMatches Played : ${scores.length} \n\tNo Of Times : ${numberOfTimes}` )
  console.log('Mean :', mean(scores));
  console.log('Median :', median(scores));
  const deviation = stdDeviation(scores);
  console.log('Standard Deviation :', deviation);
}

function main() {
  const virats_scores = [58, 21, 83, 42, 113, 70, 51, 27, 47, 33, 7, 92, 1, 12, 24];
  const rohits_scores = [0, 26, 49, 4, 6, 19, 36, 11, 8, 10, 15, 38, 105, 43];
  showStats(virats_scores, 'Virat Kohli');
  showStats(rohits_scores, 'Rohit Sharma');
}

main();
