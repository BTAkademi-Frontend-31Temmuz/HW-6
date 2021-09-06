const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();

readline.question('Please enter three different numbers ', (inputs) => {
    const numbers = inputs.split(" ");
    if (numbers.length != 3) {
        throw 'Please enter three proper numbers!';

    }

    console.log("Sum: " + sum(numbers));
    console.log("Average: " + average(numbers));
    console.log("Product: " + product(numbers));
    console.log("Minimum number: " + minimum(numbers));
    console.log("Maximum number: " + maximum(numbers));

    readline.close();
});

function sum(numbers) {
    return numbers.reduce((number1, number2) => parseInt(number1) + parseInt(number2));
}

function average(numbers) {
    //return Math.floor(numbers.reduce((number1, number2) => parseInt(number1) + parseInt(number2)) / numbers.length);
    return Math.average(numbers);
}

function product(numbers) {
    return numbers.reduce((number1, number2) => parseInt(number1) * parseInt(number2));
}

function minimum(numbers) {
    return Math.min(...numbers);
}

function maximum(numbers) {
    return Math.max(...numbers);
}