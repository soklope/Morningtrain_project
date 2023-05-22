import React from "react";
import Chart from "react-google-charts"

export default function PrivateGraph() {
    return (
        <>
            <Chart
                chartType="AreaChart"
                // data skal være datasæt, 
                // første datasæt er mærkaterne til axerne, 
                // resten er punkter i grafen.
                data={[["Aalder", "Direkte stressniveau"], [1, 10000], [8, 12], [9, 14],[45, 130]]}
                width="100%"
                height="40vh"
                legendToggle
                className="graph"
                />
        </>
    )
}