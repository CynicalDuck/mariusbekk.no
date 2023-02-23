"use client";

import styles from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className={`${styles.innerWidth} mx-auto flex-col`}>
      <p className="text-secondary-text font-mono">Hello, my name is</p>
      <h1 className="text-white text-[5rem] font-semibold font-mono">
        Marius Bekk
      </h1>
      <p className="text-primary-text max-w-md font-mono">
        I'm a self taught developer building web applications and websites. My
        focus is currently on building awesome applications at Intility.
      </p>
    </div>
  </section>
);

export default Hero;
