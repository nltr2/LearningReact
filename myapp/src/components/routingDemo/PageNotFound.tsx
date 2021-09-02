import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


 const PageNotFound=() =>{
    const location=useLocation()
    return (
        <div>
            <p> resource not available .... {location.pathname}</p>
            <div>
                <NavLink to="/">login</NavLink>
            </div>
        </div>
    )
}
export default PageNotFound
