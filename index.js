const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function runCalculator() {
  // Create the interface for user input
  const rl = readline.createInterface({ input, output });

  try {

    const input1 = await rl.question('Enter first number: ');
    const op = await rl.question('Enter operator (+, -, *, /): ');
    const input2 = await rl.question('Enter second number: ');
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);


    if (isNaN(num1) || isNaN(num2)) {
      console.error('Error: Please enter valid numbers.');
      return;
    }

    let result;


    if (op === '+') {
      result = num1 + num2;
    } else if (op === '-') {
      result = num1 - num2;
    } else if (op === '*') {
      result = num1 * num2;
    } else if (op === '/') {
      if (num2 === 0) {
        console.error('Error: Division by zero is not allowed.');
        return;
      }
      result = num1 / num2;
    } else {
      console.error('Error: Invalid operator. Use +, -, *, or /.');
      return;
    }


    console.log(`\nResult: ${result}`);

  } catch (err) {
    console.error('An error occurred:', err);
  } finally {

    rl.close();
  }
}

runCalculator();