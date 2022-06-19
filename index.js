// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'install',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'install',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    },
    {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'install',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
