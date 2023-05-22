import React from "react";
import Chart from "react-google-charts"

export default function Employee() {
    return (
        <>
            <div>Medarbejdere</div>

            <Chart
                chartType="ScatterChart"
                //data
                data={[["Age", "Weight"], [1, 5.5], [8, 12], [9, 14]]}
                width="100%"
                height="40vh"
                legendToggle
                />
        </>
    )
}