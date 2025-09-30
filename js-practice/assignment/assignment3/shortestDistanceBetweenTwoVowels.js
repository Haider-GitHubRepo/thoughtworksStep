function printMessage(message){
  console.log(message,"\n");
}

function composeMessage(word,expected,actual){
  const emoji = expected === actual? '✅' : '❌';
  let message = emoji + "Minimum Vowel Distance in Word: '" + word;
  message +=  "' is '" + actual + "' Expected '" + expected + "'";

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

function vowelIndex(word, start) {

  for (let index = start; index < word.length; index++) {
    if (isVowel(word[index])) {
      return index;
    }
  }

  return -1;
}

function vowelCount(word){
  let count = 0;
  
  for(let index = 0; index < word.length; index++){
    if(isVowel(word[index])){
      count++;
    }
  }
  return count;
}

function vowelDistance(word){
  let currVowelIndex;
  let nextVowelIndex;
  let minDistance = Infinity;
  let difference;

  if (vowelCount(word)<=1){
    return -1;
  }

  for(let index = 0; index < word.length; index++){
    currVowelIndex = vowelIndex(word,index);
    nextVowelIndex = vowelIndex(word,currVowelIndex+1);

    if(currVowelIndex !== -1 && nextVowelIndex !== -1){
      difference = nextVowelIndex - currVowelIndex; 
    }

    minDistance = difference < minDistance? difference : minDistance;
  }

  return minDistance;
}

function testVowelDistance(word, expected) {
  const actual = vowelDistance(word);
  const message = composeMessage(word, expected, actual);
  printMessage(message);
}

function main() {
  console.log("");
  testVowelDistance("aba",2);
  testVowelDistance("aghei",1);
  testVowelDistance("hllo", -1);
  testVowelDistance("hello", 3);
  testVowelDistance("apple", 4);
  testVowelDistance("strength", -1);
  testVowelDistance("beautiful", 1);
  testVowelDistance("abyss", -1);
  testVowelDistance("aeiou",1);
  testVowelDistance("ghghghaghgheghghgh",5);
  testVowelDistance("hgghghghei",1);
}

main();
