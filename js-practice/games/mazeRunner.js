//  0     1     2    3     4     5    6     7    8     9    10    11    12   13    14   15    16    17    18   19 
const MAZE = [
  ['🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫'],
  ['🟫', '🚀', '⬜', '⬜', '🟫', '⬜', '🟫', '⬜', '⬜', '⬜', '🟫', '⬜', '⬜', '🟫', '⬜', '⬜', '⬜', '⬜', '🟫', '🟫'],
  ['🟫', '🟫', '🟫', '⬜', '🟫', '⬜', '🟫', '🟫', '🟫', '⬜', '🟫', '⬜', '🟫', '🟫', '🟫', '⬜', '🟫', '🟫', '⬜', '🟫'],
  ['🟫', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '🟫', '⬜', '⬜', '⬜', '⬜', '⬜', '🟫', '⬜', '⬜', '⬜', '⬜', '🟫'],
  ['🟫', '⬜', '🟫', '🟫', '🟫', '🟫', '🟫', '⬜', '🟫', '🟫', '🟫', '🟫', '🟫', '⬜', '🟫', '🟫', '🟫', '⬜', '🟫', '🟫'],
  ['🟫', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '🟫'],
  ['🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '⬜', '🟫', '🟫', '🟫', '🟫', '🟫', '⬜', '🟫', '🟫', '🟫', '🟫', '🟫', '⬜', '🟫'],
  ['🟫', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '🟫', '⬜', '⬜', '⬜', '⬜', '⬜', '🟫', '⬜', '⬜', '⬜', '⬜', '⬜', '🟫'],
  ['🟫', '⬜', '🟫', '🟫', '🟫', '🟫', '⬜', '🟫', '⬜', '🟫', '🟫', '🟫', '⬜', '🟫', '⬜', '🟫', '🟫', '🟫', '⬜', '🟫'],
  ['🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🟫', '🏁', '🟫']
];

const WB = '⬜';
let CURR_POS = [1, 1];
let PREV_POS = [1, 1];
const WIN_POS = [9, 18];

function underline(heading, symbol = '-') {
  return heading + '\n' + symbol.repeat(heading.length);
}

function displayMaze() {
  console.clear();
  console.log('\n');

  for (let row = 0; row < MAZE.length; row++) {
    console.log('\t\t\t\t', MAZE[row].join(''));
  }
}

function changeUserPos() {
  MAZE[CURR_POS[0]][CURR_POS[1]] = '🚀';
}

function changeMaze() {
  MAZE[PREV_POS[0]][PREV_POS[1]] = '⬜';
}

function getPos(ch) {
  switch (ch) {
    case 'd':
      CURR_POS[1] = CURR_POS[1] + 1;
      return CURR_POS;
    case 'a':
      CURR_POS[1] = CURR_POS[1] - 1;
      return CURR_POS;
    case 'w':
      CURR_POS[0] = CURR_POS[0] - 1;
      return CURR_POS;
    case 's':
      CURR_POS[0] = CURR_POS[0] + 1;
      return CURR_POS;
  }
}

function isInputValid(input) {
  return input === 'w' || input === 's' || input === 'd' || input === 'a';
}

function getUserInput(player) {
  displayRules();
  const userInput = prompt(`${player}: Enter your move:`);
  if (isInputValid(userInput)) {
    return userInput;
  }
  console.log(`${player}: Please enter a valid move!!`);
  return getUserInput(player);
}

function isWin() {
  return CURR_POS[0] === WIN_POS[0] && CURR_POS[1] === WIN_POS[1];
}

function isPosInvalid(userInput) {
  CURR_POS = getPos(userInput);
  return MAZE[CURR_POS[0]][CURR_POS[1]] === '🟫'
}

function resetCurrPos() {
  CURR_POS[0] = PREV_POS[0];
  CURR_POS[1] = PREV_POS[1];
}

function resetPrevPos() {
  PREV_POS[0] = CURR_POS[0];
  PREV_POS[1] = CURR_POS[1];
}

function gameLoop(player) {
  while (true) {
    const userInput = getUserInput(player);
    if (isPosInvalid(userInput)) {
      resetCurrPos();
      console.clear();
      displayMaze();
      continue;
    }
    changeMaze();
    resetPrevPos();
    changeUserPos();
    console.clear();
    displayMaze();
    if (isWin()) {
      console.log(`You Win ${player}`);
      return;
    }
  }
}

function displayRules() {
  const rules = `
${underline('GAME: MAZE RUNNER')}
In order to change position press these keys
d : move right
a : move left
w : move up
s : move down
`
  console.log(rules);
}

function askPlayerName() {
  const playerName = prompt('Enter player\'s name here: ');
  return playerName;
}

function playMR() {
  displayMaze();
  displayRules();
  gameLoop(askPlayerName());
}

playMR();



