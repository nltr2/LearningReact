import React from "react";

const FormDemo =()=>{

    return (
        <div>
        <form >
        <input type='text' className='form-control' placeholder='Enter name' value="" />  
        <input type='text' className='form-control' placeholder='Enter email' value="" />  
        <input type='text' className='form-control' placeholder='Enter city' value="" />  
       <button className='btn btn-success'>Add User</button>
       </form>
       </div>
    )
}

export default FormDemo;