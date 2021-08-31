import React from "react";
import { Child } from "./Child";
import Header from "./Header";


const Parent=()=>{
    return <div><Child color="pink" onClick={() => console.log("it's clicked")}>Hello, children</Child></div>
}

export default Parent;