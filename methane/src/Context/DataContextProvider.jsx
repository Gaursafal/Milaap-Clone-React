import React, { Component } from "react"
import axios from "axios"

export const DataContext = React.createContext();

class DataContextProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuth:false,
            isLoading:false,
            error:false,
            fundData:[]
        }
    }

    //Donate page data
    getDonateData = () => {
        this.setState({
            isLoading:true
        })
        axios({
            url:"http://localhost:3004/fundraise"
        })
        .then(res => {
            this.setState({
                fundData:res.data
            })
           
        })
        .then(err => {
            this.setState({
                error:true
            })
           
        })
        
    }

    render(){
        const {isAuth,isLoading,error,fundData} = this.state
        const {getDonateData} = this
        const value = {getDonateData, isAuth,isLoading,error,fundData}
        return(
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export {DataContextProvider}