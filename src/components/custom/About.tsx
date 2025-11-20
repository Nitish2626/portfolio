// components/About.tsx
"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code2, number: "50+", text: "Projects Completed" },
    { icon: Users, number: "30+", text: "Happy Clients" },
    { icon: Palette, number: "4+", text: "Years Experience" },
  ];

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
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div>
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
              I'm a passionate full-stack developer with over 4 years of
              experience creating web applications that are both beautiful and
              functional. I specialize in modern technologies like React,
              Next.js, Node.js, and more.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My approach combines technical expertise with a keen eye for
              design, ensuring that every project I work on not only works
              flawlessly but also provides an exceptional user experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.text}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;