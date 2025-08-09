import { projects } from '@constants/projects';
import '@styles/ProjectsPage.css';
import type { ReferenceProp } from '@/types/ReferenceProp';
import Heading from '@components/Heading';
import ProjectCard from '@components/ProjectCard';

export default function ProjectsPage({reference}: ReferenceProp) {
    return (
        <div className="projectsPageContainer" ref={reference}>
            <Heading heading="My Projects"/>
            {
                projects.map((project)=>(
                    <ProjectCard projectCardType={{
                        projectImage: project.projectImage,
                        heading: project.heading,
                        description: project.description,
                        techStack: project.techStack,
                        githubUrl: project.githubUrl,
                        liveDemoUrl: project.liveDemoUrl,
                        otherImages: project.otherImages
                    }} />
                ))
            }
        </div>
    )
}