import React, {useState} from 'react';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Background from "../Background";
import {ResumeContainer, ResumeTitle} from "./ResumeElements";



const Resume = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Background></Background>

            <ResumeContainer>
                <ResumeTitle>Welcome to the resume</ResumeTitle>
            </ResumeContainer>
        </>
    )
}


export default Resume;