// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contribition}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  You can check out my Github [HERE](https://github.com/${data.github}).

  If you have any questions, feel free to reach out to me [HERE](mailto:${data.email}).

  
  
  `;
}

module.exports = generateMarkdown;
