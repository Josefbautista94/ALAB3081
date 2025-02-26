//Part 1 Math Problems

//We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
const num1 = 19; //Assigned the first odd number
const num2 = 23; //Assigned the second odd number
const num3 = 6; //Assigning the third number
const num4 = 2; //Assigning the fourth number

console.log(`Sum of all the 4 numbers : ${num1 + num2 + num3 + num4}`); // This gives me the sum of 50

//Check if all numbers are divisible by 5. Cache the result in a variable.

let allNumDivisibleBy5; //Created a variable to store the result I would get

//Created an if statement with && operators to check if ALL my numbers are divisible by 5
if (num1 % 5 === 0 && num2 % 5 === 0 && num3 % 5 === 0 && num4 % 5 === 0) {
  allNumDivisibleBy5 = true;
} else {
  allNumDivisibleBy5 = false;
}

console.log(`Are all the numbers divisible by 5 ? : ${allNumDivisibleBy5}`); // My results

//Check if the first number is larger than the last. Cache the result in a variable.

let isFirstBiggerThanLast = num1 > num4; //Created a variable to store the result of the comparison
console.log(
  `Is the first number larger than the last number ? : ${isFirstBiggerThanLast}`
); //My results

// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

let sub = num2 - num1; //subtracting num2 from num1 otherwise it woulda gave me a negative number
let mul = sub * num3; //multiplying the sub numbers with num3
let remainder = mul % num4; //using the multiplication result to find the remainder with moduel operator

console.log(
  `The remainder of dividing the result by the fourth number is : ${remainder}`
); //answer

// Change the way that isOver25 calculates so that we do
//  not need to use the NOT operator (!)
//  in other logic comparisons. Rename the variable as appropriate.

//OG
const isOver25 = num1 > 25 && num2 > 25 && num3 > 25 && num4 > 25;
console.log(`Are all over 25 ? : ${isOver25} `);
//my answer
const isUnder25 = num1 < 25 && num2 < 25 && num3 < 25 && num4 < 25;
console.log(`Are all under 25 ? : ${isUnder25} `);
