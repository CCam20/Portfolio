import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import styled from "styled-components";


const NavContainer = styled.ul`
background: #b3ffb3;
display: flex;
justify-content: space-evenly;
align-items: end ;
padding: 1em;
list-style-type: none;`

const NavLinks = styled.li`
font-size:1 rem;
color: #00802b;
text-shadow: none;
a:visited {color: #00802b}
a:hover {color: black}
`

const NavBar = () => {
  return (
    <>
        <NavContainer>
            <NavLinks>
                <Link to="/">Home</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/projects">Projects</Link>
            </NavLinks>       
        </NavContainer>
    </>
  )
}

export default NavBar