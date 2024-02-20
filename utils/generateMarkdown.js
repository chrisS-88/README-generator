// bring in generate badge function
const { generateLicenseBadge } = require("./generateBadges");

// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = generateLicenseBadge(data.license);
  return `
  # ${data.projectTitle}
  ${licenseBadge}

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
  This project is covered under the ${data.license} license.

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
