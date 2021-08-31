import React from "react";
import { Child } from "./Child";


const Parent=()=>{
    return <div><Child color="pink" onClick={() => console.log("it's clicked")}></Child></div>
}

export default Parent;