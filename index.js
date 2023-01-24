const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const fileName = 'README';
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What the user need to know about using this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What the user need to know about contributing to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to tests?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'address',
        message: 'What is your email address?',
    }

];

// function to write README file
function writeToFile(fileName, data) {
    
    const markdownText = generateMarkdown(data);
    


}

// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then(data => {      
            writeToFile (fileName, data)
            console.log('Thanks for using our README Generator');
        });
}




// function call to initialize program
init();
