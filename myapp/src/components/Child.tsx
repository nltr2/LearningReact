import React from "react";

interface ChildProps {
    color:string
}
/* export const Child =({color}:ChildProps)=>{
    return <div >{color}</div>
}
 */

export const Child : React.FC<ChildProps>=({color}) =>{
    return <div>{color}</div>
}