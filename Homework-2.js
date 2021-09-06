const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

readline.question('Please enter a number ', (number) => {

    if (number.length != 5 || isNaN(number)) {
        throw 'Please enter a proper number with 5-digits!';

    }
    for (let index = 0; index < number.length; index++) {
        process.stdout.write(number[index] + "   ");
    }

    readline.close();
});