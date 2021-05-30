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
let mealString = "" // kyles way of doing this with a string

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
for (let i = 0; i < 6; i++){ // originally had 6 as proteinOptions.length
  
  let mealString = `Meal #${i + 1} `; // kyles way of doing this with a string

  for ( let j = 0; j < pantry.length; j++) { // could also use .push here
    meal[j] = pantry[j][i];
   mealString += ` ${pantry[j][i]}`; // kyles way of doing this with a string
  }

console.log(`Your meals will be, Meal:#${i + 1} ${meal.join(", ")}`);
console.log(mealString);  // kyles way of doing this with a string
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

//////// kyle's soloution
const mealNumString = input.question("Yo how many meals you wanna make?: ");
const mealNum = Number(mealNumString);

if (mealNum < 1 || mealNum > 6) {
  console.log("That's an error please only imput 1 - 6");
} else {
  let mealsCreated = 0;
  while (mealsCreated < mealNum) {
    const myMealArray = [proteinOptions[mealsCreated],grainOptions[mealsCreated],vegetableOptions[mealsCreated],drinkOptions[mealsCreated],dessertOptions[mealsCreated]];
    const myMeal = `Meal #${mealsCreated + 1}: ${proteinOptions[mealsCreated]}, ${grainOptions[mealsCreated]}, ${vegetableOptions[mealsCreated]}, ${drinkOptions[mealsCreated]}, ${dessertOptions[mealsCreated]},`;
    console.log(myMeal);

  if (myMealArray.includes("kale")){
    console.log(`Don’t worry, you can have double chocolate tomorrow.`)
  }

    mealsCreated = mealsCreated +1;
  }
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”