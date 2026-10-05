import { useRef, useState } from "react";
import HomePage from "@components/HomePage";
import NavigationBar from "@components/NavigationBar";
import ProjectsPage from "@components/ProjectsPage";
import SkillsPage from "@components/SkillsPage";
import "@/styles/App.css";
import ContributionsPage from "@/components/Contributions";
import SocialsPage from "@/components/SocialsPage";
import AchievementsPage from "@/components/Achievements";
import ExperiencePage from "@/components/ExperiencePage";
import { pdfjs } from 'react-pdf';
//import { PDFViewer } from "@/components/PDFViewer";
import { lazy, Suspense } from "react";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function App() {
  const homePageRef = useRef<HTMLDivElement | null>(null);
  const skillsPageRef = useRef<HTMLDivElement | null>(null);
  const projectsPageRef = useRef<HTMLDivElement | null>(null);
  const contributionsPageRef = useRef<HTMLDivElement | null>(null);
  const socialsPageRef = useRef<HTMLDivElement | null>(null);
  const experiencePageRef = useRef<HTMLDivElement | null>(null);
  const achievementsPageRef = useRef<HTMLDivElement | null>(null);

  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [pdfPath, setPdfPath] = useState("");

  const date = new Date().getFullYear();
  const PDFViewer = lazy(() => import("@/components/PDFViewer"));

  return (
    <div className="appContainer">
      <NavigationBar
        homePageRef={homePageRef}
        skillsPageRef={skillsPageRef}
        projectsPageRef={projectsPageRef}
        contributionsPageRef={contributionsPageRef}
        socialsPageRef={socialsPageRef}
        experiencePageRef={experiencePageRef}

        setShowPDFViewer={setShowPDFViewer}
        setPdfPath={setPdfPath}
      />
      <HomePage reference={homePageRef} />
      <ExperiencePage
        reference={experiencePageRef}
        setShowPDFViewer={setShowPDFViewer}
        setPdfPath={setPdfPath}
      />
      <SkillsPage reference={skillsPageRef} />
      <ProjectsPage reference={projectsPageRef} />
      <AchievementsPage reference={achievementsPageRef} />
      <ContributionsPage reference={contributionsPageRef} />
      <SocialsPage reference={socialsPageRef} />

      <p className="copyright">© {date} Shashank Verma. All rights reserved.</p>

      {showPDFViewer && (
        <Suspense fallback={<div>Loading PDF viewer...</div>}>
          <PDFViewer
            pdfPath={pdfPath}
            onClose={() => setShowPDFViewer(false)}
          />
        </Suspense>
      )}
    </div>
  )
}

export default App
