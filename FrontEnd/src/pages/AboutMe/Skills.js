import React from 'react'
import styled from 'styled-components';
import Contact from "../Contact";


const Skills_h2 = styled.h2`
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
    background: linear-gradient(to left, red, lightgreen);
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

const Skills = () => {

    return(
        <div className='skills'>
            <Skills_h2>
                Some of my skills:
            </Skills_h2>

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

export default Skills
