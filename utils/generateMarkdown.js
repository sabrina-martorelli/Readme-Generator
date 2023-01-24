
const generateLicense = require("./generateLicense");

// function to generate markdown for README
function generateMarkdown(data) {
  
const license = generateLicense(data.license, data.username);

return `# ${data.title}
${license[0]}

## Description
${data.description}

## Table of Contents   
  - [Description](#description) 
  - [Installation](#installation) 
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

##  Installation 

     - ${data.installation}

##  Usage 
${data.usage}
##  License 
${license[1]}
##  Contributing 
${data.contributing}
##  Tests 

    - ${data.tests}

##  Questions
 My GitHub profile is: [${data.username} ](${data.username}) .Please follow.\n
 Additional questions? Please contact me [${data.address} ](${data.address}).
`;
}

module.exports = generateMarkdown;
