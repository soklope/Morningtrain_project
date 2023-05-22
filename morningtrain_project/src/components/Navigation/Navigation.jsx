import chartIcon from "../../img/chart.png"
import employeeIcon from "../../img/group.png"
import profileIcon from "../../img/profile.png"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Profile from "./Profile";
import EmployeeList from "../Employee/EmployeeList";

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
                <nav className="nav-container">
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