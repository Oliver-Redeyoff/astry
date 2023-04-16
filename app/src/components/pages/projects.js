import '../../css/pages/projects.css'

import Fade from 'react-reveal/Fade'

import creativebook from '../../assets/creativebook.png'

import { useState, useEffect } from 'react'


function Projects() {

    return (
        <div className='projects'>
            <Fade fraction={0.5}>
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
    )

}

export default Projects