import React, { Component } from "react"
import { DataContext } from "../../Context/DataContextProvider"



class Cart extends Component{
    render(){
        const {cartArray}  = this.context
        return(
            <div style={{margin:"100px 100px"}} >
                <h3>Lend COmpleted</h3>
                {
                    cartArray?.map((item)=>{
                        return(
                            <div style={{display:"flex",padding:"20px" ,border:"1px solid gray",margin:"10px" }}>
                                 <div>
                                   <img width="100px" src={item.img} alt=""/>
                                </div>
                                <div style={{margin:"auto"}}>
                                {item.support_name}
                                </div >
                                <div style={{margin:"auto"}}>
                                   Rs.{item.goal-item.raised}
                                </div>
                                
                            </div>
                        )
                    })
                }
               
            </div>
        )
    }
 
}

Cart.contextType = DataContext
export {Cart}