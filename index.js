// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');

// link to page where README is generated
const generateReadMe = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username please');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter your project name');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'What is the user story for this project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the user story requirements for your project');
                return false; 
            }
        }
    }, 
    {
        type: 'input',
        name: 'install',
        message: 'Please enter the steps required to install your project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter steps required to install your project');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how you use this app utilizing video capture',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter a usage description');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please add credits to who helped you with this project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter credits for your project');
                return false; 
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please enter what license your project should have',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Choose a license please');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Important information about contributing to the repo'
    },
    {
        type: 'input',
        name: 'tests', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'questions', 
        message: 'How can users reach out to you with questions?',
    }
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been created")
        }
    })
}; 

// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generateReadMe(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})

