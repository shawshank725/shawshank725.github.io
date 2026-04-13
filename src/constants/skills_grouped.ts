import androidStudio from '@assets/skills/android_studio.png';
import apacheTomcat from '@assets/skills/Apache_Tomcat_logo.svg.png';
import c from '@assets/skills/c.png';
import css from '@assets/skills/css.png';
import docker from '@assets/skills/docker.png';
import expo from '@assets/skills/expo.svg';
import firebase from '@assets/skills/firebase.png';
import git from '@assets/skills/git.png';
import godot from '@assets/skills/godot.svg';
import graalvm from '@assets/skills/graalvm.png';
import gradle from '@assets/skills/gradle.webp';
import htmlWebp from '@assets/skills/html.webp';
import intellij from '@assets/skills/IntelliJ.png';
import java from '@assets/skills/java.webp';
import js from '@assets/skills/js.png';
import maven from '@assets/skills/maven.svg';
import mysql from '@assets/skills/mysql.png';
import picocli from '@assets/skills/picocli.png';
import postgresql from '@assets/skills/Postgresql.png';
import postman from '@assets/skills/postman.webp';
import python from '@assets/skills/python.webp';
import react from '@assets/skills/react.png';
import reactNative from '@assets/skills/reactnative.png';
import selenium from '@assets/skills/Selenium_Logo.png';
import springBoot from '@assets/skills/Spring_Boot.svg.png';
import supabase from '@assets/skills/supabase.png';
import typescript from '@assets/skills/typescript.png';
import vscode from '@assets/skills/vscode.png';

export const skills_group = {
  "Frontend": [
    { skillName: "React", imageUrl: react },
    { skillName: "React Native", imageUrl: reactNative },
    { skillName: "TypeScript", imageUrl: typescript },
    { skillName: "JavaScript", imageUrl: js },
    { skillName: "HTML", imageUrl: htmlWebp },
    { skillName: "CSS", imageUrl: css },
    { skillName: "Expo", imageUrl: expo },
  ],

  "Backend": [
    { skillName: "Spring Boot", imageUrl: springBoot },
    { skillName: "Apache Tomcat", imageUrl: apacheTomcat },
    { skillName: "GraalVM", imageUrl: graalvm },
    { skillName: "Picocli", imageUrl: picocli },
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
    { skillName: "Gradle", imageUrl: gradle },
  ],

  "Tools": [
    { skillName: "Git", imageUrl: git },
    { skillName: "Postman", imageUrl: postman },
    { skillName: "Selenium", imageUrl: selenium },
    { skillName: "IntelliJ", imageUrl: intellij },
    { skillName: "VS Code", imageUrl: vscode },
    { skillName: "Android Studio", imageUrl: androidStudio },
  ],

  "Game Dev": [
    { skillName: "Godot", imageUrl: godot },
  ],
};