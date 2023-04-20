import '../../css/pages/home.css'

import { Parallax } from 'react-scroll-parallax'

import Rocket from '../misc/rocket.js'
import About from './about.js'
import Projects from './projects.js'
import Contact from './contact.js'

import { useState, useEffect } from 'react'


function Home() {

    var sloganIndex = 0
    const slogan_texts = [
        "Software done beautifully"
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

                {/* ABOUT */}
                <About />
                

                <div className="transition-banner projects-transition-banner">
                    <div className="rocket-container">
                        <Parallax speed={1} translateX={['0vw', '-30vw']} translateY={['0vw', '-30vw']}>
                            <Rocket color="rgba(var(--yellow-color))" rotate="-45deg" />
                        </Parallax>
                    </div>

                    <div className="rocket-container">
                        <Parallax translateX={['0vw', '30vw']} translateY={['0vw', '30vw']}>
                            <Rocket color="rgba(var(--red-color))" rotate="135deg" />
                        </Parallax>
                    </div>

                    <h2>Previous projects</h2>
                </div>
                
                {/* PROJECTS */}
                <Projects />

                <div className="transition-banner contact-transition-banner">
                    <div className="rocket-container">
                        <Parallax speed={1} translateX={['0vw', '-30vw']} translateY={['0vw', '-30vw']}>
                            <Rocket color="rgba(var(--yellow-color))" rotate="-45deg" />
                        </Parallax>
                    </div>

                    <div className="rocket-container">
                        <Parallax translateX={['0vw', '30vw']} translateY={['0vw', '30vw']}>
                            <Rocket color="rgba(var(--red-color))" rotate="135deg" />
                        </Parallax>
                    </div>

                    <h2>Contact us</h2>
                </div>
                
                {/* CONTACT */}
                <Contact />
                

            </div>
        </div>
    )
}

export default Home
