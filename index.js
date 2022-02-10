// TODO: Include packages needed for this application
const fs  =  require('fs');
const inquirer = require('inquirer');
const promise = require('promise');// When npm install was ran and promise was declared, error kept throwing. No matter how/ what I done
// as you will see from code, changed to an async function. Installed promise and required before I changed to async.
//starter code was outdated on npm install, had to delete inquirer and install current version. 
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
//const questions = [];

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
            name: 'username',
            message: 'Enter your GitHub link here'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'

        },

    ]).then(answers => {
        return answers;
    });
};


// TODO: Create a function to write README file
function writeToFile(projectTitle, data) {
    fs.appendFile(`${projectTitle}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${projectTitle}.md has been generated.`))
}


// Function call to initialize app
async function init() {
    let answers = await promptUser();
    writeToFile((answers.projectTitle),(generateMarkdown(answers)));
}
init();
