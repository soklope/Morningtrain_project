import React from "react";
import Tooltip from "../Navigation/Tooltip";

export default function UsedTags() {
    return (
    <div className="e-container__tags">
        <div className="e-container__tags__title">
            <div>
                <div className="e-container__tags__title__h1">ANVENDTE TAGS</div>
                <div className="e-container__tags__title__sub">SIDSTE 10 UGER</div>
            </div>
            <Tooltip 
            headline={"AFDELINGSGRAF"} 
            input={"Denne graf viser en oversigt over de tags, afdelingen har angivet de sidste 10 uger."}
            input2={"Dette kunne måske være relevant at snakke om,til næste OKR møde."}
            />
        </div>
        
        <div>PLACEHOLDER_TAGS</div>
        <div>PLACEHOLDER_TAGS</div>
    </div>
    )
}