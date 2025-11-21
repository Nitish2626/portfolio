"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, GitBranch, AppWindow } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Javascript", level: 80 },
        { name: "TypeScript", level: 40 },
        { name: "Core Java", level: 50 },
        { name: "Core Python", level: 30 },
      ],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Frontend",
      icon: AppWindow,
      skills: [
        { name: "React.js / Next.js", level: 80 },
        { name: "Shadcn UI", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js / Express.js", level: 80 },
        { name: "MySQL", level: 70 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 95 },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Others",
      icon: Cloud,
      skills: [
        { name: "Linux", level: 70 },
        { name: "Git & GitHub", level: 90 },
        { name: "AWS", level: 60 },
        { name: "CI/CD", level: 80 },
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  const techIcons = [
    { icon: RiNextjsFill, name: "Next JS", color: "text-black" },
    { icon: FaReact, name: "React JS", color: "text-cyan-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express JS", color: "text-Black" },
    { icon: GrMysql, name: "MySQL", color: "text-blue-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-cyan-500" },
    { icon: TbBrandTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: GitBranch, name: "Git", color: "text-orange-600" },
    { icon: Cloud, name: "AWS", color: "text-orange-400" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-8 mb-16"
        >
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <tech.icon className={`h-12 w-12 ${tech.color}`} />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="flex flex-wrap items-center justify-center gap-8 mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex items-center justify-center p-3 rounded-xl bg-linear-to-r ${category.color} mb-6`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-linear-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
