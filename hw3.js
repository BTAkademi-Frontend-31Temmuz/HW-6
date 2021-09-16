
  //hw3
            const readline = require("readline");
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            
            rl.question("Enter first number ", (numberOne) => {
                rl.question("Enter second number", (numberTwo) => { 
                    rl.question("Enter third number ", (numberthree) => { 
                        const numbers = [];
                        numbers.push(Number(numberOne), Number(numberTwo), Number(numberthree));
                        console.log(numbers);


                        console.log("Sum: " + sum(numbers));
                        console.log("Average: " + average(numbers));
                        console.log("Minimum number: " + minimum(numbers));
                        console.log("Maximum number: " + maximum(numbers));
                        
                 
                    rl.close();
                });
            });
        });
         

        function sum(numbers){
           
            let sum = 0;

            for (let i = 0; i < numbers.length; i++) {
                 sum += numbers[i];
        }
            return sum;
        }


        function average(numbers){
            var sum = 0;
            var size = numbers.length;
            for (var i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum / size;
        }

        function minimum(numbers) {
            return Math.min(...numbers);
        }
        
        function maximum(numbers) {
            return Math.max(...numbers);
        }