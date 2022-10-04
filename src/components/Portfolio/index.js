import React, {useState} from 'react';
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Background from "../Background";
import {PortfolioContainer, PortfolioTitle} from "./PortfolioElements";


const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Background></Background>

            <PortfolioContainer>
                <PortfolioTitle>Welcome to the portfolio</PortfolioTitle>
            </PortfolioContainer>
        </>
    )
}


export default Portfolio;