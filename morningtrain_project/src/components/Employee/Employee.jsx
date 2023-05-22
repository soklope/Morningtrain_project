import React from "react";
import Chart from "react-google-charts"
import PrivateGraph from "./PrivateGraph";
import WorkGraph from "./WorkGraph";

export default function Employee() {
    return (
        <>
           <PrivateGraph/>
           <WorkGraph/>
        </>
    )
}