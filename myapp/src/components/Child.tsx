import React from "react";

interface ChildProps {
    color:string,
    onClick:() => void;
}
/* export const Child =(obj:ChildProps)=>{
    return <div >{obj.color}</div>
}
 */

export const Child : React.FC<ChildProps>=(obj) =>{
    return <div>
        {obj.color}
        <button onClick={obj.onClick}>call me</button>
        </div>
}