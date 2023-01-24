const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const fileName = 'README.md';
// array of questions for user
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
        choices: ['Apache 2.0 License', 'GNU GPL v3', 'MIT','Mozilla','None'],
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

// function to write README file
function writeToFile(fileName, data) {
    
    const markdownText = generateMarkdown(data);

    //creates file using markdownText

   
    fs.writeFile(fileName, markdownText, (error) => {
  
        if (error)  {
         return  console.error(error.message);
        }
        
        });


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
