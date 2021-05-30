//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.
const input = require('readline-sync');
let = proteinOptions = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let = grainOptions = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let = vegetableOptions = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let = drinkOptions = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let = dessertOptions = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let pantry = [proteinOptions, grainOptions, vegetableOptions, drinkOptions, dessertOptions];
let meal = [];
let numOfMeals = 0;
let error = false;

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
for (let i = 0; i < pantry.length; i++){
  
  for ( j = 0; j < pantry.length; j++) {
    meal[j] = pantry[j][i];
  }

console.log(`Your meals will be, Meal:#${i + 1} ${meal.join(", ")}`);
}

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
while (numOfMeals < 1 || numOfMeals > 6 || isNaN(numOfMeals) ) {
  
  if (error === true){
    numOfMeals = Number(input.question('Invalid input: Please select how many meals to assemble: '));
    error = true;
  } else {
        numOfMeals = Number(input.question('Please select how many meals to assemble:'));
        error = true;
  }
  
}

for (let i = 0; i <numOfMeals; i++){
  
  for ( j = 0; j < pantry.length; j++) {
    meal[j] = pantry[j][i];
   
  }
  console.log(`Your selected meals are, Meal:#${i + 1} ${meal.join(", ")}`);
  if (meal.includes("kale")){
      
    console.log(`Don’t worry, you can have double chocolate tomorrow.`)
  }


  
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”