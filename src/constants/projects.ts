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

// --- CALM App images ---
import logo from "@assets/projects/calm/logo.png"
import page1 from "@assets/projects/calm/page1.jpg"
import page2 from "@assets/projects/calm/page2.jpg"
import page3 from "@assets/projects/calm/page3.jpg"
import page4 from "@assets/projects/calm/page4.jpg"
import page5 from "@assets/projects/calm/page5.jpg"

export const projects: ProjectCardType[] = [
  {
    projectImage: xcloneLanding,
    heading: "Social Media Platform",
    description: "A Social Media Platform inspired by Twitter featuring authentication, posting, liking, bookmarking, following, and a clean responsive UI.",
    techStack: "React, TypeScript, Spring Boot, MySQL, Consul, JWT, Micro-services",
    githubUrl: "https://github.com/shawshank725/twitter-clone-spring-boot-react-microservices",
    otherImages: [
      xcloneLogin,
      xclonePostModal,
      xclonePostModalNoReply,
      xclonePostViewer,
      xcloneProfilePage,
      xcloneRegister,
    ]
  },
  {
    projectImage: logo,
    heading: "C.A.L.M App",
    description: "This is an application made for the university to provide a relaxing environment for students. It allows students to book an appointment with an expert.",
    techStack: "React Native, TypeScript, Expo Go, React Query, Supabase",
    githubUrl: "https://github.com/shawshank725/calm-android-app-final",
    otherImages: [page1, page2, page3, page4, page5]
  },
  {
    projectImage: gameMainMenu,
    heading: "2D Platformer Game",
    description: "A 2D platformer game with multiple levels, lighting effects, and a main menu. Built using Godot and GDScript.",
    techStack: "GDScript, Godot",
    githubUrl: "https://github.com/shawshank725/forsakenLabyrinth",
    liveDemoUrl: "https://shawshank725.github.io/forsakenLabyrinth/",
    otherImages: [
      gameLevel,
      gameLights,
    ]
  }
];
