import { motion } from "framer-motion";
import img from "../assets/edit.png";
import { Link } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { skills } from "../utills/Skills";
import Skill from "../Components/Skill";

const AboutPage = () => {
  return (
    <motion.section
      className="bg-[#18191b] pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-[60px] text-center text-[#FFF]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* About Me Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8 md:px-[7%] mt-12">
        {/* Animated Image */}
        <motion.div
          className="w-full md:w-[42%] bg-[#FD6035] rounded-[15px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src={img} alt="Godwin Daniel" className="mt-8 w-[85%]" />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          className="md:w-1/2 text-white mt-8 md:mt-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-justify tracking-wide">
            Hi there! I'm Godwin Daniel, a passionate software developer based
            in Nigeria, with 2 years of hands-on experience. Passionate about
            crafting efficient and innovative solutions in software development.
          </p>
          <p className="mt-6 text-justify tracking-wide">
            In my career journey I have had the opportunity to collaborate with
            cross-functional teams, including designers, backend developers, and
            project managers, to deliver high-quality products on time and
            within budget.
          </p>

          <div className="w-52 md:w-52 md:mt-8">
            <Link
              to="/contact"
              className="flex items-center bg-[#212429] rounded-2xl mt-3 p-1 px-3 md:px-5"
            >
              Let's Connect
              <span className="bg-[#FD6035] p-5 rounded-full ml-2 md:ml-3">
                <FaMessage className="text-center text-[#FFF]" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="py-10 px-[9%]">
        <motion.h1
          className="text-[50px] text-[#FFF] text-center mb-5"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Skills
        </motion.h1>

        <motion.div
          className="container mx-auto grid md:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Skill data={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
