import styled from 'styled-components';



export const HeroContainer = styled.div `
  display: flex;
  justify-content: left;
  align-items: flex-start;
  padding: 0;
  position: relative;
  z-index: 4;
  width: 100%;
  height: 100%;



  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
\` ;
`;


export const HeroGreeting = styled.h1 `
  color: mediumpurple;
  margin-left: 15%;
  margin-top: 15%;
  width: auto;
  margin-right: 0;
  position: relative;
  overflow: hidden;
`;


export const HeroText = styled.div `
  color: mediumpurple;
`;

export const HeroImg = styled.img `
  width: 500px;
  margin-top: 5%;
  position: relative;
  overflow: hidden;
`;

