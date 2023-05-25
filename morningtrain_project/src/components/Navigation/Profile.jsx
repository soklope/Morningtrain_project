import React from "react";
import { Link } from "react-router-dom";
import { employeeArray, managerArray } from "../../db";
import useDropdownStore from "../../dropdownStore";

export default function Profile( {open} ) {

    const isLoggedInAsAdmin = JSON.parse(localStorage.getItem('isAdmin'))

    const dropdownValue = useDropdownStore((state) => state.dropdownValue);
    const setDropdownValue = useDropdownStore((state) => state.setDropdownValue);

    const clickLogOut = () => {
        setDropdownValue(false);
    }

    if(!open) return null

    return (
        <div className="dropdown-container">
            <p>PROFIL</p>
            {
                isLoggedInAsAdmin ? 
                    <p className="dropdown-container__headline">{managerArray[0].managerName}</p>
                :
                    <p className="dropdown-container__headline">{employeeArray[0].name}</p>
            }

            {
                isLoggedInAsAdmin ? 
                   <p>{managerArray[0].position}</p>
                :
                   <p>{employeeArray[0].position}</p>
            }

            <Link className="login-page__button" to='/' onClick={clickLogOut}>Log Ud</Link>
        </div>
    )
}