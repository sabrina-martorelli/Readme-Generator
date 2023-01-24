const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {


    inquirer.prompt([
        {
          //  type: 'input',
            name: 'name',
            message : 'Please enter your name:',
        },
        {
          //  type: 'input',
            name: 'age',
            message : 'Please enter your age:',
        },
        {
            type: 'list',
              name: 'option',
              message : 'Please enter your type choice:',
              choices: ['one', 'two', 'three'],
          },
        {
          //  type: 'input',
            name: 'type',
            message : 'Please enter the command :',
        }
    
      ])
    
    
    .then(data => {
        if (true) {  //LOOK AT THIS
          
            generateMarkdown();
    
        }
    console.log('Thanks for using our api');
    
      });
    }


}

// function call to initialize program
init();
