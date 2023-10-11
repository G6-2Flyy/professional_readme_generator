// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the project title: "
    },
    {
        type: "input",
        name: "description",
        message: "Enter the project description: "
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Enter the usage instructions: "
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for the project: ",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public 2.0", "MIT", "Apache", "None" ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers)
    })
}

// Function call to initialize app
init();
