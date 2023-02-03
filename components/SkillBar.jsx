"use client";

const SkillBar = ({ title, barColor, barPercentage }) => (
  <div>
    <h1 className="sm:pt-5 text-white pt-5 ">
      {title} <span className=" text-xs text-yellow-400">{barPercentage}%</span>
    </h1>
    <div className="mt-2 h-4 relative w-60 rounded-full overflow-hidden">
      <div className=" w-full h-full bg-gray-200 absolute "></div>
      <div
        className={`h-full ${barColor} sm:${barColor} absolute`}
        style={{ width: `${barPercentage}%` }}
      ></div>
    </div>
  </div>
);

export default SkillBar;
