const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please add a brief description of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please add usage instructions.",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to add?",
    choices: ["N/A", "MIT", "Apache 2.0", "GNU v3.0", "Boost 1.0", "GNU v2.0"],
  },
  {
    type: "input",
    name: "contribition",
    message: "Please enter contribution guidelines for your project",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter a tests guide for your project",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  inquirer.prompt(questions);
}

// function call to initialize program
init();
