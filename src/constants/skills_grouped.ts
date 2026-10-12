import docker from '@assets/skills/docker.png';
import git from '@assets/skills/git.png';
import java from '@assets/skills/java.webp';
import mysql from '@assets/skills/mysql.png';
import python from '@assets/skills/python.webp';
import react from '@assets/skills/react.png';
import reactNative from '@assets/skills/reactnative.png';
import springBoot from '@assets/skills/Spring_Boot.svg.png';
import supabase from '@assets/skills/supabase.png';
import typescript from '@assets/skills/typescript.png';

export const skills_group = {
  "Frontend": [
    { skillName: "React", imageUrl: react },
    { skillName: "React Native", imageUrl: reactNative },
    { skillName: "TypeScript", imageUrl: typescript },
  ],

  "Backend": [
    { skillName: "Spring Boot", imageUrl: springBoot },
  ],

  "Languages": [
    { skillName: "Java", imageUrl: java },
    { skillName: "Python", imageUrl: python },
  ],

  "Databases": [
    { skillName: "MySQL", imageUrl: mysql },
    { skillName: "Supabase", imageUrl: supabase },
  ],

  "DevOps & Tools": [
    { skillName: "Docker", imageUrl: docker },
    { skillName: "Git", imageUrl: git },
  ],

};