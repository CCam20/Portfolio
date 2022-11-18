import React from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components";


const NavContainer = styled.ul`
background: darkgrey;
display: flex;
justify-content: space-evenly;
align-items: end ;
padding: 1em;
list-style-type: none;
text-decoration: none`

const NavLinks = styled.li`
font-size:1 rem;
color: white;
text-shadow: none;
a:visited {color: white}
a:hover {color: black}
list-style-type: none;
text-decoration: none`


const NavBar = () => {
  return (
    <>
        <NavContainer>
            <NavLinks>
                <Link to="/">Bio</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/projects">Projects</Link>
            </NavLinks>       
        </NavContainer>
    </>
  )
}

export default NavBar