import '../../css/pages/home.css'
import '../../css/pages/about.css'
import '../../css/pages/team.css'
import '../../css/pages/projects.css'
import '../../css/pages/contact.css'

import Logo from '../misc/logo.js'


function Home() {

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
                        <div className='slogan'>
                            We build apps
                        </div>
                    </div>
                </div>
            
            </div>

            <div className='sections'>
                <div className='sections-inner'>
                    <div className='box-text'>About</div>
                    <div className='box-text'>Team</div>
                    <div className='box-text'>Projects</div>
                    <div className='box-text'>Contact</div>
                </div>
            </div>

            <div className='about'>
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

            <div className='team'>
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

            <div className='projects'>
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

            <div className='contact'>
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
    )
}

export default Home
