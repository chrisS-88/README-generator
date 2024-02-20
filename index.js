const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Please add a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please add any instalation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please add usage instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to add?",
    choices: ["None", "MIT", "Apache 2.0", "GPL v3.0", "Boost 1.0", "GPL v2.0"],
  },
  {
    type: "input",
    name: "contribition",
    message: "Please enter contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter a tests guide for your project:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your Email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your Github username:",
  },
];

// declare a new folder for README.md
const folderName = "generated";

// function to write README file
function writeToFile(fileName, data) {
  // Create the new folder
  fs.mkdir(folderName, (err) => {
    err ? console.error("error creating folder", err) : console.log(`New folder created\n Folder name: '${folderName}'\n`);
  });

  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log(`README successfully created within '${folderName}'`);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile(path.join(folderName, "README.md"), markdown);
  });
}

// function call to initialize program
init();
