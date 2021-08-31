import React from "react";
import Welcome from "../optionaldemo/WelcomeProps";
import Footer from "./Footer";
import GuestList from "./GuestList";
import Header from "./Header";
import Parent from "./parent";

function MainApp(){
    return (
        
        <div>
           {/*  <Header/>
            <Welcome />
            <Parent/>
            
            <Footer/> */}
            <GuestList></GuestList>
        </div>
       
    )
}

export default MainApp