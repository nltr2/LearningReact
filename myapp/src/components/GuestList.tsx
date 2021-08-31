import React, { useState } from "react";

const GuestList:React.FC=()=>{
    //using state hooks : intialization
    const [name,setName]= useState('admin');
    const [city,setCity]= useState('LA');
    const [guests,setGuests] = useState<string[]>([]);
    const onClick = () =>{
        setName('');
        setCity('');
        console.log(name);
        var guest= name + ','+city;
        setGuests([...guests,guest]);
    }
    return <div>

        <h3>Invited Guest List</h3>
        <ul>
        {/* 2 ways to do it : one with return statemant and curly braces */}
         {guests.map((guest)=>{
             return <li key={guest}>{guest}</li>
         }
        )}  

         {/* another using (  round brackets ,no return statement for li */}
        {/*  {guests.map((guest) =>(
               <li key={guest}>{guest}</li>
           ))} */}
      
        </ul>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type='text' value={city} onChange={(e)=>setCity(e.target.value)}/>
        
        <button onClick={onClick}>Add Guest</button>
        
        </div>
}

export default GuestList;