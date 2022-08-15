import React from 'react'
import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar__logo">Thrifty</div>
            <form action="" className='navbar__form'>
                <div className="navbar__search">
                    <input type="text" />
                    <div className="icon">search icon</div>
                </div>
            </form>
            <ul className="navbar__links">
                <li className="navbar__link">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="navbar__link">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
    </nav>
  )
}
