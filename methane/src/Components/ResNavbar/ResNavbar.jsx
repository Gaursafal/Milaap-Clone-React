import React from 'react';
import {  NavLink, Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styles from './ResNavbar.module.css'
import SimpleMenu from "../DonatePage/SimpleMenu";
import { DataContext } from "../../Context/DataContextProvider";

const links = [

    {
        to: "/",
        title: "Home"
    },
    {
        to: "/crowdfunding/fundraisers",
        title: "Donate"
    },
    {
        to: "/lend",
        title: "Lend"
    },
    {
        to: "/story",
        title: "Success Story"
    },
    {
        to: "/contact-us",
        title: "Contact us"
    }
];

class ResNavbar extends React.Component {
    render(){
        const {loggedUserData,handleLogOut} = this.context
        console.log(loggedUserData)
        return (
            <div>
                <nav style={{overflow:"hidden", position:"fixed", width:"100%",top:0}} class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <Link style={{paddingRight:"20px"}} to="/">
                            <img src="https://assets.milaap.org/assets/milaap-logo-tiny-e1fe9eb152a9ab7297c3f9a194868904352a9fa2f19781ad8b39e4e18a372264.png" alt="logo" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {links.map((link) => (
                            <NavLink
                            exact
                            style={{ padding: 20, textDecoration:"none", color:"black"}}
                            activeStyle={{ backgroundColor:"#9c3353", color:"white"}}
                            key={link.to}
                            to={link.to}
                            >
                            {link.title}
                            </NavLink>
                        ))}
                        
                        </ul>
                        <Link style={{textDecoration:"none"}} to="/start" >
                            <div style={{backgroundColor:"#9c3353", color:"white", padding:"10px 30px 10px 30px", borderRadius:"20px"}} >Start a fundraiser</div>
                        </Link>
                        <div class="d-none d-lg-block" >
                        <SimpleMenu 
                            username={loggedUserData.username}
                            avatar={loggedUserData.avatar_img}
                            history={this.props.history}
                            handleLogout = {handleLogOut}
                        />
                        {loggedUserData.username}
                        </div>
                        <div class="d-none d-lg-block">
                        <Link style={{ paddingLeft: 20, textDecoration:"none", color:"black"}} to="/cart" >
                            <ShoppingCartIcon/>
                        </Link>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
    
}

ResNavbar.contextType = DataContext
export default ResNavbar;
