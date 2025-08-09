import '@styles/NavigationBar.css';
import githubIcon from "@assets/github/github-mark.png";
import linkedIcon from "@assets/linkedin/InBug-White.png";

type NavigationProps = {
    homePageRef: React.RefObject<HTMLDivElement | null>;
    skillsPageRef: React.RefObject<HTMLDivElement | null>;
    projectsPageRef: React.RefObject<HTMLDivElement | null>;
}

export default function NavigationBar({homePageRef, skillsPageRef, projectsPageRef}: NavigationProps) {
    return (
        <div className='navigationBarContainer'>
            <div className='myName'>
                Shashank Verma
            </div>
            <div className='buttonContainer'>
                
                <button className='navigationItem'
                onClick={() => {homePageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}
                >About</button>

                <button className='navigationItem' onClick={() => {skillsPageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}>Skills</button>

                <button className='navigationItem' onClick={() => {projectsPageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}>Projects</button>

                <a className='profileLink' href='https://github.com/shawshank725' target='_blank'>
                    <img src={githubIcon} className='profileLinkImage'/>
                </a>
                <a className='profileLink'href='https://www.linkedin.com/in/shashankv725/' target='_blank'>
                    <img src={linkedIcon} className='profileLinkImage'/>
                </a>
            </div>
        </div>
    )
}