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

// Part 2: Practical Math

// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.

// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?


//Budget = $175
//Price per gallon = $3
// Alr, if the total is 1500 miles and if you drive 55 miles per hour you get 30 miles per gallon
//1500/30 = 50 gallons
//50*3(price per gallon) = 150
//This is less than the budget so its doable.

//Again total miles is 1500 but this time at 60 miles per hour and you use up 28 miles per gallon.
//1500/28 = 53.57 gallons
//53.57*3 = 160.71
//This is also less than the budget so its doable.

//For the last one at 75 miles per hour and 23 miles per gallon
//1500/23 = 65.21 gallons
//65.21*3 = 195.63 
//This is more than the budget so its not doable.

// const totalMiles = 1500; //Total miles of the trip
