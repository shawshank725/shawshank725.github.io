import type { ProjectCardType } from "../components/ProjectCard";

// --- X Clone images ---
import xcloneLanding from "@assets/projects/xclone/landing.png";
import xcloneLogin from "@assets/projects/xclone/login.png";
import xclonePostModal from "@assets/projects/xclone/postmodal.png";
import xclonePostModalNoReply from "@assets/projects/xclone/postmodalnoreply.png";
import xclonePostViewer from "@assets/projects/xclone/postviewer.png";
import xcloneProfilePage from "@assets/projects/xclone/profilepage.png";
import xcloneRegister from "@assets/projects/xclone/register.png";

// --- Game images ---
import gameMainMenu from "@assets/projects/game/mainmenu.png";
import gameLevel from "@assets/projects/game/level.png";
import gameLights from "@assets/projects/game/lights.png";

// --- Ordo images ---
import ordo from "@assets/projects/ordo/ordo.png";
import ordoDelete from "@assets/projects/ordo/ordo delete.png";
import ordoRename from "@assets/projects/ordo/ordo rename.png";
import ordoOpen from "@assets/projects/ordo/ordo open.png";

// --- CALM App images ---
import logo from "@assets/projects/calm/logo.png"
import page1 from "@assets/projects/calm/page1.jpg"
import page2 from "@assets/projects/calm/page2.jpg"
import page3 from "@assets/projects/calm/page3.jpg"
import page4 from "@assets/projects/calm/page4.jpg"
import page5 from "@assets/projects/calm/page5.jpg"

export const projects: ProjectCardType[] = [
  {
    //projectImage: xcloneLanding,
    heading: "Twitter clone",
    description: "Social Media Platform inspired by Twitter",
    techStack: "React, TypeScript, Spring Boot, MySQL, Consul, JWT, Micro-services",
    githubUrl: "https://github.com/shawshank725/twitter-clone-spring-boot-react-microservices",
    // otherImages: [ xcloneLogin,   xclonePostModal,xclonePostModalNoReply,xclonePostViewer,xcloneProfilePage, xcloneRegister,   ]
  },
  {
    //projectImage: ordo,
    heading: "Ordo",
    description: "File management tool",
    techStack: "Java, PicoCLI, GraalVM",
    githubUrl: "https://github.com/shawshank725/ordo",
    liveDemoUrl: "https://github.com/shawshank725/ordo/releases/tag/1.1.0",
    // otherImages: [ ordoDelete, ordoOpen, ordoRename]
  },
  {
    //projectImage: logo,
    heading: "C.A.L.M App",
    description: "Mental Well-being",
    techStack: "React Native, TypeScript, Expo Go, React Query, Supabase",
    githubUrl: "https://github.com/shawshank725/calm-android-app-final",
    // otherImages: [page1, page2, page3, page4, page5]
  },
  {
    //projectImage: gameMainMenu,
    heading: "Forsaken Labyrinth",
    description: "2D platformer game",
    techStack: "GDScript, Godot",
    githubUrl: "https://github.com/shawshank725/forsakenLabyrinth",
    liveDemoUrl: "https://shawshank725.github.io/forsakenLabyrinth/",
    // otherImages: [      gameLevel,      gameLights,    ]
  }
];
