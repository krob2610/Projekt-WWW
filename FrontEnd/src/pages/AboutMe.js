import React, {useState, useEffect} from 'react'

// import java from '../images/java.png'
// import react from '../images/react.jpg'
// import python from "../images/python.png"
// import js from "../images/js.png"
// import education from "../images/education.jpg"
import styled from 'styled-components';


const Skils_h2 = styled.h2`
  position: relative;
  color: antiquewhite;
  font-size: 4vw;
  text-align: center;
  line-height: 0.5em;
`
const SkillsBox = styled.div`
  max-width: 60%;
  margin: 100px auto 0;
  
`
const SkillsBar = styled.div`
  position: relative;
  color: antiquewhite;
  letter-spacing: 1px;
  font-weight: 500;
  font-size: 16px;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
`
const Skillsspan = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 25px;
  background: black;
  border-radius: 50px;
  
  &::before{
    position: absolute;
    content: '';
    top: 6px;
    left: 5px;
    height: 50%;
    background: linear-gradient(to left, red, yellow);
    border-radius: 50px;
    animation: bar 5s ease;
  }
  
  @keyframes bar{
    from{
      width: 0;
    }
  }
  &.first{
    &::before {
    width: 90%;
    }}
  &.sec{
    &::before {
      width: 60%;
    }}
  &.third{
    &::before {
      width: 70%;
    }}
  &.forth{
    &::before {
      width: 60%;
    }}
  &.fifth{
    &::before {
      width: 50%;
    }}
  &.sixth{
    &::before {
      width: 55%;
    }}
`

export const Skills = () => {

    return(
        <div className='skills'>
            <Skils_h2>
                Some of my skills:
            </Skils_h2>

            <SkillsBox>
                <SkillsBar>
                    <h3>Python</h3><Skillsspan className = "first"></Skillsspan>
                </SkillsBar>
                <SkillsBar>
                    <h3>Java</h3><Skillsspan className = "sec"></Skillsspan>
                </SkillsBar>
                <SkillsBar>
                    <h3>C++</h3><Skillsspan className = "third"></Skillsspan>
                </SkillsBar>

                <SkillsBar>
                    <h3>HTML</h3><Skillsspan className = "forth"></Skillsspan>
                </SkillsBar>
                <SkillsBar>
                    <h3>CSS</h3><Skillsspan className = "fifth"></Skillsspan>
                </SkillsBar>
                <SkillsBar>
                    <h3>JS</h3><Skillsspan className = "sixth"></Skillsspan>
                </SkillsBar>
            </SkillsBox>
        </div>
    )}



const TimeLine = styled.section`
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  
  &::before{
    content: '';
    position: absolute;
    width: 6px;
    height: 100%;
    background: dimgrey;
    left: 50%;
  }
`
const TimeLineElement = styled.div`
  margin-bottom: 30px;
  width: 100%;
  position: relative;
  
  &:nth-child(odd){
    padding-left: calc(50% + 30px);
  }
  &:nth-child(even){
    padding-right: calc(50% + 30px);
    text-align: right;
  }
`
const TimeLineDot = styled.div`
  height: 20px;
  width: 20px;
  background: indianred;
  position: absolute;
  left: calc(50% - 6px);
  border-radius: 50%;
  top: 70px
`
const TimeLineDate = styled.div`
  color: indianred;
  font-size: 22px;
  margin: 5px 0px 10px;
`
const TimeLineText = styled.div`
  padding: 5px;
  border-radius: 8px;
  background: dimgrey;
  color: darkorange;
  text-align: center;
`


export const Education = () => {
    return(
        <div className='education' style={{padding: "10px"}}>
            <Skils_h2>
                Education:
            </Skils_h2>
            <TimeLine>

                <TimeLineElement>
                    <TimeLineDot> </TimeLineDot>
                    <TimeLineDate>2018</TimeLineDate>
                    <TimeLineText>
                        <h2>Matematyka Komputerowa</h2>
                        <p>Uniwersytet Jagielloński
                        </p>
                    </TimeLineText>
                </TimeLineElement>

                <TimeLineElement>
                    <TimeLineDot> </TimeLineDot>
                    <TimeLineDate>2021 </TimeLineDate>
                    <TimeLineText>
                        <h2>Computer science</h2>
                        <p>University of Delhi</p>
                    </TimeLineText>
                </TimeLineElement>

                <TimeLineElement>
                    <TimeLineDot> </TimeLineDot>
                    <TimeLineDate>2023</TimeLineDate>
                    <TimeLineText>
                        <h2>Google Academy</h2>
                        <p>Google</p>
                    </TimeLineText>
                </TimeLineElement>

                <TimeLineElement>
                    <TimeLineDot> </TimeLineDot>
                    <TimeLineDate>2024</TimeLineDate>
                    <TimeLineText>
                        <h2>Apple Academy</h2>
                        <p>Apple</p>
                    </TimeLineText>
                </TimeLineElement>
            </TimeLine>


        </div>
    )
};

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

export const Experience = () => {
    return(
        <div className='experience' >
            <Skils_h2 >Here is some of My</Skils_h2>
            <Skils_h2>Work Experience</Skils_h2>
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
