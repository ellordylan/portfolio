import styled from 'styled-components';
import { keyframes } from "styled-components";
import star from '../../images/stars.png'
import cloud from '../../images/clouds.png'
import twinkle from '../../images/twinkling.png'


export const cloudAnimation = keyframes `
  from {background-position: 0 0;}
  to {background-position: 10000px 0}
`


export const twinkleAnimation = keyframes `
  from {background-position: 0 0;}
  to {background-position: -10000px 5000px}
`

export const BackgroundContainer = styled.div `
  margin: 0;
  padding: 0;
`

export const Stars = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;

  background: #000 url(${star}) repeat top center;
  background-size: cover;
  z-index: 0;
`


export const Twinkling = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  
  background: transparent url(${twinkle}) repeat top center;
  z-index: 1;
  animation-name: ${twinkleAnimation};
  animation-duration: 200s;
  animation-iteration-count: infinite;
  animation-timing-function: linear ;
  opacity: .75;
`

export const Clouds = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  
  background: transparent url(${cloud}) repeat top center;
  z-index: 2;
  animation-name: ${cloudAnimation};
  animation-duration: 200s;
  animation-iteration-count: infinite;
  opacity: .2;
`