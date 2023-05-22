import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Log Ud</Link>
                    <Link to='/Department'>Afdeling</Link>
                    <Link to='/Employee'>Medarbejdere</Link>
                </li>
            </ul>
        </nav>
    )
}