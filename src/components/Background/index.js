import React from 'react';
import { Stars, Twinkling, BackgroundContainer, Clouds} from "./BackgroundElements";


const Background = () => {
    return (
        <BackgroundContainer>
            <Stars></Stars>
            <Twinkling></Twinkling>
            <Clouds></Clouds>
        </BackgroundContainer>
    )
}

export default Background;