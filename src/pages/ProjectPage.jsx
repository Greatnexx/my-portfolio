import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../utills/Projects";

const ProjectPage = () => {
  return (
    <motion.div
      className="bg-[#18191b] py-12 px-[8%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-[40px] text-center text-[#FFF] md:mb-32"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        my <span className="text-[#FD6035]">projects</span>
      </motion.h2>

      {/* Animated Subheading */}
      <motion.h1
        className="text-[25px] md:text-[50px] mt-8 text-white font-bold"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Building Brands, <br /> One Success Story at a Time.
      </motion.h1>

      {/* Animated Project Cards */}
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-6 md:mt-14 mt-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.2, staggerChildren: 0.3 },
          },
        }}
      >
        {projects &&
          projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard data={project} />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
