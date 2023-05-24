import { useState, useEffect } from "react"
import PrivateGraph from "./PrivateGraph"
import WorkGraph from "./WorkGraph"
import UsedTags from "./UsedTags"
import useEmployeeStore from "../../employeeStore"

export default function Employee() {

    if (localStorage.getItem('selectedEmployee') === null) return null
    
    const [selectedEmployee, setSelectedEmployee] = useState("")

    useEffect(() => {  
        const storedObject = localStorage.getItem('selectedEmployee'); 
        const parsedObject = JSON.parse(storedObject);
        setSelectedEmployee(parsedObject.name);
    }, []) 

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