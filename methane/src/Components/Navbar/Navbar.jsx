import React from "react";
import {  NavLink, Link } from "react-router-dom";
import styled from 'styled-components';
import { DataContext } from "../../Context/DataContextProvider";
import SimpleMenu from "../DonatePage/SimpleMenu";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBarWrapper = styled.div`
    overflow:hidden;
    position: fixed;
    background-color: white;
    width:100%;
    top:0;
    height: 80px;
   
    a {
        text-decoration: none;
        color: black;
    }

`
const NavLeft = styled.div`
    padding: 20px;

    &.navleft > * {
        padding-right: 20px;
    }
`

const RightLink = styled.div`
    display: flex;
    padding: 10px;
    margin-right: 20px;
    &.rightlink > *{
        padding: 10px;
        
    }
    &.rightlink > div{
        margin-left: -22px;
    }
    &.rightlink > * > div {
        background-color: #9c3353;
        padding: 10px 40px 10px 40px;
        color: white;
        border-radius:30px;
        margin-right: 100px;
        margin-top: -10px;
        font-size: 20px
    }
`

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
        to: "/pricing",
        title: "Pricing"
    },
    {
        to: "/contact-us",
        title: "Contact us"
    }
];

class Navbar extends React.Component {
    render(){
        const {loggedUserData,handleLogOut} = this.context
        return (
            <NavBarWrapper className="navbar" >
                <NavLeft className="navleft" >
                    <Link to="/">
                        <img src="https://assets.milaap.org/assets/milaap-logo-tiny-e1fe9eb152a9ab7297c3f9a194868904352a9fa2f19781ad8b39e4e18a372264.png" alt="logo" />
                    </Link>
                    {links.map((link) => (
                        <NavLink
                        exact
                        style={{ padding: 20}}
                        activeStyle={{ backgroundColor:"#9c3353", color:"white"}}
                        key={link.to}
                        to={link.to}
                        >
                        {link.title}
                        </NavLink>
                    ))}
                </NavLeft>
                
                <RightLink className="rightlink" >
                    
                    <Link to="/start" >
                        <div>Start a fundraiser</div>
                    </Link>
                      
                    <Link to="/cart" >
                        <ShoppingCartIcon/>
                    </Link>
                    <div style={{margin:"auto"}}>
                    <SimpleMenu 
                        username={loggedUserData.username}
                        avatar={loggedUserData.avatar_img}
                        history={this.props.history}
                        handleLogout = {handleLogOut}
                    />
                    {loggedUserData.username}
                    </div>
                    
                  
                   
                    
                </RightLink>
                
                <img src="https://static.thenounproject.com/png/7352-200.png" alt=""/>
                   
              
            </NavBarWrapper>
        );
    }
    
}
Navbar.contextType = DataContext
export default Navbar
