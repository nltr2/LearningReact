import React from 'react'
import { useParams } from 'react-router-dom'
import UserNames from './UserNames'

interface UserD{
    name:string
}
 const UserDetails=() =>{

    const {name} = useParams<UserD>()
    return (
        <div>
            <UserNames/>
            <p> User : {name}</p>
        </div>
    )
}
export default UserDetails
