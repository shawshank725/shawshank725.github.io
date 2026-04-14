import type { ReferenceProp } from '@/types/ReferenceProp';
import Heading from '@components/Heading';
import githubIcon from '@assets/github/github-mark.png';
import linkedinIcon from '@assets/linkedin/InBug-Black.png';
import '@styles/SocialsPage.css';

export default function SocialsPage({ reference }: ReferenceProp) {
  return (
    <div className="socialsPageContainer" ref={reference}>
      <Heading heading="Connect with Me" />

      <div className="socialsContainer">
        
        <a
          href="https://github.com/shawshank725"
          target="_blank"
          className="socialCard"
        >
          <img src={githubIcon} className="socialIcon" />
          <p>GitHub</p>
        </a>

        <a
          href="https://linkedin.com/in/shashankv725"
          target="_blank"
          className="socialCard"
        >
          <img src={linkedinIcon} className="socialIcon" />
          <p>LinkedIn</p>
        </a>

      </div>
    </div>
  );
}