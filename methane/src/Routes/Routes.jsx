import React from "react"
import {Route,Switch} from "react-router-dom"
import {DonatePage} from "../Components/DonatePage/DonatePage"
import HomePage from "../Components/HomePage/HomePage"
import Navbar from "../Components/Navbar/Navbar"

const Routes  = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" exact render={()=><HomePage/>}/>
                <Route path="/crowdfunding/fundraisers" render={()=><DonatePage/>}/>
            </Switch>
        </div>
    )
}

export {Routes}