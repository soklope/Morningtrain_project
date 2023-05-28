import { useState, useEffect } from "react"
import PrivateGraph from "./PrivateGraph.jsx"
import WorkGraph from "./WorkGraph.jsx"
import UsedTags from "./UsedTags.jsx"
import useEmployeeStore from "../../employeeStore.jsx"

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
                </div>
                
            </div>
        </div>
    )
}