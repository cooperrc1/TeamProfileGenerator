 const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./sc/test');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
let engineerArr = [];
let managerArr = [];
let internArr = [];
let employeeArr = {engineerArr, managerArr, internArr};
function promptUser(){
    return inquirer
    .prompt([
        {
            type: 'text',
            name: 'employee',
            message: "What is the workers's name? (Required!)",
            validate: employeeInput => {
                if (employeeInput) {
                    return true;
                }
             else {
                    console.log ("Please enter the workers's name.");
                    return false;
                }
            }
        },
        promptUser()
        .then(eD => {
            return generatePage(employeeArr)
        })
        .then (htmlFile =>{
            fs.writeFile('./dist/index.html', htmlFile, err=> {
                console.log('File was successfully created.')
                if(err){
                    return;
                }
            })
        })