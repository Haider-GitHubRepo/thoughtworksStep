function underline(heading, symbol = '-') {
  return heading + '\n' + symbol.repeat(heading.length);
}

function generateNumberToGuess(range) {
  return Math.floor(Math.random() * range);
}

function giveHint(numberToGuess, enteredNumber) {
  if (enteredNumber > numberToGuess) {
    console.log('\t⚠️  Number to guess is smaller! \n');
  }
  else {
    console.log('\t⚠️  Number to guess is bigger! \n');
  }
}

function checkGuess(numberToGuess, enteredNumber) {
  if (numberToGuess === enteredNumber) {
    console.log('\n\t👍 Right Guess!');
    return false;
  }
  else {
    console.log('\n\t❌ Wrong Guess!');
    giveHint(numberToGuess, enteredNumber);
    return true;
  }
}

function playAgain() {
  const confirmation = confirm('\nWant to play again ❓');

  if (confirmation) {
    console.clear();
    playGuess();
  }
  console.clear();
  return;
}


function displayOptions() {
  const heading = 'Select Difficulty Level : Guessing Range';
  console.log(underline(heading));
  let options = '\t Enter: \'1\' for \'🐜 Small \' ';
  options += '\n\t Enter: \'2\' for \'🐘 Medium \' ';
  options += '\n\t Enter: \'3\' for \'🌋 Large \' ';
  console.log(options);
}

function chooseLevel() {
  displayOptions();
  const selectedLevel = parseInt(prompt('\nEnter your choice here:'));
  return selectedLevel
}

function selectRange(selectedLevel) {
  switch (selectedLevel) {
    case 1:
      return 10;
    case 2:
      return 100;
    case 3:
      return 10000;
    default:
      return 'Invalid Choice';
  }
}

function repeatGame(selectedRange) {
  let guess = 1;
  let isGameContinued = true;
  const numberToGuess = generateNumberToGuess(selectedRange);
  // console.log(numberToGuess);

  while (guess <= 3 && isGameContinued) {
    const enteredNumber = parseInt(prompt('\nGuess the number❔'));
    isGameContinued = checkGuess(numberToGuess, enteredNumber);
    guess++;
  }
}

function playGuess() {
  const selectedLevel = chooseLevel();
  const selectedRange = selectRange(selectedLevel);

  if (selectedRange === 'Invalid Choice') {
    console.log(selectedRange);
    return;
  }
  repeatGame(selectedRange);
  playAgain();
}

playGuess();
