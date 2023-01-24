// function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
${data.description}

## Table of Contents 
      - [Description](#description) 
      * - [Installation](#installation) 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions

##  Installation 
${data.installation}
##  Usage 
${data.usage}
##  License 
${data.license}
##  Contributing 
${data.contributing}
##  Tests 
${data.tests}
##  Questions
[Author GitHub ](${data.username})
[Author email address ](${data.address})


 `;
}

module.exports = generateMarkdown;
