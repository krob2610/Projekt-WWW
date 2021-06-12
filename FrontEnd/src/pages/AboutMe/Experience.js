import React from 'react'
import styled from "styled-components";
import Contact from "../Contact";

const ExperienceSlider = styled.div`
  display: flex;
  position: relative;
  top: 0;
  right: 0;
  animation: slider linear 10s infinite;
  @keyframes slider{
    0% {right: 0;}
    16% {right: 0;}
    33% {right: 100%;}
    49% {right: 100%;}
    66% {right: 200%;}
    82% {right: 200%;}
    100% {right: 0;}
    
  } 
`
const ExperienceSlide = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex-shrink: 0;
  padding: 10px;
  color: antiquewhite;
  `


const Slide_h1 = styled.h2`
  position: relative;
  color: darkorange;
  font-size: 3vw;
  text-align: center;
  line-height: 0.5em;
  top:15px;
  bottom: 20px;
`
const Slide_Time = styled.h2`
  position: relative;
  color: indianred;
  font-size: 1vw;
  text-align: center;
  
`

const Slide_work = styled.h2`
  position: relative;
  color: darkorange;
  font-size: 2vw;
  text-align: center;
  //margin-left: 50%;
  //top: 50px;
`

const Slide_opinion = styled.h2`
  position: relative;
  color: indianred;
  font-size: 2vw;
  font-style: italic;
  text-align: center;
  margin-left: 50%;
  top: 35px;
  
`
const Experience_h2 = styled.h2`
  position: relative;
  color: antiquewhite;
  font-size: 4vw;
  text-align: center;
  line-height: 0.5em;
`

const Experience = () => {
    return(
        <div className='experience' >
            <Experience_h2 >Here is some of My</Experience_h2>
            <Experience_h2>Work Experience</Experience_h2>
            <div style={{ margin: "10% 0 auto ",  width: "100%", height:"350px",overflow: "hidden"}}>
                <ExperienceSlider>
                    <ExperienceSlide>
                        <Slide_h1 >Intel</Slide_h1>
                        <Slide_Time>2018 - 2019</Slide_Time>
                        <Slide_work>Automation Developer</Slide_work>
                        <Slide_opinion>~  Best empolyee of the year</Slide_opinion>
                    </ExperienceSlide>
                    <ExperienceSlide>
                        <Slide_h1>Atos</Slide_h1>
                        <Slide_Time>2020-2022</Slide_Time>
                        <Slide_work>Software Engineer </Slide_work>
                        <Slide_opinion>~  Hard working</Slide_opinion>
                    </ExperienceSlide>
                    <ExperienceSlide>
                        <Slide_h1>Google</Slide_h1>
                        <Slide_Time>Since 2022</Slide_Time>
                        <Slide_work>Python Developer</Slide_work>
                        <Slide_opinion>~  Fast working</Slide_opinion>
                    </ExperienceSlide>
                </ExperienceSlider>
            </div>
        </div>
    )
}

export default Experience
