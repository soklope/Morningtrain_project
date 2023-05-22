import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
<<<<<<< Updated upstream

    const Location = useLocation().pathname

    if (Location !== '/') {
        return (
            <nav className="nav-container">
                <ul>
                    <li>
                        <Link to='/'>Log Ud</Link>
                        <Link to='/Department'>Afdeling</Link>
                        <Link to='/Employee'>Medarbejdere</Link>
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
            <>

            </>
        )
    }
=======
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Log Ud</Link>
                </li>
                <li>
                    <Link to='/Department'>Afdeling</Link>
                </li>
                <li>
                    <Link to='/Employee'>Medarbejdere</Link>
                </li>
            </ul>
        </nav>
    )
>>>>>>> Stashed changes
}