const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interface.question('What is your name?', (name) => {
  console.log(`Hello ${name}`);
  process.exit();
});
