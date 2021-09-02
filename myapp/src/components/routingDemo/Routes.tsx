import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import PageNotFound from './PageNotFound'
import PortFolio from './Portfolio'
import Register from './Register'
import UserDetails from './UserDetails'


 const Rotues=() =>{

    return (
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
}
export default Rotues
