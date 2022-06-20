// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license !== 'none') {
    return `![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)`  
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `\n [License](#license)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    Project licensed by ${license}`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.credits}

## Contributing

${data.contributions}

## Tests
To run test, type:

${data.tests}
`;
}

module.exports = generateMarkdown;
