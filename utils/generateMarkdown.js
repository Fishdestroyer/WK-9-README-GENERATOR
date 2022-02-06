const fs = require('fs');
 let licenseOptions = ['Apache', 'MIT', 'GNU'];//Could not get badge and license to display correctly so set to an array and called in the functions


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license === licenseOptions[0]){
      return "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license === licenseOptions[1]) {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === licenseOptions[2]) {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(license === licenseOptions[0]) {
    return '[${license: Apache-2.0}](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === licenseOptions[1]) {
    return '[${license: MIT}](https://opensource.org/licenses/MIT)'
  }else if (license === licenseOptions[2]) {
    return '[${license: GPL v3}](https://www.gnu.org/licenses/gpl-3.0)'
  }else{
    return ''
  };
   
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'Apache') {
    return '${license}(https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'MIT') {
    return '${license}(https://opensource.org/licenses/MIT)'
  }else if (license === 'GNU') {
    return '${license}(https://www.gnu.org/licenses/gpl-3.0)'
  }else{
    return ""
  };
   
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Description
${data.description}

  ## Table of contents
   *[Usage](#Usage)

   *[Installation](#installation)

   *[License](#License)

   *[Resources](#resources)

   *[GitHub](#github)

  ## Installation

  ${data.installation}

  ## Usage
  ${data.usage}

  ## license

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Additional resources and mentions

  ${data.resources}


  ## GitHub link with contact info

  ${data.github}

  

`;
}

module.exports = generateMarkdown;
