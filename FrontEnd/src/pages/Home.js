import React, {useState, useEffect} from 'react';
import image from "../images/Home.jpg"
import rocket from "../images/rocket.png"
import rocket2 from "../images/rocket2.png"
import rocket3 from "../images/rocket3.png"
import rocket4 from "../images/rocket4.png"
import rocket5 from "../images/rocket5.png"
import styled from 'styled-components';

const Home_Section = styled.div`
  position: relative;
  margin: 0 0 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Home_h2 = styled.h2`
  position: relative;
  color: antiquewhite;
  font-size: 10vw;
  text-align: center;
  line-height: 0.7em;
`

const Home_sec = styled.div`
position: absolute;
  width: 70vw;
  padding: 10vw;
  background: darkslategrey;
`

const Home_rockets = styled.div`
  position: absolute;
  display: flex;
  //justify-content: flex-start;
  align-items: center;
`
const Home = () =>{

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    return(

        <div className="home" style = {{height: "100vh", width: "90vw"}}>
            <img src={image} alt="programing guy"
                 style={{position: "absolute", height: '100%', width: '100%'}}/>
            <Home_Section className = "homsec">
                   <Home_h2>
                        <span style={{fontSize:"0.40em", letterSpacing: '2px'}}>
                            Hi!
                        </span>
                        <span style={{fontSize:"0.60em", letterSpacing: '2px', color: "darkorange"}}>
                            I'm
                        </span>
                        <br/>
                            Kuba
                   </Home_h2>
            </Home_Section>

            <Home_sec>
                <Home_rockets className ="rocketssec">
                    <img src={rocket} alt="secRocket" style={{ marginLeft: "40vh",mmaxWidth: "100%", maxHeight: "100%", transform: `translateY(${offsetY *(-0.5)}px)`}}/>
                    <img src={rocket4} alt="Rocket4" style={{marginLeft: "50vh",mmaxWidth: "100%", maxHeight: "100%", transform: `translateY(${offsetY *(-2.7)}px)`}}/>
                    <img src={rocket5} alt="Rocket5" style={{marginLeft: "20vh",mmaxWidth: "100%", maxHeight: "100%",  transform: `translateY(${offsetY *(-1.6)}px)`}}/>

                </Home_rockets>
                <section style={{ transform: `translateY(${offsetY *(0.25)}px`}}>


                    <h2 style={{fontSize: "5.5em", color: "darkorange", marginBottom: "1vw"}}>
                        HELLO!!
                    </h2>
                    <p style={{fontSize: "1em", color: "white"}}>
                       --> This is my Portfolio. Fell free to look around.
                    </p>
                </section >

                <Home_rockets>
                    <img src={rocket2} alt = "rocket2"
                    style={{marginLeft: "10vh",maxWidth: "100%", maxHeight: "100%", transform: `translateY(${offsetY *(-1)}px)`}}
                    />
                    <img src={rocket} alt={"rocket3"}
                         style={{maxWidth: "100%", maxHeight: "100%",  transform: `translateY(${offsetY *(-3)}px)`}}
                    />
                </Home_rockets >

                <section style={{  marginLeft:"30vw", color: "white", transform: `translateY(${offsetY *(-0.5)}px`}}>
                    <p style={{fontSize: "2em"}}>
                        What You can see on the screen its called "Parallax Effect"<br/>
                    </p>
                    <p style={{fontSize: "1em", color: "indianred"}}>
                        Rockets are moving up when page is scrolled down
                    </p>
                </section>

            </Home_sec>
        </div>
    )
}

export default Home