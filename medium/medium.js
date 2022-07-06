const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Write a sentece: `, sentence => {
    if (sentence === sentence.toUpperCase()) {
        console.log('You are shouting.')
    } else if (sentence === sentence.toLowerCase()) {
        console.log('You are whispering.')
    } else {
        console.log('You are talking normally.')
    }
    readline.close();
  });
  