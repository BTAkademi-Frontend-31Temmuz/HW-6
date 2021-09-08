function calculateBMIValue(weight, height) {
    return bmi = weight / Math.pow(height, 2);
}

function calculateBMILevel(bmiValue) {
    if (bmiValue < 18.5) return "Underweight";
    else if (bmiValue < 24.9) return "Healthy Weight";
    else if (bmiValue < 29.9) return "Overweight";
    else return "Obesity";
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.clear();
readline.question('Please enter your weight in kilograms  ', (weight) => {
    readline.question('Please enter your height in meters  ', (height) => {
        const bmiValue = calculateBMIValue(weight, height);
        console.log("BMI value: " + bmiValue);
        console.log("BMI level: " + calculateBMILevel(bmiValue));
        readline.close();
    });
});