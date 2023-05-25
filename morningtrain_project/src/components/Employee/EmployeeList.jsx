import React from "react"
import { Link } from "react-router-dom";
import useEmployeeStore from "../../employeeStore";
import { employeeArray } from "../../db";
import useDropdownStore from "../../dropdownStore";

export default function EmployeeList() {
    const dropdownValue = useDropdownStore((state) => state.dropdownValue);
    const setDropdownValue = useDropdownStore((state) => state.setDropdownValue);
    const setEmployee = useEmployeeStore((state) => state.setEmployee);

    const clickEmployee = (employee) => {
        setEmployee(employee)
        setDropdownValue(!dropdownValue)
    }

    if(!dropdownValue) return null

    return (
        <div className="dropdown-container">
            <p>MORNINGTRAIN</p>
            <p className="dropdown-container__headline">MEDARBEJDERE</p>

            <div className="dropdown-container__employees">
                {employeeArray.map((employee, index) => (
                    <Link to='/Employee' key={index}>
                        <div onClick={() => clickEmployee(employee)}>{employee.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

