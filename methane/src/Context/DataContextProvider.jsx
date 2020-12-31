import React, { Component } from "react"
import axios from 'axios'

export const DataContext = React.createContext();

class DataContextProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuth:false,
            isLoading:false,
            error:false,
            data:[],
            details:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3004/data")
        .then(res=> {
            this.setState({
                data: res.data
            })
        })
        axios.get("http://localhost:3004/details")
        .then(res=> {
            this.setState({
                details: res.data
            })
        })
    }

    render(){
        const {isAuth,isLoading,error, data, details} = this.state
        console.log(data)
        const value = {isAuth,isLoading,error, data, details}
        return(
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export {DataContextProvider}