"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { TypingText } from "../components";
import SkillBar from "../components/SkillBar";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

const Skills = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Skills" textStyles="text-center font-semibold" />
    </motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col flex-wrap gap-4 place-items-center justify-center`}
    >
      <motion.p
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-white bg-blue-800 rounded-full px-2 mt-4"
        id="frontend"
      >
        FRONTEND
      </motion.p>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="JavaScript"
          barColor={"bg-javascript-yellow"}
          barPercentage={80}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="TypeScript"
          barColor={"bg-typescript-blue"}
          barPercentage={40}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar title="React" barColor={"bg-react-blue"} barPercentage={70} />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="NextJS"
          barColor={"bg-nextjs-black"}
          barPercentage={30}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Visual Studio Code"
          barColor={"bg-vscode-blue"}
          barPercentage={95}
        />
      </motion.div>
      <motion.p
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-white bg-green-800 rounded-full px-2 mt-4"
        id="backend"
      >
        BACKEND
      </motion.p>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Python"
          barColor={"bg-python-green"}
          barPercentage={80}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Django"
          barColor={"bg-django-green"}
          barPercentage={70}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Django Rest Framework"
          barColor={"bg-django-rest-framework-green"}
          barPercentage={70}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Pycharm"
          barColor={"bg-pycharm-green"}
          barPercentage={95}
        />
      </motion.div>
      <motion.p
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-white bg-red-800 rounded-full px-2 mt-4"
        id="webdesign"
      >
        WEBDESIGN
      </motion.p>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="TailwindCSS"
          barColor={"bg-tailwind-purple"}
          barPercentage={30}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Framer Motion"
          barColor={"bg-framer-motion-purple"}
          barPercentage={20}
        />
      </motion.div>
      <motion.p
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-white bg-purple-800 rounded-full px-2 mt-4"
        id="devops"
      >
        DEVOPS
      </motion.p>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar title="Git" barColor={"bg-git-orange"} barPercentage={40} />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Github"
          barColor={"bg-github-purple"}
          barPercentage={40}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Kubernetes"
          barColor={"bg-kubernetes-blue"}
          barPercentage={20}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Docker"
          barColor={"bg-docker-blue"}
          barPercentage={20}
        />
      </motion.div>
      <motion.p
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        className="text-white bg-indigo-800 rounded-full px-2 mt-4"
        id="scripting"
      >
        SCRIPTING
      </motion.p>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="PowerShell"
          barColor={"bg-powershell-blue"}
          barPercentage={90}
        />
      </motion.div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
      >
        <SkillBar
          title="Visual Basic"
          barColor={"bg-visual-basic-purple"}
          barPercentage={90}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Skills;
