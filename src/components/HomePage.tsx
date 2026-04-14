import '@styles/HomePage.css';
import { ReactTyped } from 'react-typed';
import type { ReferenceProp } from '@/types/ReferenceProp';
import profilePhoto from '@assets/Profile Photo.jpeg';

export default function HomePage({ reference }: ReferenceProp) {
    return (
        <div className="homePageContainer" ref={reference}>
            <div className='introductionProfilePhotoContainer'>
                <div className='profilePhotoTypewriterContainer'>
                    <img src={profilePhoto} className='profilePhoto' />
                    <ReactTyped
                        strings={[
                            "Hi there!", "I'm Shashank"
                        ]}
                        typeSpeed={70}
                        backSpeed={70}
                        loop
                        className='typewriter'
                    />
                </div>
                <div className='aboutMeFocusContainer'>
                    <div className='introductionTextContainer'>
                        <span className='introductionText'>Hi! I'm Shashank.</span>
                        <span className='introductionText'>I'm a Full stack Java Developer with expertise in building backend systems using Spring Boot.</span>
                        <span className='introductionText'>I use Linux BTW. Currently I'm on Linux Mint.</span>
                        <span className='introductionText'>I have published my own Java package (CLI tool) to Maven Central.</span>
                        <span className='introductionText'>My interests include ethical hacking and game development as well.</span>
                    </div>

                    {/* <div className='focusContainer'>
                        <div className='focusNamePercentage'>
                            Frontend (30%)
                        </div>
                        <div className='focusNamePercentage'>
                            Backend (70%)
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}