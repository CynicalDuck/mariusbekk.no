"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { projects } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ProjectsCard, TitleText, TypingText } from "../components";

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| My projects" textStyles="text-center" />
        <TitleText
          title={<>Have a look at my projects</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectsCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
