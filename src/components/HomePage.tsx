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
                        A passionate Java Developer with a 
                        strong focus on building robust 
                        backend systems using Spring Boot. 
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