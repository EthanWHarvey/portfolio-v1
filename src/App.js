import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div>
            <Particles options={particlesOptions} init={particlesInit}/>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
