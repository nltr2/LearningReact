import React from "react";

interface ChildProps {
    color:string,
    onClick:() => void;
}
/* export const Child =(obj:ChildProps)=>{
    return <div >{obj.color}</div>
}
 */

export const Child : React.FC<ChildProps>=({color,onClick,children}) =>{
    return <div>
        {color}
        {children}
        <button onClick={onClick} >call me</button>
        </div>
}