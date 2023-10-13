const fs = require('fs');
// TODO: Include packages needed for this application
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown')

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
        choices: ["agpl-3.0", "gpl-3.0", "lgpl-3.0", "mpl-2.0", "mit", "apache-2.0", "none" ]
    },
    {
        type: "input",
        name: "contributions",
        message: "How to contribute: "
    },
    {
        type: "input",
        name: "tests",
        message: "How to run test? "
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username: "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: "
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (error)=> {
 if(error){
    console.log(error)
 } else {
    console.log('Successful!')
 }
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        var data = generateMarkdown(answers);
        writeToFile('./utils/generatedREADME.md', data)
        
    })
}

// Function call to initialize app
init();
