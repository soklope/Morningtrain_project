import React from "react";
import Tooltip from "../Navigation/Tooltip";

export default function UsedTags() {
    return (
        <div className="department-container__graph">
            <div className='department-container__graph__flex'>
        <div className='department-container__graph__title'>Anvendte tags</div>
        <Tooltip 
          headline={"AFDELINGSGRAF"} 
          input={"Denne graf viser en oversigt over de tags, afdelingen har angivet de sidste 10 uger."}
          input2={"Dette kunne måske være relevant at snakke om,til næste OKR møde."}
          />
      </div>
            
    </div>
    )
}