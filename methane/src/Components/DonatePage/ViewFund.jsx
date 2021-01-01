import React, { Component } from "react"
import { DataContext } from "../../Context/DataContextProvider"

class ViewFund extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){

        return(
            <div>
                <h3>view Fund</h3>
            </div>
        )
    }
   
}


ViewFund.contextType = DataContext
export {ViewFund}