import React from "react";
import Welcome from "../optionaldemo/WelcomeProps";
import Footer from "./Footer";
import GuestList from "./GuestList";
import Header from "./Header";
import Parent from "./parent";
import UserSearch from "./UserSearch";

function MainApp(){
    return (
        
        <div>
           {/*  <Header/>
            <Welcome />
            <Parent/>
            
            <Footer/> */}
            <GuestList></GuestList>
            <UserSearch/>
        </div>
       
    )
}

export default MainApp