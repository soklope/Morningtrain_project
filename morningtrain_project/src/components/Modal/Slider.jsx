import React, { useState } from "react";

function SliderWithPercentage() {
  const [value, setValue] = useState(0);

  const updatePercentage = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const getColor = () => {
    let red, green, blue;

    if (value < 50) {
      red = 255;
      green = (value * 255) / 50;
      blue = 0;
    } else {
      red = ((100 - value) * 255) / 50;
      green = 255;
      blue = 0;
    }

    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div>
    <p
        style={{
          color: getColor(),
          transition: "color 0.5s",
          fontSize: "125px",

        }}
      >
        {value}%
      </p>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={updatePercentage}
            

      />
      
    </div>
  );
}

export default SliderWithPercentage;
