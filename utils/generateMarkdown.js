// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  ${data.projectDescription}

  ## Table of Contents
  *[UserStory](#userStory)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Credits](#credits)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  
  ## User Story
  ${data.userStory}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

// this is used for importing Markdown in Index.js
module.exports = generateMarkdown;
