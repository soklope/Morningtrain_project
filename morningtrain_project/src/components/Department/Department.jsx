import React from "react";
import { managerArray, employeeArray } from "../../db.js";
import DepartmentGraphMobile from "./DapartmentGraphMobile.jsx";
import MobileGraphDesc from "./MobileGraphDesc.jsx";
import DepartmentGraphDesktop from "./DepartmentGraphDesktop.jsx";
import PrivateGraph from "../Employee/PrivateGraph.jsx";
import WorkGraph from "../Employee/WorkGraph.jsx"
import UsedTags from "../Employee/UsedTags.jsx"
import Modal from "../Modal/Modal.jsx";
import useModalStore from "../../modalStore.jsx";

export default function Department() {

    const isLoggedInAsAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    const modalStore = useModalStore((state) => state.modalValue);

    return (
        <div className="department-container">

            { !isLoggedInAsAdmin && modalStore ?
                <div className='modal'>
                    <Modal />
                </div>
            :
                <></>
            }

            { isLoggedInAsAdmin ?
                <p>AFDELING</p>
            :
                <p>MEDARBEJDER</p>
            }

            { isLoggedInAsAdmin ?
                <div className="department-container__dapartment-name">{managerArray[0].departmentName}</div>
            :
                <div className="department-container__dapartment-name">{employeeArray[0].name}</div>
            }

            { isLoggedInAsAdmin ?
                <>
                    <div className="hide-on-mobile">
                        <DepartmentGraphDesktop />
                    </div>

                    <div className="hide-on-desktop">
                        <DepartmentGraphMobile />
                        <MobileGraphDesc />
                    </div>
                </>
                :
                <div className="flex">
                    <div>
                        <WorkGraph />
                        <PrivateGraph />
                    </div>
                    <div>
                        <UsedTags />
                    </div>
                </div>
            }
        </div>
    )
}