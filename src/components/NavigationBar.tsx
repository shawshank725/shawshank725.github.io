import '@styles/NavigationBar.css';

type NavigationProps = {
    homePageRef: React.RefObject<HTMLDivElement | null>;
    skillsPageRef: React.RefObject<HTMLDivElement | null>;
    projectsPageRef: React.RefObject<HTMLDivElement | null>;
    contributionsPageRef: React.RefObject<HTMLDivElement | null>;
    socialsPageRef: React.RefObject<HTMLDivElement | null>;
}

export default function NavigationBar({homePageRef, skillsPageRef, projectsPageRef, contributionsPageRef, socialsPageRef}: NavigationProps) {
    return (
        <div className='navigationBarContainer'>
            <div className='myName' onClick={() => {homePageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}>
                Shashank Verma
            </div>
            <div className='buttonContainer'>
                <button className='navigationItem' onClick={() => {skillsPageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}>Skills</button>

                <button className='navigationItem' onClick={() => {projectsPageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}>Projects</button>

                
                <button className='navigationItem' onClick={() => {contributionsPageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}>Contributions</button>
                
                <button className='navigationItem' onClick={() => {socialsPageRef.current?.scrollIntoView({
                    behavior:'smooth'
                })}}>Social</button>

                
                

                <a className='profileLink' href='/assets/resume/resume.pdf' download={"Resume.pdf"} >
                    <button className='navigationItem'>Resume</button>
                </a>
                {/* <a className='profileLink' href='https://github.com/shawshank725' target='_blank'>
                    <img src={githubIcon} className='profileLinkImage'/>
                </a>
                <a className='profileLink'href='https://www.linkedin.com/in/shashankv725/' target='_blank'>
                    <img src={linkedIcon} className='profileLinkImage'/>
                </a> */}
            </div>
        </div>
    )
}