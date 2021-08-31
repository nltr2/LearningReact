import React, { useState } from "react";

const GuestList:React.FC=()=>{
    //using state hooks : intialization
    const [name,setName]= useState('admin');
    const [guests,setGuests] = useState<string[]>([]);
    const onClick = () =>{
        setName('');
        console.log(name);
        setGuests([...guests,name]);
    }
    return <div>

        <h3>Invited Guest List</h3>
        <ul>

         {guests.map((guest)=>(
                <li key={guest}>{guest}</li>
         )
        
        )} 
        {/*  {guests.map((guest) =>(
               <li key={guest}>{guest}</li>
           ))} */}
      
        </ul>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        
        <button onClick={onClick}>Add Guest</button>
        
        </div>
}

export default GuestList;