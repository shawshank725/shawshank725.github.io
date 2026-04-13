import  { useState } from 'react';
import { skills } from '@constants/skills';
import useOutsideAlerter from '@hooks/useOutsideAlerter';
import '@styles/SkillsPage.css';
import Heading from './Heading';
import type { ReferenceProp } from '@/types/ReferenceProp';
import { skills_group } from '@constants/skills_grouped';

export function SkillBadge() {
  return (
    <div>
      {Object.entries(skills_group).map(([groupName, groupSkills]) => (
        <div key={groupName}>
          <p className='skillsBadgeGroupName'>{groupName}</p>

          <div className="skillsGroupContainer">
            {groupSkills.map((skills_group) => (
              <div key={skills_group.skillName} className='skillsBadgeDiv'>
                <img src={skills_group.imageUrl} alt={skills_group.skillName} className='skillsBadgeIcon'/>
                <p>{skills_group.skillName}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SkillsPage({reference}: ReferenceProp) {

    const [showPhotoViewer, setShowPhotoViewer] = useState<boolean>(false);
    const [selectedPhoto, setSelectedPhoto] = useState<string>("");
    const {ref: photoViewerRef} = useOutsideAlerter<HTMLDivElement>(undefined, setSelectedPhoto);

    return (
        <div className='skillsPageContainer' ref={reference}>
            <Heading heading="My Skills" />
            {/* <div className='skillsGrid'>
                {
                    skills.map((skill)=> (
                        <div className='skillCardContainer'>
                            <div className='skillCard'>
                                <div className='skillCardImageContainer'>
                                    <img src={skill.imageUrl} className='skillCardImage'
                                        onClick={()=> {setSelectedPhoto(skill.imageUrl)}}                                    
                                    />
                                </div>
                                <p className='skillCardTitle'>{skill.skillName}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
                {
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

            <div>
  <SkillBadge />
</div>
        </div>
    )
}