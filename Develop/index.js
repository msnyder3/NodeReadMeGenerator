
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

let entryReq = (input) => {
   return (!input || input.trim() === "" ? "This field is required. Please try again" : true);
};

let emailRegex = (input) => {
   return (input.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? true : "Please enter a valid email address");
};

const entryQuestions = [
   {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?", 
      validate: entryReq
   },    
   {
      type: "input",
      name: "firstName",
      message: "What is your first name?",    
      validate: entryReq
   }, 
   {
      type: "input",
      name: "lastName",
      message: "What is your last name?", 
      validate: entryReq
   },
   {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: emailRegex
   },
   {
      type: 'input',
      name: 'repository',
      message: 'Please enter the repository name on GitHub.',
      validate: entryReq
   }, 
   {
      type: "input",
      name: "title",
      message: "What is the title of this project.", 
      validate: entryReq
   },
   {
      type: "input",
      name: "description",
      message: "Write a description for this project.", 
      validate: entryReq
   },
   {
      type: "input",
      name: "installation",
      message: "How do you install the project?", 
      validate: entryReq
   },
   {
      type: "input",
      name: "usage",
      message: "What are the usage guidelines for the project?", 
      validate: entryReq
   },
   {
      type: "list",
      message: "Which license are you using?",
      name: "license",
      choices: ["Apache", "MIT"],
   },
   {
      type: "input",
      name: "features",
      message: "What are the features of the project?", 
      validate: entryReq
   },
   {
      type: "input",
      name: "contribute",
      message: "How can others contribute to your project?", 
      validate: entryReq
   },
   {
      type: "input",
      name: "tests",
      message: "Please testing instructions for your project.", 
      validate: entryReq
   },
];


function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => {
      if (err) {
      return console.log(err);
   }
   console.log('Your readme file is created.')
   });
}

const writeFilePromise = util.promisify(writeToFile);

async function init() {
   try{
      const data = await inquirer.prompt(questions);
      console.log("Saved Responses:", data);

      markdown = generateMarkdown(data);
      console.log("Generating markdown...");
      await writeFilePromise(`sample.md`, markdown);

   }
   catch(error){
      console.log(error);
   }
}

init();