// import React from 'react';
// import {NavLink} from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <>
        
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">Navbar</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                     <NavLink className="nav-Nav active" aria-current="page" to="/">Home</NavLink>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                     </li>
//                     <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         Dropdown
//                     </a>
//                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a className="dropdown-item" to="/" >Action</a></li>
//                         <li><a className="dropdown-item" href="#">Another action</a></li>
//                         <li><hr className="dropdown-divider"/></li>
//                         <li><a className="dropdown-item" href="#">Something else here</a></li>
//                     </ul>
//                     </li>
//                     <li className="nav-item">
//                     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//                     </li>
//                 </ul>
//                 <form className="d-flex">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                     <button className="btn btn-outline-success" type="submit">Search</button>
//                 </form>
//                 </div>
//             </div>
//             </nav>
            
//         </>
//     );
// }

// export default Navbar;

import React from "react";
import {  NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
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
                        exact
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
