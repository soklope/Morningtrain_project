import React from "react";
import Tooltip from "../Navigation/Tooltip";
import useEmployeeStore from "../../employeeStore";

export default function UsedTags() {
    const employee = useEmployeeStore((state) => state.employee);

    return (
    <div className="e-container__tags">
        <div className="e-container__tags__title">
            <div>
                <div className="e-container__tags__title__h1">ANVENDTE TAGS</div>
                <div className="e-container__tags__title__sub">DE SIDSTE 10 UGER</div>
            </div>
            <Tooltip 
            headline={"ANVENDTE TAGS"} 
            input={"Denne graf viser en oversigt over de tags, *PLACEHOLDER_NAME* har angivet de sidste 10 uger."}
            input2={"Dette kunne måske være relevant at snakke om,til næste OKR møde."}
            />
        </div>

        <div className="e-container__tags__text">
            {employee.tagsLong.map((employee, index) => (
                <div key={index}>{employee}</div>
            ))}
        </div>
    </div>
    )
}