const inquirer = require('inquirer');
const fs = require('fs');
const {Employee, Manager, Engineer, Intern} = require('./Employee');
const generateHTML = require('./src_templateHelperCode/generateHTML');
const team = [];



const menu =   {
    type: "list",
    choices: ["Engineer", "Intern","Cancel"],
    name: "menu",
    message: "What position do you want to add?",

}

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the engineer's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is the engineer's email?"
     },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    },
]

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the manager's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is the manager's email?"
     },
     {
         type: 'input',
         name: 'officeNumber',
         message: "What is the manager's office number?"
     }
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the intern's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is theintern's email?"
     },
     {
         type: 'input',
         name: 'school',
         message: "What school is the intern enrolled in?"
     }
]


function createTeam() {
    // inquirer prompt for menu questions choices= engineer, intern, or done
    inquirer.prompt(menu)
    // .then(choice) 
    .then(answers => {
        console.log(answers)
        let info = ''
        switch(answers.menu) {
            case 'Engineer':
             createEngineer()
            break;

            case 'Intern':
                createIntern()
            break;

            case 'Cancel':
                writeToFile(team)
            break;
    
        }
    })
    // switch case key= answers.choice value= engineer
}

function createManager() {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        createTeam()
    })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        createTeam()
    })
}

function createIntern() {
    inquirer.prompt(internQuestions)
    .then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        createTeam()
    })
}

// TODO: Create a function to initialize app
function init() {
  createManager() 
    // inquirer.prompt(questions)
    //     .then(data => {
    //         console.log(data);
    //         writeToFile('Team Profile Generator', data)
    //     });

}

function writeToFile(test) {
    console.log(test);
    fs.writeFile('Sample-team.html', generateHTML(test), err =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function call to initialize app
init();






// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated