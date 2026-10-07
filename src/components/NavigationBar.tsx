import '@styles/NavigationBar.css';

type NavigationProps = {
    homePageRef: React.RefObject<HTMLDivElement | null>;
    skillsPageRef: React.RefObject<HTMLDivElement | null>;
    projectsPageRef: React.RefObject<HTMLDivElement | null>;
    contributionsPageRef: React.RefObject<HTMLDivElement | null>;
    socialsPageRef: React.RefObject<HTMLDivElement | null>;
    experiencePageRef: React.RefObject<HTMLDivElement | null>;

}

export default function NavigationBar({ homePageRef, skillsPageRef,
    projectsPageRef, socialsPageRef,
    experiencePageRef
}: NavigationProps) {
    return (
        <div className='navigationBarContainer'>
            <div className='myName' onClick={() => {
                homePageRef.current?.scrollIntoView({
                    behavior: 'smooth'
                })
            }}>
                Shashank Verma
            </div>
            <div className='buttonContainer'>
                <button className='navigationItem' onClick={() => {
                    skillsPageRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>Skills</button>

                <button className='navigationItem' onClick={() => {
                    projectsPageRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>Projects</button>


                <button className='navigationItem' onClick={() => {
                    experiencePageRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>Experience</button>

                <button className='navigationItem' onClick={() => {
                    socialsPageRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}>Social</button>




                <button
                    className="navigationItem"
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/resume/Shashank_Verma_CV.pdf";
                        link.download = "Shashank_Verma_Resume.pdf";
                        link.click();
                    }}
                >
                    Resume
                </button>
            </div>
        </div>
    )
}