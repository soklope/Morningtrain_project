import chartIcon from "../../img/chart.png"
import employeeIcon from "../../img/group.png"
import profileIcon from "../../img/profile.png"
import mtLogo from "../../img/logo.svg"
import Profile from "./Profile.jsx";
import EmployeeList from "../Employee/EmployeeList.jsx";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { employeeArray, managerArray } from "../../db.js";
import useEmployeeStore from "../../employeeStore.jsx";
import useDropdownStore from "../../dropdownStore.jsx";

export default function Header() {
    const [openProfileTab, setOpenProfileTab] = useState(false)
    const [openListTab, setOpenListTab] = useState(false)
    const Location = useLocation().pathname

    const employee = useEmployeeStore((state) => state.employee);
    const setEmployee = useEmployeeStore((state) => state.setEmployee);
    const dropdownValue = useDropdownStore((state) => state.dropdownValue);
    const setDropdownValue = useDropdownStore((state) => state.setDropdownValue);
    
    const handleToggle = () => {
        setDropdownValue(!dropdownValue);
        setOpenProfileTab(false)
    };

    const profileClick = () => {
        setDropdownValue(false);
        setOpenProfileTab(!openProfileTab)
        setOpenListTab(false)
    }

    const departmentClick = () => {
        setDropdownValue(false);
        setOpenListTab(false)
        setOpenProfileTab(false)
    }

    const clickEmployee = (employee) => {
        setEmployee(employee)
    }

    const isLoggedInAsAdmin = JSON.parse(localStorage.getItem('isAdmin'))

    if (Location !== '/') {
        return (
            <>
                <nav className="mobile-nav-container">
                    <div className={dropdownValue || openProfileTab || Location === "/Employee" ? "" : "active"} onClick={departmentClick}>
                        <Link to='/Department' >
                            <img src={chartIcon} alt="afdeling" />
                        </Link>
                    </div>

                    {isLoggedInAsAdmin ?

                        <div className={Location === "/Employee" || dropdownValue ? "active" : ""}>
                            <div onClick={handleToggle}>
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

                    { isLoggedInAsAdmin ?
                        <>
                            <h3>AFDELING</h3>
                            <div className="desktop-nav-container__employee-list">
                                <Link to='/Department' style={{ textDecoration: 'none' }}>
                                    <div style={Location === "/Department" ? { color: '#FF9333' } : { color: '#000000' }}>{managerArray[0].departmentName}</div>
                                </Link>
                            </div>
                        </>
                    :
                        <></>
                    }


                    {isLoggedInAsAdmin ?
                        
                        <>
                            <h3>MEDARBEJDERE</h3>
                            <div className="desktop-nav-container__employee-list">
                                {employeeArray.map((employee, index) => (
                                    <Link to='/Employee' key={index} style={{ textDecoration: 'none' }}>
                                        <div onClick={() => clickEmployee(employee)}>{employee.name}</div>
                                    </Link>
                                ))}
                            </div>
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
                            {employeeArray[0].name}
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