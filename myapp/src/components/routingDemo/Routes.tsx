import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
        <Switch>
            <Route path='/' component={Login} exact={true}/>
            <Route path='/login' component={Login}/> 
            <Route path='/portfolio' component={PortFolio}/> 
            <Route path='/userdetails/:name?' component={UserDetails}/> 
            <Route path='/register' component={Register}/> 
            <Route component={PageNotFound}/>
        </Switch>

    </BrowserRouter>
    )
}
export default Rotues
