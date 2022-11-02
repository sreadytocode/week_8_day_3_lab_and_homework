import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 1.5em;

`

const NavBar = () => {
    return ( 
        <NavLinks>
            <li>
                <Link to="/items">All Microphones</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/basket">Basket</Link>
            </li>
        </NavLinks>
     );
}
 
export default NavBar;