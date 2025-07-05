import React, { useState } from "react";
// front-end icon
import { FaHtml5 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { SiReactbootstrap } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiMui } from "react-icons/si";
// backend icon
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";

// tools icon
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { cn } from "../lib/utils";
const skills = [
  // front-end
  { name: "HTML/CSS", level: 90, category: "frontend", icon: <FaHtml5 /> },
  {
    name: "JavaScript",
    level: 75,
    category: "frontend",
    icon: <DiJavascript />,
  },
  {
    name: "React",
    level: 70,
    category: "frontend",
    icon: <RiTailwindCssFill />,
  },
  { name: "tailwind", level: 40, category: "frontend", icon: <GrReactjs /> },
  {
    name: "Bootstrap",
    level: 50,
    category: "frontend",
    icon: <SiReactbootstrap />,
  },
  {
    name: "Ant Design",
    level: 60,
    category: "frontend",
    icon: <SiAntdesign />,
  },
  { name: "Materiel UI", level: 60, category: "frontend", icon: <SiMui /> },

  // backend

  { name: "Node.JS", level: 70, category: "backend", icon: <BiLogoNodejs /> },
  { name: "Express", level: 60, category: "backend", icon: <SiExpress /> },
  { name: "Mongo DB", level: 50, category: "backend", icon: <SiMongodb /> },
  {
    name: "phpMyAdmin",
    level: 60,
    category: "backend",
    icon: <SiPhpmyadmin />,
  },

  { name: "GIT/GITHUB", level: 50, category: "tools", icon: <FaGithub /> },
  { name: "Vercel", level: 60, category: "tools", icon: <SiVercel /> },
  {
    name: "VS Code",
    level: 80,
    category: "tools",
    icon: <VscVscodeInsiders />,
  },
  {
    name: "Postman",
    level: 80,
    category: "tools",
    icon: <SiPostman />,
  },
];

const categories = ["all","frontend","backend","tools"]
const SkillsSection = () => {

  const [ActiveCategory,setActiveCategory] = useState("all")

  const filteredSkill = skills.filter((skill)=> ActiveCategory === "all" || skill.category === ActiveCategory)
  return (
    <section id="skills" className=" py-25 px-4 relative ">
      <div className="container mx-auto max-w-5xl ">
        <h2 className=" text-3xl md:text-4xl font-bold mb-8 text-center ">
          My<span className="text-sky-500"> Skills</span>
        </h2>
        <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
          {categories.map((category,key)=>(
            <button key={key} 
            onClick={()=>setActiveCategory(category)}
            className={cn("capitalize px-5 py-2 rounded-full transition-colors duration-300 border border-sky-500",
              ActiveCategory === category ?  "bg-sky-500 text-white":""
            )}
            >
              {category}
               </button>
          ))}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
          {filteredSkill.map((skill, key) => (
            <div
              key={key}
              className=" gradient-border card-hover p-4 rounded-lg shadow-md"
            >
              <div className="flex items-start gap-4 mb-2">
                <div className="p-2 text-2xl rounded-full bg-sky-500/10 text-sky-500">
                  {skill.icon}
                </div>
                <div className="w-full">
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <div className="w-full bg-sky-500/50 h-2 rounded-full overflow-hidden ">
                    <div
                      className="bg-sky-500 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                      style={{ width: skill.level + "%" }}
                    />
                  </div>
                  <div className="text-center text-sm mt-1">{skill.level} %</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
