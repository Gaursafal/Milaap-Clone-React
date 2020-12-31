import React from "react"
import {Route,Switch} from "react-router-dom"
import {DonatePage} from "../Components/DonatePage/DonatePage"
import { ViewFund } from "../Components/DonatePage/ViewFund"
import HomePage from "../Components/HomePage/HomePage"
import Navbar from "../Components/Navbar/Navbar"

const Routes  = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" exact render={()=><HomePage/>}/>
                <Route path="/crowdfunding/fundraisers" render={()=><DonatePage/>}/>
                <Route path="/fundraisers/:support_name" render={(props) => <ViewFund {...props} />}/>
            </Switch>
        </div>
    )
}

export {Routes}