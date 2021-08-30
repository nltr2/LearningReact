import React from "react";

interface ChildProps {
    color:string
}
/* export const Child =(obj:ChildProps)=>{
    return <div >{obj.color}</div>
}
 */

export const Child : React.FC<ChildProps>=(obj) =>{
    return <div>{obj.color}</div>
}