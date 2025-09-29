function isEven(number) {
  return number % 2 === 0;
}

function divideByTwo(number) {
  return number / 2;
}

function multiply3Add1(number) {
  return 3 * number + 1;
}

function main() {
  let n = 999;
  
  while (n !== 1) {
    n = isEven(n) ? divideByTwo(n) : multiply3Add1(n);
    console.log(n);
  }
}

main();
