const add = function (a, b) {
  return a + b;
}
const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}

const power = function (a, b) {
  return a ** b;
}

const calc = function (operation, op1, op2) {
  return operation(op1, op2);
}

function selectOperation(userInput) {
  switch (userInput) {
    case 'add':
      return add;
    case 'subtract':
      return subtract;
    case 'multiply':
      return multiply;
    case 'divide':
      return divide;
    case 'power':
      return power;
  }
}

const main = function () {
  const userInput = prompt('Enter operation to perform :');
  const operation = selectOperation(userInput);
  const operand1 = prompt('Enter 1st operand :');
  const operand2 = prompt('Enter 2nd operand :');
  console.log(calc(operation, operand1, operand2));
}

main();
