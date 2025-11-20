import { Gamepad2, Brain, Code2, Rocket, Award, Users, Zap, Terminal } from 'lucide-react';
import { Project, Skill, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Femina K",
  tagline: "Game Dev Enthusiast | React Developer | GenAI Native",
  heroText: "Building interactive educational games to make learning accessible for every child.",
  email: "femi65669@gmail.com",
  phone: "+91 8940715740",
  location: "Vellore, India",
  education: {
    degree: "B.E. Computer Science & Engineering",
    school: "Thanthai Periyar Government Institute of Technology",
    year: "2023 - 2027"
  }
};

export const PROJECTS: Project[] = [
  {
    title: "Just Divide",
    date: "2025",
    description: "A strategic puzzle game where players 'Divide with the numbers to solve the rows and columns.' Features a 'Keep' slot for planning, a limited 'Trash' mechanic (x10) for risk management, and a cute cat mascot. Built with Phaser 3, it uses cascading logic to merge numbers and clear the grid.",
    tech: ["JavaScript (ES6)", "Phaser 3", "HTML5", "CSS3", "Algorithms"],
    image: "just-divide.png",
    featured: true
  }
];

export const SKILLS: Skill[] = [
  { name: "React / JSX", level: 90, category: 'Frontend/Game', icon: "⚛️" },
  { name: "Phaser 3 / Canvas", level: 85, category: 'Frontend/Game', icon: "🎮" },
  { name: "Tailwind CSS", level: 95, category: 'Frontend/Game', icon: "🎨" },
  { name: "HTML5 / CSS3", level: 95, category: 'Frontend/Game', icon: "🌐" },
  { name: "JavaScript (ES6+)", level: 90, category: 'Core', icon: "📜" },
  { name: "Node.js / Express", level: 80, category: 'Backend', icon: "🟩" },
  { name: "MongoDB / SQL", level: 75, category: 'Backend', icon: "🗄️" },
  { name: "GenAI Tools (Replit, Cursor)", level: 92, category: 'GenAI/Tools', icon: "🤖" },
  { name: "C++ / Python", level: 70, category: 'Core', icon: "🐍" },
  { name: "Figma / UI Design", level: 78, category: 'GenAI/Tools', icon: "✒️" },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "WINNER - MINDMAZE",
    event: "AnantaBodha 2K24, University College of Engineering",
    date: "Oct 2024",
    icon: Brain
  },
  {
    title: "Recognized for Innovation",
    event: "HackNight'25 - 36 Hour Hackathon, HackClub VIT Chennai",
    date: "Mar 2025",
    icon: Zap
  },
  {
    title: "Participant",
    event: "Quick Site, Ananta Bodha 2K24",
    date: "Oct 2024",
    icon: Rocket
  }
];

export const EKLAVYA_MAPPING = [
  {
    req: "Developing HTML5/JS educational games",
    match: "Built 'Just Divide', a Phaser 3 puzzle game with complex grid logic and arithmetic mechanics."
  },
  {
    req: "Mission: Making learning accessible",
    match: "Passionate about EdTech; my goal is to simplify complex topics through interactive play."
  },
  {
    req: "Tech Stack: React, Canvas API",
    match: "Strong React proficiency. Expert in HTML5 Canvas via Phaser 3 engine."
  },
  {
    req: "Fast execution & prototyping",
    match: "Expert user of GenAI tools (Cursor, Lovable, Replit) to ship clean code rapidly."
  }
];