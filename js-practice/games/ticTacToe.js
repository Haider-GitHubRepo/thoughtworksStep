const WB = '⬜️';
const symbols = ['❌', '🟢'];
let TURN = 0;
const BOARD = ['⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️', '⬜️'];
const WIN_POSSIBILITIES = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function changeBoard(userInput) {
  const symbol = symbols[TURN % 2];
  BOARD[userInput] = symbol;
  console.clear();
  printBoard();
  return symbol;
}

function printBoard() {
  for (let index = 0; index < BOARD.length; index = index + 3) {
    const row = BOARD.slice(index, index + 3).join('');
    console.log(row);
  }
}

function isPosOccupied(userInput) {
  if (BOARD[userInput] === '⬜️') {
    return true;
  }
  return false;
}

function takeInput() {
  const userInput = parseInt(prompt('Enter position here:'));
  TURN++;
  return userInput - 1;
}

function checkWin(symbol) {
  for (let index = 0; index < WIN_POSSIBILITIES.length; index++) {
    const winCase = WIN_POSSIBILITIES[index];
    const pos1 = winCase[0] - 1;
    const pos2 = winCase[1] - 1;
    const pos3 = winCase[2] - 1;
    if (BOARD[pos1] === symbol && BOARD[pos2] === symbol && BOARD[pos3] === symbol) {
      return true;
    }
  }
  return false;
}

function displayDrawMessage() {
  console.log('Match Draw!!');
}

function displayWinMessage(symbol) {
  const message = `${symbol} win`;
  console.log(message);
}

function gameLoop() {
  for (let input = 1; input < 10; input++) {
    const userInput = takeInput();

    if (!isPosOccupied(userInput)) {
      console.log('Enter valid position !');
      input--;
      TURN--;
      continue;
    }
    const symbol = changeBoard(userInput);
    if (checkWin(symbol)) {
      displayWinMessage(symbol);
      return;
    }
  }
  displayDrawMessage();
}

function main() {
  printBoard();
  gameLoop();
}

main();
