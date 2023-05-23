import chartIcon from "../../img/chart.png"
import employeeIcon from "../../img/group.png"
import profileIcon from "../../img/profile.png"
import mtLogo from "../../img/logo.svg"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import EmployeeList from "../Employee/EmployeeList";
import { employeeArray, managerArray } from "../../db";

export default function Header() {
    const [openProfileTab, setOpenProfileTab] = useState(false)
    const [openListTab, setOpenListTab] = useState(false)
    const Location = useLocation().pathname

    const listClick = () => {
        setOpenListTab(true)
        setOpenProfileTab(false)
    }

    const profileClick = () => {
        setOpenListTab(false)
        setOpenProfileTab(true)
    }

    const departmentClick = () => {
        setOpenListTab(false)
        setOpenProfileTab(false)
    }

    if (Location !== '/') {
        return (
            <>
                <nav className="mobile-nav-container">
                    <div className={openListTab || openProfileTab ? "" : "active"} onClick={departmentClick}>
                        <Link to='/Department'>
                            <img src={chartIcon} alt="afdeling" />
                        </Link>
                    </div>

                    <div className={openListTab ? "active" : ""}>
                        <div onClick={listClick}>
                            <img src={employeeIcon} alt="medarbejdere" />
                        </div>
                    </div>

                    <div className={openProfileTab ? "active" : ""}>
                        <div onClick={profileClick}>
                            <img src={profileIcon} alt="profil" />
                        </div>
                    </div>
                </nav>

                <nav className="desktop-nav-container">
                    <Link className="desktop-nav-container__logo" to='/Department'>
                        <img src={mtLogo} alt="afdeling"/>
                    </Link>

                    <h3>AFDELING</h3>
                    <div className="desktop-nav-container__employee-list">
                        {managerArray.map((manager, index) => (
                            <div key={index}>{manager.departmentName}</div>
                        ))}
                    </div>

                    <h3>MEDARBEJDERE</h3>
                    <div className="desktop-nav-container__employee-list">
                        {employeeArray.map((employee, index) => (
                            <div key={index}>{employee.employeeName}</div>
                        ))}
                    </div>

                    <div className="desktop-nav-container__profile-name">
                        {managerArray.map((manager, index) => (
                            <div key={index}>{manager.managerName}</div>
                        ))}
                    </div>
                    <Link to='/' className="desktop-nav-container__log-out">Log Ud</Link>
                </nav>

                <Profile open={openProfileTab} />
                <EmployeeList open={openListTab}/>
            </> 
        )

    } else {

        return (
            <>

            </>
        )
    }
}