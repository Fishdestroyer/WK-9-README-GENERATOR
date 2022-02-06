// TODO: Include packages needed for this application
const fs  = require('fs');
const inquirer = require('inquirer');
const promise = require('promise');
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
            type: 'list',
            name: 'license',
            message: 'what license woulde you like to use?',
            choices: ['Apache', 'MIT', 'GNU']
        },
        //additional resources and mentions
        {
            type: 'input',
            name: 'resources',
            message: 'List any additional resources or contributors that assisted in this project.'
        },
        //Github Link
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub link here'
        }

    ]).then(answers => {
        return answers;
    });
};

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
function writeToFile(projectTitle, data) {
    fs.appendFile(`${projectTitle}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${projectTitle}.md has been generated.`))
}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
async function init() {
    let answers = await promptUser();
    writeToFile((answers.projectTitle),(generateMarkdown(answers)));
}
init() ;
