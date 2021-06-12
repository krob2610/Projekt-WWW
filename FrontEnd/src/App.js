import React, { Component } from 'react';
import './App.css';
import Menu from "./MenuFolder/Menu";
import {
    Route,
    HashRouter,
    Switch
} from "react-router-dom";

import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Skills from "./pages/AboutMe/Skills";
import Education from "./pages/AboutMe/Education";
import Experience from "./pages/AboutMe/Experience";

class App extends Component {

    render() {
        return (
            <HashRouter>
                <Menu />
                <Switch>
                    <Route path = '/' exact component={Home} />
                    <Route path = '/aboutme' exact component={Home} />
                    <Route path = '/aboutme/skills' exact component={Skills} />
                    <Route path = '/aboutme/education' exact component={Education} />
                    <Route path = '/aboutme/experience' exact component={Experience} />
                    <Route path = '/projects' exact component={Projects} />
                    <Route path = '/contact' exact component={Contact} />
                </Switch>
            </HashRouter>

        );
    }


}




export default App;