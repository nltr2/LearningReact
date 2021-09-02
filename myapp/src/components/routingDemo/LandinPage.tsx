import React from "react";
import { BrowserRouter,NavLink,Route } from "react-router-dom";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import PortFolio from "./Portfolio";
import Register from "./Register";
import UserDetails from "./UserDetails";

const LandingPage =()=>{

    return (
        <div>
           
            {routes}
        </div>
    )
}

export default LandingPage

 const Header = ()=>{
    return(
        <header>

            <NavLink to="/login">login</NavLink>
            <NavLink to="/register">register</NavLink>
        </header>
        

    )
} 
const routes =(
    <BrowserRouter>
    <Header/>
        <switch>
            <Route path='/' component={Login} exact={true}/>
            <Route path='/login' component={Login}/> 
            <Route path='/portfolio' component={PortFolio}/> 
            <Route path='/userdetails' component={UserDetails}/> 
            <Route path='/register' component={Register}/> 
            <Route component={PageNotFound}/>
        </switch>

    </BrowserRouter>
)