import React from 'react'
import {AffairType} from "./HW2";
import c from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}
const buttonClass = c.item + ' ' + c.button

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const spanPriority = c.item + ' ' + c[props.affair.priority]

    return (
        <div className={c.affair}>
            <span className={c.item}>{props.affair.name} </span>
            <span className={spanPriority}>{props.affair.priority} </span>


            <button className={buttonClass} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
