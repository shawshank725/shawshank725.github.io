import type { ProjectCardType } from "../components/ProjectCard";


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
