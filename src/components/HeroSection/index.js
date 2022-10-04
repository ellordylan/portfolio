import React from 'react';
import { HeroContainer, HeroGreeting, HeroText, HeroImg} from "./HeroElements";
import laptopGuy from '../../images/programmer.png'

const HeroSection = () => {
    return (
        <>
            <HeroContainer id="home">
                <HeroGreeting>
                    Hello! My name is Dylan Ellor
                    <HeroImg src={laptopGuy}/>

                </HeroGreeting>
                {/*<HeroGreeting>Whatsasd</HeroGreeting>*/}

                {/*<HeroText>*/}
                {/*</HeroText>*/}

            </HeroContainer>
        </>
    )
}


export default HeroSection;