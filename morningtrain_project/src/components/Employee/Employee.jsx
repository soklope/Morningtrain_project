import { useState } from "react"
import PrivateGraph from "./PrivateGraph"
import WorkGraph from "./WorkGraph"
import UsedTags from "./UsedTags"
import useEmployeeStore from "../../employeeStore"

export default function Employee() {
    const employee = useEmployeeStore((state) => state.employee);

    return (
        <div className="e-container">
            <p>MEDARBEJDER</p>

            {employee ?
                <div className="e-container__dapartment-name">{employee.employeeName}</div>
            : 
                <div className="e-container__dapartment-name">Placeholder</div>
            }

            <div className="flex">
                <div>
                    <PrivateGraph/>
                    <WorkGraph/>
                </div>

                <div>
                    <UsedTags/>
                </div>
            </div>
        </div>
    )
}