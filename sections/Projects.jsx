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
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.innerWidth} mx-auto flex-col px-14`}>
        <div className="flex flex-row text-[1.37rem] justify-start mb-10">
          <div className="text-secondary-text font-mono">03. |</div>
          <div className="text-white ml-3 font-mono">Some of my projects</div>
        </div>
        <div className="flex flex-row flex-wrap mb-0 lg:mb-15">
          <img
            src="/banner_sportsforum.png"
            alt="Sportsforum"
            className="w-[900px] h-[400px] object-fill rounded-[10px] place-items-center shadow-black shadow-md opacity-40"
          />

          <div className="relative bottom-[400px] opacity-90 lg:opacity-95 lg:relative lg:left-[600px] lg:bottom-[300px] bg-secondary-light rounded-[10px] float-right py-4 px-4 shadow-black shadow-md">
            <div className="text-secondary-text font-mono text-[0.8rem]">
              Featured project
            </div>
            <div className="text-header-text font-mono text-[1.2rem] mb-4">
              Sportsforum
            </div>
            <div className="text-primary-text font-mono max-w-lg py-2 px-2 rounded-[10px] text-[0.9rem]">
              Sportsforum is a discussion board application aimed at sports
              clubs and fan clubs. It will feature several features made
              specifically for this use.
            </div>
            <div className="flex flex-row gap-4 flex-wrap mt-2 ml-4 text-[0.8rem] text-primary-text">
              <div className="font-mono">React</div>
              <div className="font-mono">NextJS</div>
              <div className="font-mono">TailwindCSS</div>
              <div className="font-mono">Vercel</div>
              <div className="font-mono">Supabase</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mb-0 lg:mb-15">
          <img
            src="/banner_1.jpeg"
            alt="Brannportal.org"
            className="relative lg:left-[200px] w-[900px] h-[400px] object-fill rounded-[10px] place-items-center shadow-black shadow-md opacity-40"
          />

          <div className="relative bottom-[450px] opacity-90 lg:opacity-95 lg:relative lg:bottom-[300px] bg-secondary-light rounded-[10px] float-right py-4 px-4 shadow-black shadow-md">
            <div className="text-secondary-text font-mono text-[0.8rem]">
              Featured project
            </div>
            <div className="text-header-text font-mono text-[1.2rem] mb-4">
              Brannportal.org
            </div>
            <div className="text-primary-text font-mono max-w-lg py-2 px-2 rounded-[10px] text-[0.9rem]">
              Brannportal.org is an application created to keep track of the the
              missions I have been on as a volunteer firefighter. You can create
              users, firestations, fire departments and missions.,
            </div>
            <div className="flex flex-row gap-4 flex-wrap mt-2 ml-4 text-[0.8rem] text-primary-text">
              <div className="font-mono">React</div>
              <div className="font-mono">NextJS</div>
              <div className="font-mono">TailwindCSS</div>
              <div className="font-mono">Vercel</div>
              <div className="font-mono">Supabase</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mb-0 lg:mb-15">
          <img
            src="/banner_1.jpeg"
            alt="Botkassa"
            className="w-[900px] h-[400px] object-fill rounded-[10px] place-items-center shadow-black shadow-md opacity-40"
          />

          <div className="relative bottom-[400px] opacity-90 lg:opacity-95 lg:relative lg:left-[600px] lg:bottom-[300px] bg-secondary-light rounded-[10px] float-right py-4 px-4 shadow-black shadow-md">
            <div className="text-secondary-text font-mono text-[0.8rem]">
              Featured project
            </div>
            <div className="text-header-text font-mono text-[1.2rem] mb-4">
              Botkassa
            </div>
            <div className="text-primary-text font-mono max-w-lg py-2 px-2 rounded-[10px] text-[0.9rem]">
              Botkassa.no is an application created to help sports teams keeping
              track of fines and payments. The project is not yet started.
            </div>
            <div className="flex flex-row gap-4 flex-wrap mt-2 ml-4 text-[0.8rem] text-primary-text">
              <div className="font-mono">React</div>
              <div className="font-mono">NextJS</div>
              <div className="font-mono">TailwindCSS</div>
              <div className="font-mono">Vercel</div>
              <div className="font-mono">Supabase</div>
              <div className="font-mono">Vipps API</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
