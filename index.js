// TODO: Include packages needed for this application
const { fstat } = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
//const fs = require('fs');


const promptUser =() => {
    return inquirer.prompt ([
        //project title
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your projects title?'
        },
        //Description of project
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project'
        },
        // Table of contents section
        {
            type: 'input',
            name: 'table',
            message: 'Please list the table of contents'
        },
        //Required installation
        {
        type: 'input',
        name: 'installation',
        message: 'What do you need to install to make this project run correctly?'

        },
        //usage section
        {
            type: 'input',
            name: 'usage',
            message: 'How will this project be used?'
        },
        //License option
        {
            type: 'checkbox',
            name: 'license',
            message: 'what license woulde you like to use?',
            choices: ['MIT','GNU', 'Apache']
        },
        //additional resources and mentions
        {
            type: 'input',
            name: 'additional resources',
            message: 'List any additional resources or contributors that assisted in this project.'
        },
        //Github Link
        {
            type: 'input',
            name: 'link',
            message: 'Enter your GitHub link here'
        }

    ]).then(answers => {
        return answers;
    });
};

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
const writeFile = (data) => {
    return new promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'You created a README!'
            });
        });
    });
};

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
function init() {
    promptUser()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(markdown => {
        return writeFile(markdown)
    })
    .catch(err => {
        console.log(err);
    });
};
promptUser() ;
