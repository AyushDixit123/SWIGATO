import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import {assets} from '../../assets/assets'
import { useState } from "react";
import Signup from "../Authentication_UI/Signup";

 
export function Navbar(){
    const [menu,setMenu]=useState("home");
    const [click,setClick]=useState(false);
    function handleclick(){
        setClick(true);
    }
    return(
        <div className="Navbar">
            <img src={assets.logo} alt="" />
            <ul className="navbar-menu">
                
            <li>
                <NavLink exact={true.toString()} to='/' activeClassName="active">home</NavLink>
            </li>
            <li>
                <NavLink exact={true.toString()} to='/about' activeClassName="active">about</NavLink>
            </li>
            <li>
                <NavLink exact={true.toString()} to='/contact-us' activeClassName="active">contact-us</NavLink>
            </li>
            </ul>

                
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot">
                        
                    </div>
                    </div>
                    <ul>
            <li>
              <Link to="/signup"><button>Sign up</button></Link>
            </li>
            </ul>
                   
                        
                    
                
            </div>
         
        </div>
    )
}
