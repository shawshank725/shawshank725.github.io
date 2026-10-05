import androidStudio from '@assets/skills/android_studio.png';
import c from '@assets/skills/c.png';
import css from '@assets/skills/css.png';
import docker from '@assets/skills/docker.png';
import firebase from '@assets/skills/firebase.png';
import git from '@assets/skills/git.png';
import godot from '@assets/skills/godot.svg';
import htmlWebp from '@assets/skills/html.webp';
import intellij from '@assets/skills/IntelliJ.png';
import java from '@assets/skills/java.webp';
import js from '@assets/skills/js.png';
import maven from '@assets/skills/maven.svg';
import mysql from '@assets/skills/mysql.png';
import postgresql from '@assets/skills/Postgresql.png';
import postman from '@assets/skills/postman.webp';
import python from '@assets/skills/python.webp';
import react from '@assets/skills/react.png';
import reactNative from '@assets/skills/reactnative.png';
import springBoot from '@assets/skills/Spring_Boot.svg.png';
import supabase from '@assets/skills/supabase.png';
import typescript from '@assets/skills/typescript.png';
import vscode from '@assets/skills/vscode.png';

import linuxMint from "@/assets/skills/linuxminy.png";
import redhat from "@/assets/skills/redhat.webp";
import kali from "@/assets/skills/kali.webp";
import windows from "@/assets/skills/windows.webp";


export const skills_group = {
  "Frontend": [
    { skillName: "React", imageUrl: react },
    { skillName: "React Native", imageUrl: reactNative },
    { skillName: "TypeScript", imageUrl: typescript },
    { skillName: "JavaScript", imageUrl: js },
    { skillName: "HTML", imageUrl: htmlWebp },
    { skillName: "CSS", imageUrl: css },
  ],

  "Backend": [
    { skillName: "Spring Boot", imageUrl: springBoot },
  ],

  "Languages": [
    { skillName: "Java", imageUrl: java },
    { skillName: "Python", imageUrl: python },
    { skillName: "C", imageUrl: c },
  ],

  "Databases": [
    { skillName: "MySQL", imageUrl: mysql },
    { skillName: "PostgreSQL", imageUrl: postgresql },
    { skillName: "Firebase", imageUrl: firebase },
    { skillName: "Supabase", imageUrl: supabase },
  ],

  "DevOps": [
    { skillName: "Docker", imageUrl: docker },
    { skillName: "Maven", imageUrl: maven },
  ],

  "Tools": [
    { skillName: "Git", imageUrl: git },
    { skillName: "Postman", imageUrl: postman },
    { skillName: "IntelliJ", imageUrl: intellij },
    { skillName: "VS Code", imageUrl: vscode },
    { skillName: "Android Studio", imageUrl: androidStudio },
  ],
  "Operating Systems": [
    { skillName: "Linux Mint",imageUrl: linuxMint},
    { skillName: "Red Hat Enterprise Linux", imageUrl: redhat},
    {skillName: "Kali Linux", imageUrl: kali},
    { skillName: "Windows", imageUrl: windows}
  ],

  "Game Dev": [
    { skillName: "Godot", imageUrl: godot },
  ],
};