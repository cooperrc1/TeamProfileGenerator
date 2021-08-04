const Employee = require('./Employee');
class Manager extends Employee {
    constructor(id, name, email, officenumber) {
        super(id, name, email);
        this.officenumber = officenumber;
    }
    getrole() {return `Manager`}
}
module.exports = Manager;