import chartIcon from "../../img/chart.png"
import employeeIcon from "../../img/group.png"
import profileIcon from "../../img/profile.png"
import mtLogo from "../../img/logo.svg"
import Profile from "./Profile";
import EmployeeList from "../Employee/EmployeeList";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { employeeArray, managerArray } from "../../db";

export default function Header() {
    const [openProfileTab, setOpenProfileTab] = useState(false)
    const [openListTab, setOpenListTab] = useState(false)
    const Location = useLocation().pathname

    const listClick = () => {
        setOpenListTab(!openListTab)
        setOpenProfileTab(false)
    }

    const profileClick = () => {
        setOpenProfileTab(!openProfileTab)
        setOpenListTab(false)
    }

    const departmentClick = () => {
        setOpenListTab(false)
        setOpenProfileTab(false)
    }

    const isLoggedInAsAdmin = JSON.parse(localStorage.getItem('isAdmin'))

    if (Location !== '/') {
        return (
            <>
                <nav className="mobile-nav-container">
                    <div className={openListTab || openProfileTab || Location === "/Employee" ? "" : "active"} onClick={departmentClick}>
                        <Link to='/Department'>
                            <img src={chartIcon} alt="afdeling" />
                        </Link>
                    </div>

                    {isLoggedInAsAdmin ?

                        <div className={Location === "/Employee" || openListTab ? "active" : ""}>
                            <div onClick={listClick}>
                                <img src={employeeIcon} alt="medarbejdere" />
                            </div>
                        </div>

                        : 

                        <></>
                    }

                    <div className={openProfileTab ? "active mobile-nav-container__profile" : "mobile-nav-container__profile"}>
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
                                <Link to='/Department'>
                                    <div key={index}>{manager.departmentName}</div>
                                </Link>
                            ))}
                    </div>

                    {isLoggedInAsAdmin ?
                        
                        <>
                            <h3>MEDARBEJDERE</h3>
                            <Link to="/Employee">
                                <div className="desktop-nav-container__employee-list">
                                    {employeeArray.map((employee, index) => (
                                        <Link to='/Employee'>
                                            <div key={index}>{employee.employeeName}</div>
                                        </Link>
                                    ))}
                                </div>
                            </Link>
                        </>

                        : 

                        <></>
                    }

                    {isLoggedInAsAdmin ?
                        
                        <div className="desktop-nav-container__profile-name">
                            {managerArray[0].managerName}
                        </div>

                        : 

                        <div className="desktop-nav-container__profile-name">
                            {employeeArray[0].employeeName}
                        </div>
                    }

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