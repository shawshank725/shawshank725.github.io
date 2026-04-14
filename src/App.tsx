import { useRef } from "react";
import HomePage from "@components/HomePage";
import NavigationBar from "@components/NavigationBar";
import ProjectsPage from "@components/ProjectsPage";
import SkillsPage from "@components/SkillsPage";
import "@/styles/App.css";
import ContributionsPage from "./components/Contributions";
import SocialsPage from "./components/SocialsPage";

function App() {
  const homePageRef = useRef<HTMLDivElement | null>(null);
  const skillsPageRef = useRef<HTMLDivElement | null>(null);
  const projectsPageRef = useRef<HTMLDivElement | null>(null);
  const contributionsPageRef = useRef<HTMLDivElement | null>(null);
  const socialsPageRef = useRef<HTMLDivElement | null>(null);

  const date = new Date().getFullYear();

  return (
    <div className="appContainer">
      <NavigationBar 
        homePageRef={homePageRef} 
        skillsPageRef={skillsPageRef} 
        projectsPageRef={projectsPageRef} 
        contributionsPageRef={contributionsPageRef} 
        socialsPageRef={socialsPageRef} 
      />
      <HomePage reference={homePageRef}/>
      <SkillsPage reference={skillsPageRef} />
      <ProjectsPage reference={projectsPageRef} />
      <ContributionsPage reference={contributionsPageRef} />
      <SocialsPage reference={socialsPageRef} />
      
      <p className="copyright">© {date} Shashank Verma. All rights reserved.</p>
    </div>
  )
}

export default App
