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
    <section className={`${styles.paddings}`} id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col place-items-center gap-4`}
      >
        <TypingText
          title="| My projects"
          textStyles="text-center font-semibold"
        />
        <TitleText
          title={<>Have a look at my projects</>}
          textStyles="text-center"
        />
        {projects.map((project, index) => (
          <ProjectsCard
            key={project.id}
            {...project}
            index={index}
            active={active}
            barColor={"bg-javascript-yellow"}
            barPercentage={project.barPercentage}
            handleClick={setActive}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
