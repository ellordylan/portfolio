import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import { FaForward } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtn,
    NavBtnLink,
    Blur
} from "./NavbarElements";
import About from "../About";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <FaForward/>
                        <h1>DE</h1>
                    </NavLogo>


                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/about">About Me</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/portfolio">Portfolio</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="/resume">Resume</NavLinks>
                        </NavItem>

                    </NavMenu>

                    <NavBtn>

                        <NavBtnLink href="https://github.com/ellordylan" target="_blank">Website Code</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            <Blur></Blur>
        </>
    )
};

export default Navbar;

