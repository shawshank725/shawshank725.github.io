import type { ProjectCardType } from "../components/ProjectCard";

// --- X Clone images ---
import xcloneLanding from "@assets/projects/xclone/landing.png";
import xcloneLogin from "@assets/projects/xclone/login.png";
import xclonePostModal from "@assets/projects/xclone/postmodal.png";
import xclonePostModalNoReply from "@assets/projects/xclone/postmodalnoreply.png";
import xclonePostViewer from "@assets/projects/xclone/postviewer.png";
import xcloneProfilePage from "@assets/projects/xclone/profilepage.png";
import xcloneRegister from "@assets/projects/xclone/register.png";

// --- Inventory images ---
import inventoryHome from "@assets/projects/inventory/home page.jpeg";
import inventoryLogin from "@assets/projects/inventory/login.jpeg";
import inventoryProfile from "@assets/projects/inventory/profilepage.jpeg";

// --- TextVoid images ---
import textvoidHome from "@assets/projects/textvoid/homepage.jpeg";
import textvoidLatest from "@assets/projects/textvoid/latestposts.jpeg";
import textvoidNew from "@assets/projects/textvoid/newposts.jpeg";
import textvoidPosts from "@assets/projects/textvoid/posts.jpeg";

// --- Game images ---
import gameMainMenu from "@assets/projects/game/mainmenu.png";
import gameLevel from "@assets/projects/game/level.png";
import gameLights from "@assets/projects/game/lights.png";

import firstImage from '@assets/projects/number-converter/first.jpeg';
import secondImage from '@assets/projects/number-converter/second.jpeg';
import thirdImage from '@assets/projects/number-converter/third.jpeg';
import fourthImage from '@assets/projects/number-converter/fourth.jpeg';

export const projects: ProjectCardType[] = [
  {
    projectImage: xcloneLanding,
    heading: "X Clone",
    description: "A Twitter-like social media platform clone featuring authentication, posting, liking, bookmarking, following, and a clean responsive UI.",
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
    projectImage: inventoryHome,
    heading: "Inventory Management System",
    description: "An inventory management web application to sell and buy products, and handle user authentication.",
    techStack: "Spring Boot, Spring Security, Thymeleaf, Java, MySQL",
    githubUrl: "https://github.com/shawshank725/inventory",
    otherImages: [
      inventoryLogin,
      inventoryProfile,
    ]
  },
  {
    projectImage: textvoidHome,
    heading: "TextVoid",
    description: "A simple anonymous message board built with Spring Boot and Bootstrap, inspired by 4Chan (text-only). Users can view the latest posts, browse by genre, and search posts by message content — no login required.",
    techStack: "Spring Boot, Thymeleaf, Java, Bootstrap, MySQL",
    githubUrl: "https://github.com/shawshank725/textvoid",
    otherImages: [
      textvoidLatest,
      textvoidNew,
      textvoidPosts,
    ]
  },
  {
    projectImage: firstImage,
    heading: "Number System Converter",
    description: "Number System Converter is a Spring Boot web application that allows users to convert numbers between binary, decimal, and hexadecimal formats through a simple and interactive interface.",
    techStack: "Spring Boot, Thymeleaf, Java, Bootstrap, MySQL",
    githubUrl: "https://github.com/shawshank725/number-system-converter",
    otherImages: [
      secondImage,thirdImage,fourthImage
    ]
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
