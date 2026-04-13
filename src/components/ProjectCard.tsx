import '@styles/ProjectCard.css';
import githubIcon from "@assets/github/github-mark.png";
import { Play } from 'lucide-react';

export type ProjectCardType = {
    //projectImage:string;
    heading: string;
    description: string;
    techStack: string;
    githubUrl: string;
    liveDemoUrl?: string;
    //otherImages:string[];
}

export type ProjectCardProp = {
    projectCardType: ProjectCardType;
}


export default function ProjectCard({ projectCardType }: ProjectCardProp) {

    // const [showPhotoViewer, setShowPhotoViewer] = useState<boolean>(false);
    // const [selectedPhoto, setSelectedPhoto] = useState<string>("");
    // const {ref: photoViewerRef} = useOutsideAlerter<HTMLDivElement>(undefined, setSelectedPhoto);

    return (
        <div className='projectCardContainer'>
            {/* <div className='projectImageContainer'>
                <img src={projectCardType.projectImage} className='projectImage' 
                // onClick={()=> {setSelectedPhoto(projectCardType.projectImage)}}
                /> 
            </div> */}
            <div className="projectDescriptionContainer">
                <span className='projectHeading'>{projectCardType.heading}</span>
                <span className='projectDescription'>{projectCardType.description}</span>
                <div>
                    <span style={{ fontWeight: "bold" }}>Tech stack used: </span>
                    <span className='projectTechStack'>{projectCardType.techStack}</span>
                </div>

                <div className="projectButtons">

                    <a
                        href={projectCardType.githubUrl}
                        className={`projectBtn ${!projectCardType.githubUrl ? 'disabled' : ''}`}
                        target="_blank"
                    >
                        <img src={githubIcon} className="projectBtnIcon" />
                        <span>Code</span>
                    </a>

                    <a
                        href={projectCardType.liveDemoUrl}
                        className={`projectBtn ${!projectCardType.liveDemoUrl ? 'disabled' : ''}`}
                        target="_blank"
                    >
                        <Play className="projectBtnIcon" />
                        <span>Live</span>
                    </a>

                </div>

                {/* <a href={projectCardType.githubUrl}
                 className='projectGithubUrl'
                 target='_blank'
                 >
                    Click here to check the project repository on github
                </a>
                {
                    projectCardType.liveDemoUrl !=undefined && (
                        <a href={projectCardType.liveDemoUrl} className='projectLiveDemoUrl' target='_blank'>
                            Click here to try out the project
                        </a>
                    )
                } */}
                {/* <div className='allOtherImagesContainer'>
                    {
                        projectCardType.otherImages.map((otherImage)=> (
                            <div className='otherImageContainer'>
                                <img src={otherImage} className='otherImage' onClick={()=> {setSelectedPhoto(otherImage)}}/>
                            </div>
                        ))
                    }
                </div> */}
            </div>
            {/* {
                selectedPhoto != "" && selectedPhoto !=null && (
                    <PhotoViewer 
                        selectedPhoto={selectedPhoto}
                        setSelectedPhoto={setSelectedPhoto}
                        setVisibilty={setShowPhotoViewer}
                        isVisible={showPhotoViewer}
                        refer={photoViewerRef}
                    />
                )
            } */}
        </div>
    )
}