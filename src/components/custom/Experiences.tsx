"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Experiences() {
  const experience = [
    {
      type: "work",
      title: "System Engineer",
      company: "Wipro Limited",
      period: "March 2026 - Present",
      description: "",
    },
    {
      type: "work",
      title: "Frontend Developer (Intern)",
      company: "Hyperbot Technologies Pvt Ltd",
      period: "December 2024 - July 2025",
      description: "",
    },
    // {
    //   type: "education",
    //   title: "BCA",
    //   company: "YCMOU",
    //   period: "July 2022 - June 2025",
    //   description:
    //     "Graduated with honors. Specialized in web technologies and human-computer interaction.",
    // },
  ];

  return (
    <section id="experiences" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experiences
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent" />

          {experience.map((item, i) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:flex ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <div
                  className={`hidden md:block md:w-1/2 ${
                    isLeft ? "pr-12 text-right" : "pl-12"
                  }`}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <span className="text-sm font-medium text-primary">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </div>

                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10 shadow-lg glow">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="md:w-1/2 pl-20 md:hidden">
                  <Card className="p-6">
                    <span className="text-sm font-medium text-primary">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.company}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
