import '@styles/ProjectCard.css';
import githubIcon from "@assets/github/github-mark.png";
import { Play } from 'lucide-react';

export type ProjectCardType = {
    heading: string;
    description: string;
    techStack: string;
    githubUrl: string;
    liveDemoUrl?: string;
}

export type ProjectCardProp = {
    projectCardType: ProjectCardType;
}

export default function ProjectCard({ projectCardType }: ProjectCardProp) {

    return (
        <div className='projectCardContainer'>
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
                        <img src={githubIcon} alt="GitHub" className="projectBtnIcon" />
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
            </div>
        </div>
    )
}