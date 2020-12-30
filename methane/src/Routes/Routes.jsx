import React from "react"
import {Route,Switch} from "react-router-dom"
import {DonatePage} from "../Components/DonatePage/DonatePage.jsx"

const Routes  = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={()=><h3>Home</h3>}/>
                <Route path="/crowdfunding/fundraisers" render={()=><DonatePage/>}/>
            </Switch>
        </div>
    )
}

export {Routes}