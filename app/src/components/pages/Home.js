import '../../css/pages/home.css'
import '../../css/pages/about.css'
import '../../css/pages/team.css'
import '../../css/pages/projects.css'
import '../../css/pages/contact.css'

import { useState, useEffect } from 'react'

import Logo from '../misc/logo.js'


function Home() {

    var sloganIndex = 0
    const slogan_texts = [
        "We build apps",
        "We build websites",
        "We are Astry"
    ]

    // const [sloganIndex, setSloganIndex] = useState(0)
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
                var star_x = (pos_rand * 100 - 50) + "%"
                var star_y = -(pos_rand * 100 - 50) + "%"
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
            <div className='welcome'>

                <div className="welcome-bg"></div>
                
                <div className='welcome-header'>
                    <div className='header-logo'>
                        <div className="logo-animate">
                            <Logo />
                            <div className='boom'></div>
                            <div className='smoke'></div>
                        </div>
                    </div>
                    <div className='header-name box-text'>Astry</div>
                </div>
                
                <div className="welcome-body">
                    <div className='slogan-container'>
                        {starLocations.map((star, i) => (
                            <div className={"star star-" + star[0]} style={{
                                "left": star[1], 
                                "top": star[2], 
                                "animationDelay": (10 * star[0] * star[3]) + "s",
                                "animationDuration": (10 * star[0]) + "s"
                            }} />
                        ))}
                        <div className='slogan'><span>{slogan}</span></div>
                    </div>
                </div>
            
            </div>

            <div className='section-links'>
                <div className='section-links-inner'>
                    <a href="#about"><div className='section-link about box-text'>About</div></a>
                    <a href="#team"><div className='section-link team box-text'>Team</div></a>
                    <a href="#projects"><div className='section-link projects box-text'>Projects</div></a>
                    <a href="#contact"><div className='section-link contact box-text'>Contact</div></a>
                </div>
            </div>

            <div className='content'>

                <div id='about' className='section'>
                    <h1>About</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus. A condimentum vitae 
                        sapien pellentesque habitant. Diam maecenas ultricies mi eget. Integer feugiat scelerisque 
                        varius morbi enim nunc faucibus a pellentesque. Varius duis at consectetur lorem donec. 
                        Nam at lectus urna duis convallis convallis. Sagittis aliquam malesuada bibendum arcu vitae 
                        elementum curabitur vitae nunc. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. 
                        Cursus metus aliquam eleifend mi. Mauris augue neque gravida in fermentum et. Mattis enim ut 
                        tellus elementum.
                    </p>
                </div>

                <div id='team' className='section'>
                    <h1>Team</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus. A condimentum vitae 
                        sapien pellentesque habitant. Diam maecenas ultricies mi eget. Integer feugiat scelerisque 
                        varius morbi enim nunc faucibus a pellentesque. Varius duis at consectetur lorem donec. 
                        Nam at lectus urna duis convallis convallis. Sagittis aliquam malesuada bibendum arcu vitae 
                        elementum curabitur vitae nunc. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. 
                        Cursus metus aliquam eleifend mi. Mauris augue neque gravida in fermentum et. Mattis enim ut 
                        tellus elementum.
                    </p>
                </div>

                <div id='projects' className='section'>
                    <h1>Projects</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus. A condimentum vitae 
                        sapien pellentesque habitant. Diam maecenas ultricies mi eget. Integer feugiat scelerisque 
                        varius morbi enim nunc faucibus a pellentesque. Varius duis at consectetur lorem donec. 
                        Nam at lectus urna duis convallis convallis. Sagittis aliquam malesuada bibendum arcu vitae 
                        elementum curabitur vitae nunc. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. 
                        Cursus metus aliquam eleifend mi. Mauris augue neque gravida in fermentum et. Mattis enim ut 
                        tellus elementum.
                    </p>
                </div>

                <div id='contact' className='section'>
                    <h1>Contact</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus. A condimentum vitae 
                        sapien pellentesque habitant. Diam maecenas ultricies mi eget. Integer feugiat scelerisque 
                        varius morbi enim nunc faucibus a pellentesque. Varius duis at consectetur lorem donec. 
                        Nam at lectus urna duis convallis convallis. Sagittis aliquam malesuada bibendum arcu vitae 
                        elementum curabitur vitae nunc. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. 
                        Cursus metus aliquam eleifend mi. Mauris augue neque gravida in fermentum et. Mattis enim ut 
                        tellus elementum.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Home
