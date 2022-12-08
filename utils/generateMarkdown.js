// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const template = `
# ${answers.projectName}
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description

${answers.description}

## Table of Contents

- [Credits](#credits)
- [Usage](#usage)
- [Installation](#installation)
- [Testing](#testing)
- [Contribution](#contribution)
- [License](#license)
- [Questions](#questions)



## Credits

This project is the original work of ${answers.userName}. More of my work is available on GitHub at [${answers.gitHub}](https://github.com/${answers.gitHub}).

## Usage

${answers.usageInfo}

## Installation

In order to install the package, please use the following command: 

\`\`\`
${answers.installCommand}
\`\`\`

## Testing

In order to run tests, please utilize the following command: 

\`\`\`
${answers.testCommand}
\`\`\`

## Contribution

${answers.contribution}

## License

This application is protected under the ${answers.license} license. For detailed licensing information please refer to the ${answers.license} license information.

## Questions

If you have any questions, you may contact me directly at: ${answers.email}.`;

  return template;
}

module.exports = generateMarkdown;
