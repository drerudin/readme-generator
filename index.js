// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown')
const path = require('path')

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
        message: 'Describe what your project is all about.',
        name: 'description',
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
        message: 'How do you use your application?',
        name: 'usage',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    },
    {
        type: 'input',
        message: 'Who helped you with this project?',
        name: 'credits',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    },
    {
        type: 'list',
        message: 'What license did you use for this project?',
        name: 'license',
        choices: ['MIT', 'gpl-3.0', 'apache-2.0', 'bsl-1.0', 'none'],
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},

    },
    {
        type: 'checkbox',
        message: 'Did you want other programmers to contribute?',
        name: 'contributing',
        choices: ['yes', 'no'],
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},

    },
    {
        type: 'input',
        message: 'What tests if any did you use for this project?',
        name: 'tests',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},

    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    },
    {
        type: 'email',
        message: 'Add your email for contact.',
        name: 'email',
        validate: (value)=>{ if(value){return true} else {return 'Give me something here to continue!'}},
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName),data)
}

// TODO: Create a function to initialize app
// Starts the app and places the created file in the /dist folder
function init() {
    inquirer.prompt(questions).then((inquirerresponses)=>{
        writeToFile('/dist/readMe.md',generateMarkdown({
            ...inquirerresponses
        }))
    })
}

// Function call to initialize app
init();
