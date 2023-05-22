import React from "react";
import { Link } from "react-router-dom";

export default function Profile( {open} ) {

    if(!open) return null

    return (
        <div className="dropdown-container">
            <p>PROFIL</p>
            <p className="dropdown-container__headline">Ima Dragma</p>
            <p>Afdelingsleder</p>
            <Link className="login-page__button" to='/'>Log Ud</Link>
        </div>
    )
}