import React, { Component } from "react"
import {Route,Switch} from "react-router-dom"
import {DonatePage} from "../Components/DonatePage/DonatePage"
import { ViewFund } from "../Components/DonatePage/ViewFund"
import HomePage from "../Components/HomePage/HomePage"
import Login from "../Components/LoginPage/Login"
import Navbar from "../Components/Navbar/Navbar"
import Register from "../Components/RegistrationPage/Register"
import { PrivateRoute } from "./PrivateRoute"

class Routes extends Component {
    render(){
        return (
            <div>
                 <Route path="/login" exact render = {()=><Login />} />
    
                 <Route path="/reg"  exact render = {(props)=><Register {...props}/>} />
                 <PrivateRoute path="/"  Component={Navbar}/>
                 
                <Switch>
                    <Route  path="/" exact render={()=><HomePage/>}/>
                    <PrivateRoute  path="/crowdfunding/fundraisers" exact Component={DonatePage}/>
                    <PrivateRoute  path="/fundraisers/:support_name" exact Component={ViewFund}/>
                </Switch>
            </div>
        )
    }
}

export {Routes}