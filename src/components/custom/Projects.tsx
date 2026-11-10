"use client";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import pramanaAI from "../../../public/pramana_ai.png";
import vaultOs from "../../../public/vault_os.png";
import schedulePlanner from "../../../public/schedule_planner.png";
import globeClimate from "../../../public/globe_climate.png";
import accessCalc from "../../../public/accesscalc.png";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Pramana AI",
      description:
        "Pramana AI is an AI-powered knowledge assistant built with Next.js, Gemini, and Pinecone. It uses RAG to retrieve relevant information from uploaded documents and deliver accurate, context-aware answers through a secure, real-time chat interface.",
      image: pramanaAI,
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Google Gemini",
        "Pinecone",
        "Langchain",
      ],
      github: "https://github.com/Nitish2626/pramana-ai",
      live: "https://pramana-ai.vercel.app/",
      featured: true,
    },
    {
      title: "Vault OS",
      description:
        "SecureVault is a password management app that securely stores credentials, generates strong passwords, and monitors password health. It features JWT authentication, AES-256-GCM encryption, breach checks, and easy credential management.",
      image: vaultOs,
      technologies: ["Next.js", "Typescript", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Nitish2626/password-manager",
      live: "https://managepasswords.vercel.app/",
      featured: true,
    },
    {
      title: "Schedule Planner",
      description:
        "A clean and responsive daily schedule planner built with React.js, Vite, JavaScript, and Tailwind CSS. Easily add, search, edit, and delete tasks, manage daily priorities, and save your schedule using local browser storage. Designed for a smooth experience across desktop and mobile devices.",
      image: schedulePlanner,
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Nitish2626/schedule-planner",
      live: "https://schedulemyday.netlify.app/",
      featured: true,
    },
    {
      title: "Globe Climate",
      description:
        "A responsive Weather App that provides real-time weather updates using a Weather API. Users can search by city name or coordinates, get location-based weather, enjoy smart search suggestions, and switch between light and dark modes across all devices.",
      image: globeClimate,
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Weather API"],
      github: "https://github.com/Nitish2626/globe-climate",
      live: "https://globeclimate.netlify.app/",
      featured: true,
    },
    {
      title: "Access Calc",
      description:
        "A fast and responsive calculator application built with React, featuring standard arithmetic, time calculations, temperature conversion, and unit conversions for volume, mass, and length. Designed with a clean interface, smooth navigation, and mobile-friendly experience for everyday calculations.",
      image: accessCalc,
      technologies: ["React.js", "JavaScript", "CSS", "HTML"],
      github: "https://github.com/Nitish2626/accesscalc",
      live: "https://accesscalc.netlify.app/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="w-full flex flex-wrap items-center justify-center gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`w-11/12 sm:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group px-2`}
            >
              <div className={`flex flex-col gap-4`}>
                {/* Project Image */}
                <div className="transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-40 flex items-center justify-center object-contain"
                  />
                </div>

                {/* Project Content */}
                <div className="px-2 pb-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      <FaGithub className="h-5 w-5" />
                      {/* <span>Code</span> */}
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      <ExternalLink className="h-5 w-5" />
                      {/* <span>Live Demo</span> */}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
