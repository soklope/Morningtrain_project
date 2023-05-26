import React from "react";
import Slider from "./Slider";
import useModalStore from "../../modalStore";

export default function Modal() {

    const setModalValue = useModalStore((state) => state.setModalValue);

    const closeModal = () => {
        setModalValue(false)
    }

    return (
        <div className="modal-container">
            <div className="modal-container__exit" onClick={closeModal}>&#10006;</div>
            <Slider/>
        </div>
    )
}