import React from "react";
import { managerArray } from "../../db";
import DepartmentGraphMobile from "./DapartmentGraphMobile";
import MobileGraphDesc from "./MobileGraphDesc";
import DepartmentGraphDesktop from "./DepartmentGraphDesktop";

export default function Department() {
    return (
        <div className="department-container">
            <p>AFDELING</p>
            {managerArray.map((manager, index) => (
                <div className="department-container__dapartment-name" key={index}>{manager.departmentName}</div>
            ))}

            <div className="hide-on-mobile">
                <DepartmentGraphDesktop />
            </div>

            <div className="hide-on-desktop">
                <DepartmentGraphMobile />
                <MobileGraphDesc />
            </div>
        </div>
    )
}