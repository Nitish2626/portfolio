"use client";

import { motion } from "framer-motion";
import profileImage from "../../../public/profile_image.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto bg-linear-to-br from-blue-400 to-purple-500 rounded-full overflow-hidden shadow-2xl">
              {/* Replace with your image */}
              {/* <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div> */}
              <Image src={profileImage} alt="Image" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Crafting Digital Experiences
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m a passionate web developer focused on creating modern,
              responsive, and user-friendly digital experiences. I enjoy
              transforming ideas into clean, engaging interfaces that not only
              look great but also deliver real value to users. With a strong
              foundation in frontend and full-stack development, I combine
              creativity, problem-solving, and technical expertise to build
              meaningful solutions that make an impact.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My approach is simple: design with purpose, code with precision,
              and always aim to create experiences that are both visually
              appealing and highly functional. I&apos;m dedicated to continuous
              learning and building projects that reflect innovation, quality,
              and a strong user-first mindset.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
