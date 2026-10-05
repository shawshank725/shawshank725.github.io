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
                                <img src={skills_group.imageUrl} alt={skills_group.skillName} className='skillsBadgeIcon' />
                                <p>{skills_group.skillName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function SkillsPage({ reference }: ReferenceProp) {
    return (
        <div className='skillsPageContainer' ref={reference}>
            <Heading heading="Skills" />
            <div>
                <SkillBadge />
            </div>
        </div>
    )
}