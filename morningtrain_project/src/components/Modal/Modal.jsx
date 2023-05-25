import React from "react";
import Slider from "./Slider";

export default function Modal() {



return (
    <>
    <div className="modal-container">
        <div className="tpa">
            <h2>Trivsel på Arbejdet</h2>
                <p className="">angiv hvor godt du trives hos Morningtrain</p>
                    <Slider/>
                <p>"Jeg trives meget godt i hverdagen"</p>
            <button className="modal__button" onClick="switchModal">Næste</button>
        </div>
        <div className="tua">
            <h2>Trivsel på Arbejdet</h2>
                <p>angiv hvor godt du trives hos Morningtrain</p>
                    <Slider/>
                <p>"Jeg trives meget godt i hverdagen"</p>
            <button className="Modal__button">Næste</button>
        </div>
    </div>
    </>
)

}