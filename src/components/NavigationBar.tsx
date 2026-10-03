import '@styles/NavigationBar.css';

type NavigationProps = {
    homePageRef: React.RefObject<HTMLDivElement | null>;
    skillsPageRef: React.RefObject<HTMLDivElement | null>;
    projectsPageRef: React.RefObject<HTMLDivElement | null>;
    contributionsPageRef: React.RefObject<HTMLDivElement | null>;
    socialsPageRef: React.RefObject<HTMLDivElement | null>;
    experiencePageRef: React.RefObject<HTMLDivElement | null>;

    setShowPDFViewer: React.Dispatch<React.SetStateAction<boolean>>;
setPdfPath: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavigationBar({ homePageRef, skillsPageRef, 
    projectsPageRef, socialsPageRef,
    experiencePageRef,
        setShowPDFViewer,
    setPdfPath
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
    className='navigationItem'
    onClick={() => {
        setPdfPath("/resume/Shashank_Verma_CV.pdf");
        setShowPDFViewer(true);
    }}
>
    Resume
</button>
            </div>
        </div>
    )
}