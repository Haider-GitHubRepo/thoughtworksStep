const pwd = function () {
  console.log('pwd');
}

const ls = function () {
  console.log('ls');
}

const runCommand = function (inputCommand) {
  switch (inputCommand) {
    case 'pwd':
      return pwd();
    case 'ls':
      return ls();
  }
}

const checkCommand = function (inputCommand) {
  const commands = ['pwd', 'ls'];
  if (commands.includes(inputCommand)) {
    runCommand(inputCommand);
  }
  else {
    console.log('External command:');
  }
}

const main = function () {
  while (true) {
    const inputCommand = prompt('shell >');
    checkCommand(inputCommand);
  }
}

main();
