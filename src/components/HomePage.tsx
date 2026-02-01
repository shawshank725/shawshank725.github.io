import '@styles/HomePage.css';
import {ReactTyped } from 'react-typed';
import type { ReferenceProp } from '@/types/ReferenceProp';
import profilePhoto from '@assets/Profile Photo.jpeg';

export default function HomePage({reference}: ReferenceProp) {
    return (
        <div className="homePageContainer" ref={reference}>
            <div className='introductionProfilePhotoContainer'>
                <div className='profilePhotoTypewriterContainer'>
                    <img src={profilePhoto} className='profilePhoto'/>
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
                    <span className='introductionText'>
                        I'm a Full stack Java Developer obsessed with
                        building backend systems using Spring Boot. 
                        I have published my own Java package (CLI tool) to Maven Central.
                        My interests include ethical hacking and game development as well.
                    </span>
                    <div className='focusContainer'>
                        <div className='focusNamePercentage'>
                            Frontend (30%)
                        </div>
                        <div className='focusNamePercentage'>
                            Backend (70%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}