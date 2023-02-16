"use client";
import { fadeIn } from "../utils/motion";

const ProjectsCard = ({
  imgUrl,
  title,
  index,
  barPercentage,
  barColor,
  description,
}) => (
  <div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`flex flex-col place-items-center gap-4`}
  >
    <div className="group">
      <img
        src={imgUrl}
        alt={title}
        className="w-[300px] h-[300px] rounded-[60px] object-content"
      />

      <h1 className="text-white font-semibold text-center">
        {title}{" "}
        <span className=" text-xs text-yellow-400">
          {barPercentage}%{" "}
          {barPercentage === 0
            ? "Not started"
            : barPercentage > 0 && barPercentage <= 20
            ? "Planning"
            : barPercentage > 20 && barPercentage <= 99
            ? "In progress"
            : barPercentage === 100
            ? "Done"
            : null}
        </span>
      </h1>
      <div className="mt-2 h-4 relative w-full rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div
          className={`h-full ${barColor} sm:${barColor} absolute`}
          style={{ width: `${barPercentage}%` }}
        ></div>
      </div>
      <div className="text-white relative w-[300px] hidden group-hover:block mt-2">
        {description}
      </div>
    </div>
  </div>
);

export default ProjectsCard;
