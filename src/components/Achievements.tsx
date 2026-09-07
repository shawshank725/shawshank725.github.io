import { achievements } from '@/constants/achievements';
import type { ReferenceProp } from '@/types/ReferenceProp'; 
import Heading from '@components/Heading'; 
import "@styles/AchievementsPage.css";

export default function AchievementsPage({ reference }: ReferenceProp) {
  return (
    <div className='achievementsPageContainer' ref={reference}>
      <Heading heading="My Achievements" />
        <div className='achievementsList'>
            {achievements.map((achievement, index) => (
                <div key={index} className='achievementCard'>
                    <span className='achievementName'>{achievement.achievementName}: </span>
                    <span className='achievementDescription'>{achievement.achievementDescription}</span>
                </div>
            ))}
        </div>
    </div>
  );
}