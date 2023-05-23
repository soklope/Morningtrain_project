import React from "react";
import { managerArray } from "../../db";
import DepartmentGraph from "./DapartmentGraph";
import MobileGraphDesc from "./MobileGraphDesc";

export default function Department() {
    return (
        <div className="department-container">
            <p>AFDELING</p>
            {managerArray.map((manager, index) => (
                <div className="department-container__dapartment-name" key={index}>{manager.departmentName}</div>
            ))}

            <DepartmentGraph />
            <MobileGraphDesc />
        </div>
    )
}