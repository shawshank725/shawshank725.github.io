import { useRef } from "react";
import HomePage from "@components/HomePage";
import NavigationBar from "@components/NavigationBar";
import ProjectsPage from "@components/ProjectsPage";
import SkillsPage from "@components/SkillsPage";

import "./styles/App.css";

console.log("SkillsPage:", SkillsPage);
function App() {
  const homePageRef = useRef<HTMLDivElement | null>(null);
  const skillsPageRef = useRef<HTMLDivElement | null>(null);
  const projectsPageRef = useRef<HTMLDivElement | null>(null);

  const date = new Date().getFullYear();

  return (
    <div className="appContainer">
      <NavigationBar homePageRef={homePageRef} skillsPageRef={skillsPageRef} projectsPageRef={projectsPageRef} />
      <HomePage reference={homePageRef}/>
      <SkillsPage reference={skillsPageRef} />
      <ProjectsPage reference={projectsPageRef} />
      <p className="copyright">© {date} Shashank Verma. All rights reserved.</p>
    </div>
  )
}

export default App
