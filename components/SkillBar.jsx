"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { TypingText } from "../components";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

const SkillBar = ({ title, barColor, barPercentage }) => (
  <>
    <h1 class="sm:pt-5 text-white pt-5 ">
      {title} <span class=" text-xs text-yellow-400">{barPercentage}%</span>
    </h1>
    <div class="mt-2 h-4 relative w-60 rounded-full overflow-hidden">
      <div class=" w-full h-full bg-gray-200 absolute "></div>
      <div
        className={`h-full ${barColor} sm:${barColor} absolute`}
        style={{ width: `${barPercentage}%` }}
      ></div>
    </div>
  </>
);

export default SkillBar;
