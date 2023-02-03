"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TypingText } from "../components";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Marius" textStyles="text-center" />
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/profile_image.jpeg"
        alt="profile image"
        className="w-[150px] h-[150px] object-contain mt-[28px] rounded-full place-items-center"
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 font-normal sm:text-[20px] text-[16px] text-center text-secondary-white"
      >
        My name is Marius Bekk and I am a full-stack developer. I have been
        working with web development for about 3 years now and I am currently
        working as a full-stack developer at Intility AS. I have a passion for
        web development and I am always looking for new challenges and
        opportunities to learn new things. This page is created in with NextJS,
        TailwindCSS and Framer Motion as a project to learn more about these
        technologies. <br /> <br />I am also working as a local part-time
        firefighter in my hometown and are active as a soccer player.
      </motion.p>
    </motion.div>
  </section>
);

export default About;