import EventEmitter from 'events';

class EmployeeCollection extends EventEmitter {
    constructor() {
        super();

        this.employees = [
            {
                id: 1234,
                name: 'Sachin',
                place: 'Mumbai'
            },
            {
                id: 5678,
                name: 'Rahul',
                place: 'Bangalore'
            }
        ]
    }

    getAll() {
        return this.employees;
    }

    addEmployee(name, place) {
        const id = Date.now();

        this.employees.push({
            id,
            name,
            place
        });

        // publish or raise an event
        this.emit('Change'); // rasing custom event 'Change'
    }
}

let employeeCollection = new EmployeeCollection();

window.employeeCollection = employeeCollection; // exporting employeeCollection object at window property

export default employeeCollection;