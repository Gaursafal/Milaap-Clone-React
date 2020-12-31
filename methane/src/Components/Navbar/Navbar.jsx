import React from "react";
import {  NavLink, Link } from "react-router-dom";
import styled from 'styled-components';
import SimpleMenu from "../DonatePage/SimpleMenu";

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
    padding: 10px;
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
        
        return (
            <NavBarWrapper className="navbar" >
             
                 
                <NavLeft>
                     <Link to="/"><img src="https://assets.milaap.org/assets/milaap-logo-tiny-e1fe9eb152a9ab7297c3f9a194868904352a9fa2f19781ad8b39e4e18a372264.png" alt=""/></Link>
                    {links.map((link) => (
                        <NavLink
                        style={{ padding: "20px" }}
                        activeStyle={{ backgroundColor:"#9c3353"}}
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

                    <div style={{margin:"auto"}}>
                    <SimpleMenu history={this.props.history}/>vikash
                    </div>
                </RightLink>
            </NavBarWrapper>
        );
    }
    
}
export default Navbar
