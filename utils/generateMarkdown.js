
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const template = `
# ${answers.projectName}
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)


## Installation

In order to install the package, please use the following command: 

\`\`\`
${answers.installCommand}
\`\`\`

## Usage



## License

For licensing information please refer to the ${answers.license} information.

## Contribution

${answers.contribution}

## Tests

In order to run tests, please utilize the following command: 

\`\`\`
${answers.testCommand}
\`\`\`

## Questions

This project was created by ${answers.userName}. If you have any questions, you may contact me directly at: ${answers.email}. More of my work is available at [${answers.gitHub}](https://github.com/${answers.gitHub}).`;

  return template;
}

module.exports = generateMarkdown;
