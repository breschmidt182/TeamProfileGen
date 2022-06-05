const Employee = require('./test/employee.test');
const Manager = require('./test/manager.test');
const Engineer = require('./test/engineer.test');
const Intern = require('./test/intern.test');

class Employee {
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(name) {
        return this.name;
    }  
    getId(id) {
       return this.id;
    }
    getEmail(email) {
        return this.email;
    }
    getRole(role) {
        return this.role;
    }
}

class Manager extends Employee {
    constructor(officeNumber,role) {
        super();
        this.officeNumber = officeNumber;
        this.role = role;
    }
    getRole(role) {
        return this.role;
    }
    getOfficeNumber(officeNumber) {
        return this.officeNumber;
    }
}

class Engineer extends Employee {
    constructor(GitHubUserName, role) {
        super();
        this.github = GitHubUserName;
        this.role = role;
    }
    getgithub(GitHubUserName) {
        return this.github;
    }
    getRole(role) {
        return this.role;
    }
}

class Intern extends Employee {
    constructor(school, role) {
        super();
        this.school = school;
        this.role = role;
    }
    getSchool(school) {
        return this.school;
    }
    getRole(role) {
        return this.role;
    }
}

module.exports = Employee, Manager, Engineer, Intern;

