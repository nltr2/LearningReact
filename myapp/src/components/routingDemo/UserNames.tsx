import React from 'react'
import { NavLink } from 'react-router-dom'


 const UserNames=() =>{

    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/userdetails/admin'}>admin</NavLink>
                </li>
                <li>
                    <NavLink to={'/userdetails/manager'}>manager</NavLink>
                </li>
            </ul>
        </div>
    )
}
export default UserNames
