import React, {useState, useReducer, useRef, useEffect} from 'react';
import styled from 'styled-components';
const Projects_h2 = styled.h2`
  position: relative;
  color: antiquewhite;
  font-size: 4vw;
  text-align: center;
  //line-height: 0.5em;
  letter-spacing: 6px;
`
const Projects_h3 = styled.h3`
  position: relative;
  color: darkorange;
  font-size: 3vw;
  text-align: center;
  line-height: 0.5em;
  letter-spacing: 6px;
`

const Projects_Text = styled.p`
  position: relative;
  color: antiquewhite;
  font-size: 2vw;
  padding-left: 2vw;
  padding-right: 2vw;
  //text-align: center;
  //line-height: 0.5em;
  //letter-spacing: 6px;
`

const Projects_Language = styled.h4`
  position: relative;
  color: #a11d4d;
  font-size: 3vw;
  padding-left: 2vw;
  //text-align: center;
  //line-height: 0.5em;
  letter-spacing: 6px;
`

const allData = new Array(80).fill(0).map((_val, i) => i+1);
const loadnumber = 5;

const reducer = (state, action) => {
    switch(action.type){
        case "start":
            return {...state, loading: true};           //..state kopia state
        case "loaded":
            return{
                ...state,
                loading: false,
                data: [...state.data, ...action.newData],
                more: action.newData.length === loadnumber,
                after: state.after + action.newData.length
            }

    }
}

const Projects = () =>{



    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        more:true,
        data: [],
        after: 0,
    });

    const {loading, data, after, more} = state;


    const load = () => {
        dispatch({type: "start"});

        const newData = allData.slice(after, after + loadnumber)
        setTimeout(() => {
            dispatch({type: "loaded", newData})
        }, 3000)
    };


    const loader = useRef(load)
    useEffect(()=>{
        loader.current = load;
    }, [load])

    const observer = useRef(new IntersectionObserver(entries => {
        const first = entries[0]

        if (first.isIntersecting){
            loader.current()

        }
        }, {threshold: 0.5}))

    const [element, setElement] = useState(null)


    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if(currentElement){
            currentObserver.observe(currentElement)
        }
        return () => {
            if( currentElement){
                currentObserver.unobserve(currentElement)
            }
        }
    }, [element])

    return(
        <div className="projects">
            <Projects_h2>Some of my projects</Projects_h2>
            <ul style={{margin: "0 auto", maxWidth: "700px", listStyle: "none"}}>
                {
                    data.map(row => (
                        <li key = {row} style={{margin: "4rem",
                            padding: "0 0 4rem ", background:"indianred",
                            border: "3px solid #3d2b1f ", borderRadius: "10px"}}>
                            <Projects_h3>{row} Project</Projects_h3>
                            <Projects_Language>Python/Java</Projects_Language>
                            <Projects_Text>Weather app is simple application made with python and java.
                                It allows user to select a city and choose date from calendar.
                                Then temperature, chance of the rain and, wind, and humidity is displayed to user.</Projects_Text>
                        </li>
                    ))
                }
                {loading && <li>Loading more data....</li>}

                {!loading && more &&
                (<li ref={setElement}>                  {/*kiedy loading = false*/}
                        end


                </li>)}

            </ul>
        </div>
    )


}

export default Projects