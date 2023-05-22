import React from "react";
import logo from "../../img/logo.svg"
import { Link } from "react-router-dom";

export default function LoginScreen() {
    return (
        <div className="login-page">
            <img className="login-page__logo" src={logo} alt="Logo" />
            
            <div>
                <input className="login-page__input" type="text" defaultValue="mail@morningtrain.dk"/>
                <p className="login-page__input__help">Glemt brugernavn?</p>
            </div>

            <div>
                <input className="login-page__input" type="text" defaultValue="●●●●●●●●"/>
                <p className="login-page__input__help">Glemt kodeord?</p>
            </div>
            
            <Link className="login-page__button" to='/Department'>Login</Link>
        </div>
    )
}