import React, {useState} from 'react';
import {AboutContainer, AboutTitle} from "./AboutElements";
import Background from "../Background";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";


const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Background/>

            <AboutContainer>
                <AboutTitle>Welcome to the about page</AboutTitle>
            </AboutContainer>

        </>

    )
};

export default About;