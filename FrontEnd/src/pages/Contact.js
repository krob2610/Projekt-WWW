import React from 'react';
import styled from 'styled-components';

const ContactBox = styled.div` 
  //margin-top: 50%;
  width: 350px;
  height: 100%;
  margin: auto;
  background: indianred;
  border-radius: 10px;
  padding: 30px;
`
const InputElement = styled.div`
  //margin: auto;
  margin-bottom: 10px;

  //border: 1px solid; 
  //border-radius: 10px;
`

const InputElementText = styled.input`
  background: antiquewhite;
  width: 100%;
  font-size: 2.5vh;
  //padding: 10px;
`
const Contact_h2 = styled.h2`
  position: relative;
  color: darkorange;
  font-size: 4vw;
  text-align: center;
  //line-height: 0.5em;
  letter-spacing: 6px;
  
`
const ButtonEl = styled.input`
  display: block;
  margin: 0 auto;
  padding: 10px;
  font-size: 2.5vh;
  width: 80%;
  background: darkorange;
  border-radius: 20px;
  
`
const Contact = () =>{
    return(
            <div>
                {/*<Contact_h2 style={{fontSize:"3vh", color: "antiquewhite"}}>Here You can</Contact_h2>*/}
                <Contact_h2 >Contact Me</Contact_h2>
                <ContactBox>
                    <h1 style={{marginBottom:"2vh", textAlign:"center", color: "antiquewhite"}}> Just fill this form</h1>
                    <form>
                        <InputElement>
                            <InputElementText type="text" placeholder="Name" />
                        </InputElement>
                        <InputElement>
                            <InputElementText type="text" placeholder="Topic" />
                        </InputElement>
                        <InputElement>
                            <InputElementText type="text" placeholder="Company" />
                        </InputElement>
                        <InputElement>
                            <InputElementText type="text" placeholder="Email" />
                        </InputElement>
                        <InputElement>
                            <textarea placeholder="Put your message here" style={{ border: "2px solid", fontSize: "2vh", marginTop: "20px", resize: "none", height: "180px", width: "100%", background: "antiquewhite"}}></textarea>
                        </InputElement>

                        <ButtonEl type="submit" ></ButtonEl>
                    </form>
                </ContactBox>

            </div>


    )
}

export default Contact