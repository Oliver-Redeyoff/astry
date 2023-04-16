import '../../css/pages/about.css'

import Fade from 'react-reveal/Fade'

import { useState, useEffect } from 'react'


function About() {

    return (
        <div className="about">

            <div className="dialog">
                👋 Hey there! Are you looking for some <span className='multicolored-text thick'>software</span>?
                <br /><br />
                We might be able to help you!
            </div>

            <div className="work-categories">
                <Fade fraction={1}>
                    <div className="work-category">
                        <div className="icon">
                            <i className="fa-solid fa-microchip"></i>
                        </div>
                        <div className="description">With over 10 years of experience working with the newest and best 
                        technologies, we will make sure your software is built using the best technologies available.</div>
                    </div>
                </Fade> 
                
                <Fade fraction={1} delay={300}>
                    <div className="work-category">
                        <div className="icon"><i className="fa-solid fa-palette"></i></div>
                        <div className="description">We realise the importance of great design when developing a user 
                        interface, and keep this in mind for the entire duration of product development.</div>
                    </div>
                </Fade>
                
                <Fade fraction={1} delay={600}>
                    <div className="work-category">
                        <div className="icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
                        <div className="description">We provide flexible support options to ensure that your product 
                        stays up to date with fixes and new content.</div>
                    </div>
                </Fade>
            </div>

        </div>
    )

}

export default About