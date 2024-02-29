import './index.scss';
import React from 'react';

const AboutMe = () => {
    return(
        <div className='AboutMeWrapper'>
            <div className="AboutSection">
                <h1>About Me</h1>
                <div>
                    Pragmatic software engineer with 3 years of hands-on experience in Full-Stack
                    Development. Proficient with web based concepts to translate complex requirements into
                    practical, efficient, and scalable software solutions. Committed to continuous improvement
                    of myself mentally and physically. Through learning from failure and repetition I continue
                    to grow exponentially as a programmer.
                </div>
                <p className={"Title"}>Full Stack Software Developer</p>
                <p className={"Description"}> 
                <p>Location: Charlotte, North carolina</p>
                    Welcome to my portfolio site! I am a passionate programmer with expertise in React and I'm eagerly seeking new job opportunities <br></br>
                    I have front end applications, Rust smart contracts and video games amde with the Godot Game Engine (C#/GDScript).
                </p>
                <div className={"Animation"}></div>
            </div>
        </div>
    );
};

export default AboutMe;