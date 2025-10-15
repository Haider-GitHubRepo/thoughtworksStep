const SAL_BOARD = [
  '🐀', '⬜', '🪜', '⬜', '⬜', '🐍', '⬜', '⬜', '🪜', '⬜',
  '⬜', '⬜', '🐍', '⬜', '⬜', '⬜', '🪜', '⬜', '⬜', '⬜',
  '⬜', '🐍', '⬜', '⬜', '⬜', '🪜', '⬜', '⬜', '⬜', '⬜',
  '⬜', '⬜', '⬜', '🐍', '⬜', '⬜', '⬜', '⬜', '🪜', '⬜',
  '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '🐍', '⬜', '⬜', '⬜',
  '⬜', '🪜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '🐍', '⬜',
  '⬜', '⬜', '⬜', '⬜', '🪜', '⬜', '⬜', '⬜', '⬜', '⬜',
  '🐍', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '🪜', '⬜',
  '⬜', '⬜', '🐍', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜', '⬜',
  '⬜', '⬜', '⬜', '🪜', '⬜', '⬜', '⬜', '⬜', '⬜', '🧀'
];

let CURR_POS = 0;
let PREV_POS = 0;

function bgCyan(text) {
  return "\x1B[46m" + text + "\x1B[0m";
}

function randomNumber(end, start = 0) {
  return start + Math.round(Math.random() * (end - start));
}

function throwDice() {
  const diceFaces = ['⚀ - 1🎲', '⚁ - 2🎲', '⚂ - 3🎲', '⚃ - 4🎲', '⚄ - 5🎲', '⚅ - 6🎲'];
  const randomIndex = randomNumber(5);
  console.log('You Got', diceFaces[randomIndex]);

  return randomIndex;
}

function displayBoard() {
  for (let i = 0; i < SAL_BOARD.length; i += 10) {
    console.log('\t\t\t\t' + bgCyan(SAL_BOARD.slice(i, i + 10).join("")));
  }
}

function getUserInput() {
  prompt('Press enter to throw the dice');
  const steps = throwDice() + 1;

  return steps;
}

function changeBoard() {
  SAL_BOARD[CURR_POS] = '⬜';
}

function changeSymbol(nextPos, symbol) {
  SAL_BOARD[nextPos] = symbol;
}

function checkEmptyPos(nextPos) {
  if (SAL_BOARD[nextPos] === '⬜') {
    changeBoard();
    changeSymbol(nextPos, '🐀')
    CURR_POS = nextPos;
  }
}

function findNextLadder(nextPos) {
  let pos = nextPos + 1;
  let isLadderFound = true;

  while (isLadderFound && SAL_BOARD[pos] !== '🧀') {

    if (SAL_BOARD[pos] === '🪜') {
      changeBoard();
      changeSymbol(pos + 1, '🐀')
      CURR_POS = pos + 1;

      return;
    }
    pos++;

  }
}

function checkLadder(nextPos) {
  if (SAL_BOARD[nextPos] === '🪜') {
    findNextLadder(nextPos);
  }
}

function displayLoseMessage() {
  console.log('You are dead ⚰️');
}

function checkSnake(nextPos) {
  if (SAL_BOARD[nextPos] === '🐍') {
    changeBoard();
    changeSymbol(nextPos, '🪦')
    CURR_POS = nextPos;
    displayLoseMessage();

    return true;
  }
  return false;
}

function displayWinMessage() {
  console.log('You Win ! Have Fun-🧀')
}

function checkWin(nextPos) {
  if (SAL_BOARD[nextPos] === '🧀') {
    changeBoard();
    changeSymbol(nextPos, '🧞‍♂️');
    displayWinMessage();

    return true;
  }
}

function checkNextPostion(steps) {
  const nextPos = CURR_POS + steps;
  checkEmptyPos(nextPos);
  checkLadder(nextPos);

  if (checkSnake(nextPos)) {
    return true;
  }

  if (checkWin(nextPos)) {
    return true;
  }

}

function moveTheRat() {
  displayBoard();

  while (true) {
    const steps = getUserInput();

    if (checkNextPostion(steps)) {
      displayBoard();
      return;
    }

    prompt('Press Enter to move rat');
    console.clear();
    displayBoard();
  }
}

moveTheRat();
