const Employee = require('./Employee');
class Engineer extends Employee {
    constructor (id, name,  email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {return this.github}
    getRole() {return `Engineer`}
}
module.exports = Engineer;