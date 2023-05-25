import React from "react";
import { managerArray, employeeArray } from "../../db";
import DepartmentGraphMobile from "./DapartmentGraphMobile";
import MobileGraphDesc from "./MobileGraphDesc";
import DepartmentGraphDesktop from "./DepartmentGraphDesktop";
import PrivateGraph from "../Employee/PrivateGraph";
import WorkGraph from "../Employee/WorkGraph"
import UsedTags from "../Employee/UsedTags"
import Modal from "../Modal/Modal";
import useModalStore from "../../modalStore";

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