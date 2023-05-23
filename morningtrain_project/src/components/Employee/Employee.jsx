import React from "react"
import PrivateGraph from "./PrivateGraph"
import WorkGraph from "./WorkGraph"

export default function Employee() {
    return (
        <>
        <div className="stats">
        <PrivateGraph/>
        <WorkGraph/>
        </div>
        </>
    )
}