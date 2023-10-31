import React, { useEffect, useState } from 'react';
import employeeCollection from './employeeCollection';

export const DisplayEmployees = () => {
    const [employeeList, setEmployeeList] = useState([]);

    // Event Listener for the change event
    const getEmployees = () => {
        setEmployeeList([...employeeCollection.getAll()]);
    }

    const addEmployee = (name, place) => {
        employeeCollection.addEmployee(name, place);
    }

    useEffect(() => {
        setEmployeeList([...employeeCollection.getAll()]);

        // subscribe to the change event
        employeeCollection.on('Change', getEmployees);

        // Unsubscribe
        return () => {
            employeeCollection.off('Change', getEmployees);
        }
    }, []);

    return (
        <div>
            <ul className='list-unstyled text-danger'>
                <button onClick={() => addEmployee('Shubman', 'Delhi')}>Add Employee</button>
                {
                    employeeList && employeeList.map((employee) => {
                        return <li key={employee.id}>{employee.name} from {employee.place}</li>
                    })
                }
            </ul>
        </div>
    )
}