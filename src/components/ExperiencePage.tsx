import { experiences } from '@/constants/experiences';
import type { ReferenceProp } from '@/types/ReferenceProp';
import Heading from '@components/Heading';
import "@styles/ExperiencePage.css";

type ExperiencePageProps = ReferenceProp;

export default function ExperiencePage({
  reference
}: ExperiencePageProps) {
  return (
    <div className='experiencePageContainer' ref={reference}>
      <Heading heading="Experiences" />
      <div className='achievementsList'>
        {experiences.map((experience, index) => (
          <div key={index} className="experienceCard">
            <div className='companyDetailsAndCertificateContainer'>
              <div className="companyDetailsContainer">
                <span><strong>Company: </strong>{experience.heading}</span>
                <span><strong>Role: </strong>{experience.role}</span>
                <span><strong>Duration: </strong>{experience.duration}</span>
              </div>
            </div>

            <ul className='unorderedListForExperience'>
              {experience.points.map((point, pointIndex) => (
                <li key={pointIndex} className="experienceDescription">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}