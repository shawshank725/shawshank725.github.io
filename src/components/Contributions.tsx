import { contributions } from '@constants/contributions';
import type { ReferenceProp } from '@/types/ReferenceProp'; 
import Heading from '@components/Heading'; 
import "@styles/ContributionsPage.css";

export default function ContributionsPage({ reference }: ReferenceProp) {
  return (
    <div className='contributionsPageContainer' ref={reference}>
      <Heading heading="Contribution to Open Source" />

      <div className="contributionsList">
        {contributions.map((c, index) => (
          <div className="contributionCard" key={index}>
            
            <p>
              <strong>Repo: </strong>
              <a href={c.repoLink} target="_blank">
                {c.repoName}
              </a>
            </p>

            <p>
              <strong>Issue: </strong>
              <a href={c.issueLink} target="_blank">
                {c.issueFixed}
              </a>
            </p>

            <p>
              <strong>PR Status: </strong>
              {c.prStatus} —{" "}
              <a href={c.prLink} target="_blank">
                View PR
              </a>
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}