import React from 'react'
import styled from "styled-components";
import Contact from "../Contact";

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

const Education_h2 = styled.h2`
  position: relative;
  color: antiquewhite;
  font-size: 4vw;
  text-align: center;
  line-height: 0.5em;
`

const Education = () => {
    return(
        <div className='education' style={{padding: "10px"}}>
            <Education_h2>
                Education:
            </Education_h2>
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

export default Education