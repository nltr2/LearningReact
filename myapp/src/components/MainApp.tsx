import React from "react";
import Welcome from "../optionaldemo/WelcomeProps";
import UserSearchClass from "./classbasedComp/UserSearchClass";
import Footer from "./Footer";
import GuestList from "./GuestList";
import Header from "./Header";
import Parent from "./parent";
import UserSearch from "./UserSearch";

function MainApp(){
    const guests=[
    {name:"na",age:30},
    {name:"Shyam",age:35},
    {name:"Ram",age:40},
    {name:"admin",age:45},
]
    return (
        
        <div>
           {/*  <Header/>
            <Welcome />
            <Parent/>
            
            <Footer/> */}
            <GuestList></GuestList>
            <UserSearchClass users={guests}/>
        </div>
       
    )
}

export default MainApp