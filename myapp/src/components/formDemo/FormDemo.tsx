import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

interface Profile {
    firstname: string
    lastname: string
    age: number
}

function Formdemo() {

    const {register,handleSubmit,errors}= useForm<Profile>()

    const onSubmit=handleSubmit((data) =>{
        alert(JSON.stringify(data))
    })

    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='firstname'>First Name</label>
                <input ref={register({required:true})} type ='text' id='firstname' name='firstname'/>
                {
                    errors.firstname &&<div className="error">Enter firstname</div>
                }
            </div>
            <div>
                <label htmlFor='lastname'>First Name</label>
                <input  ref={register} type ='text' id='lastname' name='lastname'/>
            </div>
            <div>
                <label htmlFor='age'>First Name</label>
                <input  ref={register} type ='text' id='age' name='age'/>
            </div>
            <div>
                <button type='submit'>Save User</button>
            </div>
        </form>
    )
}

export default Formdemo