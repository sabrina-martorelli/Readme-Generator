const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = 'README.md';

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description for your new project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['Apache 2.0 License', 'GNU GPL v3', 'MIT', 'Mozilla', 'None'],
    },
    {
        type: 'input',
        name: 'fullname',
        message: 'Please enter your full name to include on the license:',

    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for future contributors:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples on how to run tests:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'address',
        message: 'Please enter your email address:',
    }

];

// Function to write README file
function writeToFile(fileName, data) {

    // Calls function to generate markdown text 
    const markdownText = generateMarkdown(data);

    //Creates file using markdownText
    fs.writeFile(fileName, markdownText, (error) => {
        if (error) { return console.error(error.message); }
    });
}

// Function to initialize program
function init() {
    // Gets answers and calls to generate file
    inquirer.prompt(questions)
        .then(data => {
            writeToFile(fileName, data)
            console.log('Thanks for using our README Generator');
        });
}




// Function call to initialize program
init();
