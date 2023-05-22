import React from "react";
import Navigation from "../Navigation/Navigation"
import Chart from "react-google-charts"

export default function WorkGraph() {
    return (
        <>
            <Navigation/>
            <Chart
                chartType="AreaChart"
                // data skal være datasæt, 
                // første datasæt er mærkaterne til axerne, 
                // resten er punkter i grafen.
                data={[["Age", "Direkte stressniveau"], [1, 5.5], [8, 12], [9, 14]]}
                width="100%"
                height="40vh"
                legendToggle
                className="graf"
                />
        </>
    )
}