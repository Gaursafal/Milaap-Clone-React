import React, { Component } from "react"
import {Route,Switch} from "react-router-dom"
import CardDetails from "../Components/CardDetails/CardDetails"
import { Cart } from "../Components/Cart/Cart"
import {DonatePage} from "../Components/DonatePage/DonatePage"
//import { ViewFund } from "../Components/DonatePage/ViewFund"
import Footer from "../Components/Footer/Footer"
import HomePage from "../Components/HomePage/HomePage"
import LendPage from "../Components/LendPage/LendPage"
import Login from "../Components/LoginPage/Login"
import Navbar from "../Components/Navbar/Navbar"
import Register from "../Components/RegistrationPage/Register"
import SuccessStory from "../Components/SuccesStory/SuccessStory"
import { PrivateRoute } from "./PrivateRoute"

class Routes extends Component {
    render(){
        return (
            <div>
                <Route path="/login" exact render = {()=><Login />} />
    
                <Route path="/reg"  exact render = {(props)=><Register {...props}/>} />
                 <PrivateRoute path="/"  Component={Navbar}/>
                 {/* <PrivateRoute path="/"  Component={NavigationBar}/> */}
                
                <Switch>
                    <Route  path="/" exact render={()=><HomePage/>}/>
                    <PrivateRoute  path="/crowdfunding/fundraisers" exact Component={DonatePage}/>
                    <PrivateRoute  path="/fundraisers/:support_name" exact Component={CardDetails}/>
                    <PrivateRoute  path="/lend" exact Component={LendPage}/>
                    <PrivateRoute  path="/cart" exact Component={Cart}/>
                    <PrivateRoute path="/story" exact Component={SuccessStory} />
                </Switch>
                <PrivateRoute path="/"  Component={Footer}/>
            </div>
        )
    }
}

export {Routes}