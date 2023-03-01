// create variables to target the button and p elements

// need to ask user for total budget, accommodation costs, and length of trip (in days)
// this will be the function that is called when the user clicks the button

// to calculate daily budget: (total budget - accommodation costs) / length of trip (rounded to 2 decimal places)
// this will be the function that returns the string telling the user their daily budget

const button = document.querySelector("button");
const displayDailyBudget = document.querySelector(".daily-budget");

const collectInfo = () => {
    let totalBudget = Number(prompt("What is your total budget? (ex: 1200)"));
    let accommodationCosts = Number(prompt("What are your accommodation costs (ex: 525.80)"));
    let numDays = Number(prompt("How many days will your trip last?"));
    calculateDailyBudget(totalBudget, accommodationCosts, numDays);
}

const calculateDailyBudget = (totalBudget, accommodationCosts, numDays) => {
    let dailyBudget = ((totalBudget - accommodationCosts) / numDays ).toFixed(2);
    displayDailyBudget.innerText = `You have $${dailyBudget} per day for food and fun!`;
}

button.addEventListener("click", collectInfo);
