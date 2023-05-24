import React from "react"
import PrivateGraph from "./PrivateGraph"
import WorkGraph from "./WorkGraph"
import Tooltip from '../Navigation/Tooltip'


export default function Employee() {
    return (
        <div className="department-container">
            <p>MORNINGTRAIN</p>
            <div className="department-container__dapartment-name">placeholder_name</div>
        <PrivateGraph/>
        <WorkGraph/>
        </div>
    )
}