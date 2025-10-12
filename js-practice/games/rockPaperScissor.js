let USER_SCORE = 0;
let COMP_SCORE = 0;

function randomNumber(end, start = 1) {
  return start + Math.round(Math.random() * (end - start));
}

function underline(heading, symbol = '-') {
  return heading + '\n' + symbol.repeat(heading.length);
}

function increaseScore(choice) {
  switch (choice) {
    case 0:
      return console.log('Draw')
    case 1:
      return USER_SCORE++;
    case 2:
      return COMP_SCORE++;
  }
}

function declareResult() {
  if (USER_SCORE > COMP_SCORE) {
    console.log('Congrats You Win!!');
  }
  else {
    console.log('You Lose!!');
  }
}

function generateScore(possibleChoices, choices) {
  const indexLimit = possibleChoices.length;

  for (let index = 0; index < indexLimit; index++) {
    if (choices === possibleChoices[index]) {
      increaseScore(index % 3);
    }
  }
}

function displayScore() {
  console.log(`User Score: ${USER_SCORE}/3`);
  console.log(`Computer Score: ${COMP_SCORE}/3\n`);
}

function displayResult(result) {
  console.log('Result is ', result)
}

function repeatGame() {
  const possibleChoices = ['11', '12', '21', '22', '23', '32', '33', '31', '13'];

  while (USER_SCORE < 3 && COMP_SCORE < 3) {
    const choices = inputChoices();
    generateScore(possibleChoices, choices);
    displayScore();
  }
}

function displayChoice(input, user) {
  switch (input) {
    case 1:
      return console.log(`${user} choose ROCK`);
    case 2:
      return console.log(`${user} choose PAPER`);
    case 3:
      return console.log(`${user} choose SCISSOR`);
    default:
  }
}

function inputChoices() {
  let choices = ''
  const compChoice = randomNumber(3);
  choices = choices.concat(compChoice)
  const userInput = parseInt(prompt('Enter your choice here:'));
  displayChoice(userInput, 'You');
  displayChoice(compChoice, 'Computer');
  choices = choices.concat(userInput);
  
  return choices;
}

function displayRules() {

  const heading = 'Game: Rock-Paper-Scissor';
  console.log(underline(heading));
  let gameRules = 'This game will be played until someone wins the game 3 times.\n';
  gameRules += 'Enter 1 for ROCK\n';
  gameRules += 'Enter 2 for PAPER\n';
  gameRules += 'Enter 3 for SCISSOR\n';
  console.log(gameRules);

}

function playRPS() {
  displayRules();
  repeatGame();
  declareResult();
}


function askToPlay() {
  const heading = 'Game: Rock-Paper-Scissor';
  console.log(underline(heading));
  const wantToPlay = confirm('Do you want to play the game?');

  if (wantToPlay) {
    console.clear();
    playRPS();
  }
  else {
    console.log('Okay!');
    console.clear();
  }
}

askToPlay();
