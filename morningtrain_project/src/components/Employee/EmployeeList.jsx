import React from "react"
import { Link } from "react-router-dom";

export default function EmployeeList( {open} ) {
    const listOfEmployees = ['John Deez', 'Louise Nåts', 'Peter Ligma']

    if(!open) return null
    
    return (
        <div className="dropdown-container">
            <p>MORNINGTRAIN</p>
            <p className="dropdown-container__headline">MEDARBEJDERE</p>

            <div className="dropdown-container__employees">
                {listOfEmployees.map((name, index) => (
                    <div key={index}><Link to='./Employee'>{name}</Link></div>
                ))}
            </div>
        </div>
    )
}