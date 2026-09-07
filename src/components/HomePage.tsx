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
                        <span className='introductionText'>Hi! I'm Shashank. I'm a <strong>Full stack Java Developer</strong> with expertise in building backend systems using <strong>Spring Boot</strong>.</span>
                        <span className='introductionText'>I have made <strong>open source contributions</strong>, 
                            participated in hackathons, and developed and published mobile app to 
                            <strong> Google Play Store</strong> as well.</span>
                        <span className='introductionText'>I know how to use various Linux distros (like <strong>Mint</strong> and <strong>RedHat</strong>). 
                        And my interests include <strong>ethical hacking</strong> and <strong>game development</strong>.</span>
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