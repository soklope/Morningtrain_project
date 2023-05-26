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
            input={"Her vises der en oversigt over de udsagn, medarbejderen har anvendt"}
            input2={"Dette kunne måske være relevant at snakke om, til næste 1 til 1 samtale."}
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