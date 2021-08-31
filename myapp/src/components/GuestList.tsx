import React, { useState } from "react";

const GuestList:React.FC=()=>{
    //using state hooks
    const [name,setName]= useState('admin')
    return <div>

        <h3>Invited Guest List</h3>
        
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <button>Add Guest</button>
        
        </div>
}

export default GuestList;