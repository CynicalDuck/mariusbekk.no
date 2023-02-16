"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amout: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <p
        variants={textVariant(0.9)}
        initial="hidden"
        whileInView="show"
        className="text-white"
      >
        Hello, it's me
      </p>
      <h1
        variants={textVariant(1.2)}
        initial="hidden"
        whileInView="show"
        className={styles.heroHeading}
      >
        Marius Bekk
      </h1>
      <div className="flex flex-wrap gap-4">
        <p
          variants={textVariant(1.5)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-blue-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#frontend";
          }}
        >
          FRONTEND
        </p>
        <p
          variants={textVariant(1.7)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-green-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#backend";
          }}
        >
          BACKEND
        </p>
        <p
          variants={textVariant(1.9)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-red-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#webdesign";
          }}
        >
          WEBDESIGN
        </p>
        <p
          variants={textVariant(2.1)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-purple-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#devops";
          }}
        >
          DEVOPS
        </p>
        <p
          variants={textVariant(2.3)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-indigo-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#scripting";
          }}
        >
          SCRIPTING
        </p>
        <p
          variants={textVariant(2.5)}
          initial="hidden"
          whileInView="show"
          className="text-white bg-yellow-800 rounded-full px-2 cursor-pointer"
          onClick={() => {
            location.href = "#projects";
          }}
        >
          PROJECTS
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
