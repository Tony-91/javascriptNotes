let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = prompt("Are you early?: ").toLocaleLowerCase === "yes";
const age = prompt("Age: ");

if (registeredEarly && age >= 18) {
  raceNumber += 1000;
  console.log(`Your race is at 9:30, with a race number of ${raceNumber}.`);
} else if (age >= 18) {
  raceNumber += 1000;
  console.log(`Your race is at 11:00, with a race number of ${raceNumber}.`);
} else {
  console.log(`Your race is at 12:30, with a race number of ${raceNumber}.`);
}

/* write an HTML file that takes user input in web app */

// let userInput = prompt("Please enter a boolean value (true or false): ").toLowerCase();
// let userBoolean = (userInput === 'true');
// console.log(userBoolean);

// && !registeredEarly
// (age < 18)
