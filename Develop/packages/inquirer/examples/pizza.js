/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

import inquirer from "../lib/inquirer.js";

console.log("Hi, welcome to Node Pizza");

const questions = [
  {
    type: "list",
    name: "size",
    message: "What pizza size do you want?",
    choices: ["Large", "Medium", "Small"],
    filter(val) {
      return val.toLowerCase();
    },
  },

  {
    type: "list",
    name: "beverage",
    message: "You also get a free 2L beverage",
    choices: ["Pepsi", "7up", "Coke"],
  },

  {
    type: "confirm",
    name: "utensils",
    message: "Do you want utensils with that?",
    default: false,
  },
  {
    type: "input",
    name: "name",
    message: "what's your name for delivery",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers));
  if (answers.size.toLowerCase() == "large")
    console.log("heres 1 dollar off for ordering large");
  if (!answers.utensils) console.log("thank you for saving the planet");
  console.log(`we will deliver soon to you, ${answers.name}`);
});
