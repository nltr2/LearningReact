import React from 'react'
import { NavLink } from 'react-router-dom'


 const Header=() =>{

    return (
        <header>

        <NavLink to="/login">login</NavLink>
        <NavLink to="/register">register</NavLink>
    </header>
    )
}
export default Header
