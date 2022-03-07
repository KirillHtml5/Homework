import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>Students</button>
            <div className={s.dropdownContent}>
                <NavLink to="/pre-junior">pre-junior</NavLink>
                <NavLink to="/junior">junior</NavLink>
                <NavLink to="/junior_plus">junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
