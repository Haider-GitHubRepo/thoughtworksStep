const WORDS = [
  "love", "time", "work", "good", "make", "look", "give", "come", "take", "know",
  "life", "hand", "back", "play", "long", "help", "feel", "need", "want", "keep",
  "call", "mean", "show", "move", "turn", "hear", "read", "open", "stop", "find",
  "stay", "tell", "join", "like", "hope", "care", "wait", "stay", "lose", "pass",
  "rest", "live", "grow", "stay", "plan", "cost", "hold", "send", "sell", "lead",
  "rise", "drop", "save", "fail", "gain", "earn", "pull", "push", "stay", "walk",
  "talk", "cook", "bake", "jump", "move", "play", "ride", "draw", "read", "sing",
  "turn", "look", "fall", "lift", "stay", "work", "shop", "park", "rest", "move",
  "home", "room", "door", "seat", "book", "tree", "bird", "fish", "food", "rain",
  "wind", "fire", "star", "moon", "snow", "rock", "road", "city", "town", "hill"
];

let clues = [];

function underline(heading, symbol = '-') {
  return heading + '\n' + symbol.repeat(heading.length);
}

function randomNumber(end, start = 0) {
  return start + Math.round(Math.random() * (end - start));
}

function composeWinMessage(hiddenWord) {
  const message = `
Right Guess !
Actual Word is ${hiddenWord}.`
  return message;
}

function printLoseMessage(hiddenWord) {
  const message = `
You Lose !
Actual Word was ${hiddenWord}.`
  console.log(message);
}

function isWordMatched(hiddenWord, userInput) {
  if (hiddenWord === userInput) {
    const message = composeWinMessage(hiddenWord);
    console.log(message);
    return true;
  }
  else {
    return false;
  }
}

function matchLetters(hiddenWord, userInput) {
  const wordSize = hiddenWord.length;

  for (let index = 0; index < wordSize; index++) {
    if (userInput[index] === hiddenWord[index]) {
      clues.push('🟩');
      continue;
    }

    for (let subIndex = 0; subIndex < wordSize; subIndex++) {
      if (userInput[index] === hiddenWord[subIndex]) {
        clues.push('🟨');
      }
    }

    if (clues[index] === undefined) {
      clues.push('⬜');
    }
  }
}

function repeatTheGame() {
  let chances = 1;
  const hiddenWord = generateRandomWord();

  while (chances <= 5) {
    console.log('Attempt:', chances);
    console.log(hiddenWord);
    const userInput = getUserInput();
    console.log(userInput);
    if (isWordMatched(hiddenWord, userInput)) {
      return;
    }
    matchLetters(hiddenWord, userInput);
    console.log(clues);
    clues = [];
    chances++;
  }
  printLoseMessage(hiddenWord);
}

function getUserInput() {
  const userInput = prompt('Enter your guess word here:');
  return userInput;
}

function generateRandomWord() {
  const randomIndex = randomNumber(99);
  const randomWord = WORDS[randomIndex];

  return randomWord;
}

function displayTheRules() {

  const wordleRules = `
🎮 WORDLE GAME RULES 🎯

1️⃣ You have to guess a hidden 4-letter word.
2️⃣ You get 5 tries in total.
3️⃣ After each guess, you'll get feedback in colors:

   🟩 Green  → The letter is correct and in the right position.
   🟨 Yellow → The letter is correct but in the wrong position.
   ⬜ Gray   → The letter is not in the word at all.

4️⃣ Use the color clues to refine your next guesses.
5️⃣ You win if you guess the correct word within 6 tries!

Good luck and have fun! 🌟
`;

  console.log(wordleRules);
}

function playWordle() {
  displayTheRules();
  repeatTheGame();
}

playWordle();
