import { useState, useEffect } from "react"
import PrivateGraph from "./PrivateGraph"
import WorkGraph from "./WorkGraph"
import UsedTags from "./UsedTags"
import useEmployeeStore from "../../employeeStore"
import Modal from "../Modal/Modal"

export default function Employee() {
    const [selectedEmployee, setSelectedEmployee] = useState("PLACEHOLDER_NAME")
    const employee = useEmployeeStore((state) => state.employee);

    useEffect(() => {
        setSelectedEmployee(employee.name)
    }, [employee])

    return ( 
        <div className="e-container">
            <p>MEDARBEJDER</p>
            <div className="e-container__dapartment-name">{selectedEmployee}</div>   
            <div className="flex">
                <div>
                    <PrivateGraph/> 
                    <WorkGraph/>
                </div>

                <div>
                    <UsedTags/>
                    <div className="modal"></div>
                </div>
                
            </div>
        </div>
    )
}