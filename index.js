// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const promptUser =() => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project'
        },
        {
        type: 'input',
        name: 'installation',
        message: 'What do you need to install to make this project run correctly?'

        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'what license woulde you like to use?',
            choices: ['MIT','GNU', 'Apache']
        },
        {
            type: 'input',
            name: 'technologies',
            message: 'List any additional technologies used for this project'
        },

    ]);
};

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
promptUser();