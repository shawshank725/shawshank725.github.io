import '@styles/SkillsPage.css';
import Heading from './Heading';
import type { ReferenceProp } from '@/types/ReferenceProp';
import { skills } from '@constants/skills';

export function SkillBadge() {
    return (
        <div className="skillsGroupContainer">
            {skills.map((skill) => (
                <div key={skill.skillName} className="skillsBadgeDiv">
                    <img
                        src={skill.imageUrl}
                        alt={skill.skillName}
                        className="skillsBadgeIcon"
                    />
                    <p>{skill.skillName}</p>
                </div>
            ))}
        </div>
    );
}

export default function SkillsPage({ reference }: ReferenceProp) {
    return (
        <div className="skillsPageContainer" ref={reference}>
            <Heading heading="Skills" />
            <div>
                <SkillBadge />
            </div>
        </div>
    );
}