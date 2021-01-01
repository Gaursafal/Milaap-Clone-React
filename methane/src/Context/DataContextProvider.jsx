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
            loggedUserData:null,
            fundData:[],
            userData:null,
            lendData:[],
            cartArray:[]
        }
    }

    authenticateUser=(data) =>{
        console.log(data)
        this.setState({
            isLoading:true
        })
        let { email, password } = data;
        let { usersData } = this.state;
        let auth = false;

        for (let i = 0; i < usersData.length ; i++) {
            
            if (usersData[i].email === email && usersData[i].password === password) {
                  console.log("looged")
                    this.setState({
                        isAuth: true,
                        isLoading:false,
                        loggedUserData:usersData[i]
                    }); 
                    auth = true   
                    break  
            }

            else{
                if(usersData[i].email === email && usersData[i].password !== password){

                    this.setState({
                        error: true
                    }); 
                    auth = true;
                    break 
                }
            }
        }
        return auth
    }
    
    componentDidMount() {
        this.setState({
            isLoading: false,
        });

        axios
            .get("http://localhost:3004/users")

            .then((res) => {
                
                this.setState({
                    
                    usersData: res.data,
                    isLoading: false,
                });
            })

            .catch(() =>
                this.setState({
                    error: true,
                    isLoading: false,
                })
            );
           
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
                isLoading:false,
                fundData:res.data
            })
           
        })
        .then(() => {
            this.setState({
                error:true
            })
           
        })
        
    }

    getDonateId = (id) => {
        const { fundData } = this.state;
        const newData = fundData.find((item) => item.support_name === id);
        return newData;
    };

    getLendData = () =>{
        this.setState({
            isLoading:true
        })
        axios({
            url:"http://localhost:3004/fundDetails"
        })
        .then(res => {
            this.setState({
                isLoading:false,
                lendData:res.data
            })
           
        })
        .then(() => {
            this.setState({
                error:true
            })
           
        })
    }
    handleLogOut = () =>{
        this.setState({
            isAuth:false
        })
    }
    addToCart = (id) =>{
        const {lendData} = this.state
        //console.log(lendData)
        const {cartArray} = this.state
        const newData = lendData.find((item)=>item.lend_id===id)
        //console.log(newData)
        this.setState({
            cartArray:[...cartArray,newData]
        })
    }

    render(){
        const {isAuth,isLoading,error,fundData,loggedUserData,usersData,lendData,cartArray} = this.state
       // console.log(usersData,loggedUserData,lendData)
        const {authenticateUser,getDonateData,getDonateId,getLendData,handleLogOut,addToCart} = this
        const value = {authenticateUser,getDonateData,getDonateId,getLendData,handleLogOut,addToCart, isAuth,isLoading,error,fundData,loggedUserData,usersData,lendData,cartArray}
        return(
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export {DataContextProvider}