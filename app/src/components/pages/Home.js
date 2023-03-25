import '../../css/pages/home.css'

import { useState, useEffect } from 'react';

import Logo from '../misc/logo.js'


function Home() {

    const height = window.innerHeight
    const width = window.innerWidth
    const path_points = [
        ["M ", [[1.5, 1.5]]],
        ["C ", [[0.5, 1.0], [0.3, 0.5], [30, 30]]],
    ]
    var path_str = ""
    path_points.forEach(stop => {
        path_str += stop[0]
        stop[1].forEach(point => {
            var x = point[0]>2 ? point[0] : point[0]*width
            var y = point[1]>2 ? point[1] : point[1]*height
            path_str += x + "," + y + " "
        })
    })
    const rocket_style = {
        "display": "block",
        "offsetPath": "path('" + path_str + "')", 
        "animation": "move 3s ease 0.1s 1 normal forwards"
    }

    const [animateLogo, setAnimateLogo] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimateLogo(true)
        }, 400)
    }, [])

    return (
        <div className="home">
            <div className="welcome">
                <div className="animate" style={animateLogo ? rocket_style : {}}>
                    <Logo />
                    {/* <div className='flames'>
                        {[...Array(100).keys()].map((i) => (
                            <div className='flame' style={{
                                "rotate": Math.random()*50-25 + 'deg',
                                "animationDelay": Math.random() + 's',
                            }} />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home
