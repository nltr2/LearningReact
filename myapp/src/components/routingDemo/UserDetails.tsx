import React from 'react'
import {  useHistory, useParams } from 'react-router-dom'
import UserNames from './UserNames'

interface UserD{
    name:string
}
 const UserDetails=() =>{
    const history = useHistory()
    const onClick=() =>{
        history.push('/login')
    }
    const {name} = useParams<UserD>()
    return (
        <div>
            <button onClick={onClick}>go to login</button>
            <UserNames/>
            <p> User : {name}</p>
        </div>
    )
}
export default UserDetails
