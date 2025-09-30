function printMessage(message) {
  console.log(message, "\n");
}

function composeMessage(word, expected, actual) {
  const emoji = expected === actual ? '✅' : '❌';
  let message = emoji + " Word is '" + word;
  message += "' Splits of Word is '" + actual;
  message += "' Expected '" + expected + "'";

  return message;
}

function isVowel(char) {
  const isA = char === 'a';
  const isE = char === 'e';
  const isI = char === 'i';
  const isO = char === 'o';
  const isU = char === 'u';

  return isA || isE || isI || isO || isU;
}

function removeUsedChar(word, position) {
  let changedWord = "";
  for (let index = 0; index < word.length; index++) {
    if (index !== position) {
      changedWord = changedWord + word[index];
    }
  }

  return changedWord;
}

function findVowel(word, start) {

  for (let index = start; index < word.length; index++) {
    if (isVowel(word[index])) {
      return index;
    }
  }

  return -1;
}

function findConsonant(word, start) {

  for (let index = start; index < word.length; index++) {
    if (!isVowel(word[index])) {
      return index;
    }
  }

  return -1;
}

function splitWord(word) {
  let string = word;
  let index = 0;
  let splittedWord = string[index];
  let lastChar = string[index];
  string = removeUsedChar(string, index);

  while (string !== "") {
    const isCharVowel = isVowel(lastChar);
    index = isCharVowel ? findConsonant(string, index) : findVowel(string, index);

    if (index !== -1) {
      lastChar = string[index];
      splittedWord = splittedWord + lastChar;
      string = removeUsedChar(string, index);
    }

    if (index === -1) {
      splittedWord = splittedWord + ",";
      index = 0;
      lastChar = string[index];
      splittedWord = splittedWord + lastChar;
      string = removeUsedChar(string, index);
    }
  }

  return splittedWord;
}

function testSplitWord(word, expected) {
  const actual = splitWord(word);
  const message = composeMessage(word, expected, actual);
  printMessage(message);
}

function main() {
  console.log("");
  testSplitWord("apple", "ape,p,l");
  testSplitWord("aaabbbaaa", "aba,aba,aba");
  testSplitWord("aaabbb", "ab,ab,ab");
  testSplitWord("there", "tere,h");
  testSplitWord("hello", "helo,l");
  testSplitWord("abyss", "ab,y,s,s");
  testSplitWord("this", "tis,h");
  testSplitWord("aauubbcc", "ab,ab,uc,uc");
}

main();
