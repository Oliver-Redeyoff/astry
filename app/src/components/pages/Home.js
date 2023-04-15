import '../../css/pages/home.css'
import '../../css/pages/about.css'
import '../../css/pages/projects.css'
import '../../css/pages/contact.css'

import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import { Parallax } from 'react-scroll-parallax'

import Rocket from '../misc/rocket.js'
import creativebook from '../../assets/creativebook.png'


function Home() {

    var sloganIndex = 0
    const slogan_texts = [
        "We build software"
    ]

    const [slogan, setSlogan] = useState("")
    const [starLocations, setStarLocations] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            updateSloganText("")
        }, 3000)

        var starCounts = [150, 100, 50]
        var temp = []
        for (var level=0 ; level<3 ; level++) {
            for (var p=0 ; p<starCounts[level] ; p++) {
                var pos_rand = Math.random()
                var star_x = (pos_rand * 106 - 53) + "%"
                var star_y = -(pos_rand * 106 - 53) + "%"
                var star_delay_factor = Math.random()
                temp.push([level+1, star_x, star_y, star_delay_factor])
            }
        }
        setStarLocations(temp)

        return () => {clearTimeout(timer)}
    }, [])

    function updateSloganText(currentSloganText) {
        var sloganTextAim = slogan_texts[sloganIndex]

        if (currentSloganText == sloganTextAim) {
            sloganIndex += 1
            if (sloganIndex >= slogan_texts.length) {
                return
            } else {
                setTimeout(() => {updateSloganText(currentSloganText)}, 3000)
            }
        } else {
            var new_slogan_text = ""

            // figure out if we need to remove a letter of add one
            var remove_letter = false
            if (currentSloganText.length != 0) {
                for (var i=0 ; i<currentSloganText.length ; i++) {
                    if (currentSloganText.charAt(i) != sloganTextAim.charAt(i)) {
                        remove_letter = true
                    }
                }
            }
        
            if (remove_letter == true) {
                new_slogan_text = currentSloganText.slice(0, currentSloganText.length - 1)
            } else {
                var next_letter = sloganTextAim.charAt(currentSloganText.length)
                new_slogan_text = currentSloganText + next_letter
            }

            setSlogan(new_slogan_text)

            setTimeout(() => {updateSloganText(new_slogan_text)}, 120)

        }
    }

    return (
        <div className="home">

            {/* HEADER */}
            <div className='header'>
                <div className='header-logo'>
                    <div className="logo-animate">
                        <Rocket />
                        <div className='smoke'></div>
                    </div>
                </div>
                <div className='header-name box-text'>Astry</div>
                {/* <div className='section-links'>
                    <a href="#about"><div className='section-link about box-text'>About</div></a>
                    <a href="#projects"><div className='section-link projects box-text'>Projects</div></a>
                    <a href="#contact"><div className='section-link contact box-text'>Contact</div></a>
                </div> */}
            </div>

            {/* WELCOME */}
            <div className='welcome'>

                <div className="stars-container">
                        {starLocations.map((star, i) => (
                            <div className={"star star-" + star[0]} style={{
                                "left": star[1], 
                                "top": star[2], 
                                "animationDelay": (-10 * star[0] * star[3]) + "s",
                                "animationDuration": (10 * star[0]) + "s"
                            }} />
                        ))}
                </div>

                <div className="boom-container">
                    <div className='boom'></div>
                </div>
                
                <div className="welcome-body">
                    <div className='slogan-container'>
                        <h1 className='slogan multicolored-text'><span>{slogan}</span></h1>
                    </div>
                    <div className='scroll-indicator'><i className="fa-solid fa-arrow-down"></i></div>
                </div>
            
            </div>
            
            {/* CONTENT */}
            <div className='content'>
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

                <div className="projects">
                    
                    <div className="transition-banner">
                        <div className="rocket-container">
                            <Parallax translateX={['0vw', '-50vw']} translateY={['0vw', '-50vw']} translate>
                                <Rocket color="rgba(var(--yellow-color))" rotate="-45deg" />
                            </Parallax>
                        </div>

                        <h2>Previous projects</h2>
                    </div>
                    
                    <div className="projects-inner">
                        <Fade fraction={1} delay={200}>
                            <div className="previous-projects">
                                <div className="previous-project">
                                    <div className="preview">
                                        <img className='bg' src={creativebook}></img>
                                    </div>
                                    <div className="description">
                                        <h3>Creative Book Northumberland</h3>
                                        <div className="body">
                                            This website was built in collaboration with Northumberland county to provide a space 
                                            for creatives located in the area to advertise their services.
                                        </div>
                                        <div className="techs">
                                            <div className='tech'>React</div>
                                            <div className='tech'>Google cloud</div>
                                            <div className='tech'>Material UI</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
