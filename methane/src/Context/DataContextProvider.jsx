import React, { Component } from "react"

export const DataContext = React.createContext();

class DataContextProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuth:false,
            isLoading:false,
            error:false
        }
    }
    render(){
        const {isAuth,isLoading,error} = this.state
        const value = {isAuth,isLoading,error}
        return(
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export {DataContextProvider}