import React, { useState } from "react";

const guests=[
    {name:"na",age:30},
    {name:"Shyam",age:35},
    {name:"Ram",age:40},
    {name:"admin",age:45},
]
interface GuestProp{
    name:string,
    age:number
}
const UserSearch:React.FC=() =>{
    const [name,setName]=useState('');
   /*  const [found,setFound]=useState<GuestProp|undefined>(); */
   const [user ,setUser]= useState<{name:string,age:number} | undefined>()

    const onCLick=() =>{
        const foundUser =guests.find((user) =>{
                return user.name == name
        });
        console.log(foundUser);
        setUser(foundUser);
    }
    return <div>
        user search here
        <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        <button onClick={onCLick}>search</button>

        <div>
    {user && user.name}
    {user && user.age}
</div>

        </div>
}

export default UserSearch;