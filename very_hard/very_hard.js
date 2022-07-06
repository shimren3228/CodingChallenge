// program for a simple calculator
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter operator ( either +, -, * or / ): ', (answer1) => {
    rl.question('Please enter the first number : ', (answer2) => {
        rl.question('Please enter the second number : ', (answer3) => {
            let result;
            if (answer1 == '+') {
                result = answer3 + answer2;
            }
            else if (answer1 == '-') {
                result = answer2 - answer3;
            }
            else if (answer1 == '*') {
                result = answer2 * answer3;
            }
            else {
                result = answer2 / answer3;
            }
            console.log(`${answer2} ${answer1} ${answer3} = ${result}`);
            rl.close();
            
        });
    });  
});


// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);