// Check if we have exactly 2 arguments
if (process.argv.length !== 4) 
{
    console.log("Please use exactly 2 arguments when calling the script as: npm run script <number1> <number2>");
    process.exit(1); // Exit with an error code
}

// Converts string arguments as numbers
const number1 = parseFloat(process.argv[2]);
const number2 = parseFloat(process.argv[3]);
  
// Check if the input is valid numbers
if (isNaN(number1) || isNaN(number2)) 
{
    console.error("Please provide valid numbers.");
    process.exit(1); // Exit with an error code
}
  
// Calculate the sum and displays it
const sum = number1 + number2;
console.log(`${number1} + ${number2} = ${sum}.`);