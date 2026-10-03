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
                    <div className="introductionTextContainer">
    <span className="introductionText">
        Hi! I'm Shashank. I'm a <strong>Full-Stack Java Developer</strong> focused on
        building backend systems with <strong>Java and Spring Boot</strong>.
    </span>

    <span className="introductionText">
        I've completed a <strong>Frontend AI Engineering internship at FlyRank AI</strong>,
        contributed to <strong>open-source projects</strong>, and built and published a
        <strong> mobile application on Google Play Store</strong>.
    </span>

    <span className="introductionText">
        I enjoy building practical software, exploring <strong>AI-assisted development</strong>,
        and working with <strong>Linux and backend technologies</strong>. My other interests
        include <strong>ethical hacking</strong> and <strong>game development</strong>.
    </span>
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