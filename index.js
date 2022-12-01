// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your first and last name?",
    name: "userName",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("What is your first and last name?");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("What is your GitHub username?");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("What is your email?");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What is the project title?",
    name: "projectName",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("What is the project title?");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "Please write a short description of how to use this file.",
    name: "usageInfo",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "Please write a short description of how to use this file."
        );
        return false;
      }
    },
  },
  {
    type: "list",
    message: "What is the license?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "Please write a brief description of the project:",
    name: "description",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please write a brief description of the project:");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What command should be used to install required dependencies?",
    name: "installCommand",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "What command should be used to install required dependencies?"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What command should be used to run tests?",
    name: "testCommand",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("What command should be used to run tests?");
        return false;
      }
    },
  },
  {
    type: "input",
    message: "What do people need to know about contributing to the repo?",
    name: "contribution",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "What do people need to know about contributing to the repo?"
        );
        return false;
      }
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  fs.writeFile("./Generated-README.md", generateMarkdown(answers), () => {
    console.log("Generating your README...");
  });
});
