import React from 'react'
import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
        <div className="logo">Thrifty</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
  )
}
