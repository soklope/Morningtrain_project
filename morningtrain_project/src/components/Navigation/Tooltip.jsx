import { useState } from "react";
import helpIcon from "../../img/help.png"

export default function Tooltip( {input, headline, input2} ) {
    const [showTooltipModal, setShowTooltipModal] = useState(false)

    const tooltipClick = () => {
        setShowTooltipModal(!showTooltipModal)
    }

    return (
        <div className="tooltip-icon">
            <img src={helpIcon} alt="hjælp ikon" onClick={tooltipClick}/>

            <div className={ showTooltipModal ? "tooltip-icon__show" : "tooltip-icon__hide"} onClick={tooltipClick}>
                <h4>{headline}</h4>
                <p>{input}</p>
                <p>{input2}</p>
            </div>
        </div>
    )
}