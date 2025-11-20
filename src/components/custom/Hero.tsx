// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Full Stack Developer", "Freelancer", "Problem Solver"];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeout: NodeJS.Timeout;

    if (displayText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, titles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I'm <br></br>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              Nitish Kumar Sharma
            </span>
          </h1>

          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-4xl text-gray-600 font-light">
              I'm a{" "}
              <span className="text-blue-600 font-semibold border-r-2 border-blue-600 animate-pulse">
                {displayText}
              </span>
            </h2>
          </div>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-friendly web applications
            that solve real-world problems and deliver exceptional user
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/Nitish2626"
              target="blank"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <FaGithub className="h-6 w-6 text-gray-800" />
            </a>
            <a
              href="https://www.linkedin.com/in/nitish-kumar-sharma-9465ab252/"
              target="blank"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <FaLinkedin className="h-6 w-6 text-blue-600" />
            </a>
            <a
              href="mailto:nitishksharma517@gmail.com"
              target="blank"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-gray-50"
            >
              <Mail className="h-6 w-6 text-red-500" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
