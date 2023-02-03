"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.p
        variants={textVariant(0.9)}
        initial="hidden"
        whileInView="show"
        className="text-white"
      >
        Hello, it's me
      </motion.p>
      <motion.h1
        variants={textVariant(1.2)}
        initial="hidden"
        whileInView="show"
        className={styles.heroHeading}
      >
        Marius Bekk
      </motion.h1>
      <div className="flex flex-wrap gap-4">
        <motion.p
          variants={textVariant(1.5)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-blue-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#frontend";
          }}
        >
          FRONTEND
        </motion.p>
        <motion.p
          variants={textVariant(1.7)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-green-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#backend";
          }}
        >
          BACKEND
        </motion.p>
        <motion.p
          variants={textVariant(1.9)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-red-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#webdesign";
          }}
        >
          WEBDESIGN
        </motion.p>
        <motion.p
          variants={textVariant(2.1)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-purple-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#devops";
          }}
        >
          DEVOPS
        </motion.p>
        <motion.p
          variants={textVariant(2.3)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-indigo-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#scripting";
          }}
        >
          SCRIPTING
        </motion.p>
        <motion.p
          variants={textVariant(2.5)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-yellow-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#projects";
          }}
        >
          PROJECTS
        </motion.p>
      </div>
    </motion.div>
  </section>
);

export default Hero;
