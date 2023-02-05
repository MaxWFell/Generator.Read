const licensesDetails = require('./liscence')

//Create function that will render license 
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesDetails.filter(licenseDetail => licenseDetail.name == license);
  return result[0].badge;
}

//Create a function that returns the license link
function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesDetails.filter(licenseDetail => licenseDetail.name == license);;
  return result[0].link;
}

//Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  }
  return `## License
  This application is licensed as a [${license}](${renderLicenseLink(license)}) license. Click the link for license terms.`;
}

//Create a function to generate markdown for README
function generateTable(data) {
  if (!data.confirmTable) {
    return;
  }
  if (data.license == "None") {
    return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
  }

  return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
}

function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ${generateTable(data)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributions 
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions 
  [Link to my GitHub Profile](https://github.com/${data.username})
  
  For any additional questions, concerns, or comments, you may email me at: 
  
  ${data.email}
`;
}

module.exports = generateMarkdown;
