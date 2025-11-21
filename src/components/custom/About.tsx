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
              I'm a passionate full-stack developer with over 6 months of
              experience creating web applications that are both beautiful and
              functional. I specialize in modern technologies like React,
              Next.js, Node.js, and more.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My approach combines technical expertise with a keen eye for
              design, ensuring that every project I work on not only works
              flawlessly but also provides an exceptional user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
