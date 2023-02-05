//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./utilities/genReadMe");
console.log(process.argv);


//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please Enter the title of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please Enter your project's description?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTable',
        message: 'Would you like a Table of Contents?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter your installation instructions?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any info on how to install!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please Enter your usage information?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any info for usage!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please enter the Liscence you used?',
        choices:  ["Apache", "GPL", "BSD 3-Clause", "MIT", "None"],
        default: ['MIT'],
    },
    {
        type: 'input',
        name: 'contribute',
        message: "Were you working alone? Please List contributions here.",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any contributions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter your test instructions?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter any how to test info!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: "Please Enter your GitHub Username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please Enter your email address?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("You have created a high quality read.me file, CONGRATULATIONS!");
      }
    });
  }
  
  //Create a function to initialize app
  const inquirerAnswers = inquirer.prompt(questions);
  
  function init() {
    inquirerAnswers.then((data) => {
      console.log("Generating.. README.. File ...");
      writeToFile("README.md", generateReadMe(data));
    });
  }
  
  // Function call to initialize app
  init();