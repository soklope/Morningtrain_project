import React from "react"
import PrivateGraph from "./PrivateGraph"
import WorkGraph from "./WorkGraph"
import UsedTags from "./UsedTags"

export default function Employee() {
    return (
        <div className="e-container">
            <p>MEDARBEJDER</p>
            <div className="e-container__dapartment-name">placeholder_name</div>

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