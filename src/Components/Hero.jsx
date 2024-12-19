import React, { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import img from "../assets/edit.png";
import cvFile from "../assets/my cv.pdf";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const phrases = ["Software Developer", "Graphic Designer"];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#18191b] py-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex w-full flex-col-reverse py-4 md:py-0 md:flex-row items-center md:space-x-40 px-[5%]"
      >
        {/* Text Section */}
        <div className="flex flex-col md:w-1/2 text-start text-[#FFF] mt-8 px-4 py-6 md:py-0">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[30px] text-[#FD6035] mb-2 md:mb-5"
          >
            Hello I'm
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mb-2 md:mb-5"
          >
            Godwin
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-5xl font-bold"
          >
            Danielz
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-[30px] md:text-[40px]"
          >
            I'm a{" "}
            <motion.span
              key={phrases[phraseIndex]} // Triggers animation on phrase change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#FD6035] text-[23px] md:text-[36px]"
            >
              {phrases[phraseIndex]}
            </motion.span>
          </motion.p>
          <p className="text-justify">
            "I'm a passionate frontend developer creating seamless, responsive
            web experiences. I love turning ideas into interactive,
            user-friendly designs. Feel free to explore my projects, where
            creativity meets clean code. Let’s build something amazing
            together!"
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#FD6035] rounded-full p-40 md:p-60 mt-7 relative"
        >
          <img
            src={img}
            alt=""
            className="w-[100%] absolute top-10 bottom-11 right-5"
          />
        </motion.div>
      </motion.div>

      {/* Download Button */}
      <div className="w-52 ml-[8%] text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            to={cvFile}
            download={cvFile}
            target="blank"
            className="bg-[#FD6035] flex items-center p-1 rounded-[30px] text-center px-3 md:px-5"
          >
            Download CV
            <span className="bg-black p-5 rounded-full md:ml-3 ml-5">
              <FaFileDownload className="text-center text-[#FFF]" />
            </span>
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
