import Image from "next/image";
import React from "react";

export interface Experience {
  date: string;
  role: string;
  company: string;
  companyName: string;
  description: string;
}

interface TimelineProps {
  experiences: Experience[];
}
const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative container flex mx-auto px-4 overflow-x-auto">
      <div className="absolute w-full self-center top-[60%] left-0 h-1 bg-gray-300 dark:bg-gray-600"></div>
      <ul
        className="flex items-center relative justify-between w-full"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${experiences.length}, 1fr)`,
          gap: "1rem",
        }}
      >
        {experiences.map((exp, idx) => (
          <li
            key={idx}
            className="relative mt-12 text-center h-[170px] min-w-[200px] max-w-[300px]"
          >
            <div className="flex relative flex-col justify-between h-full">
              <div className="absolute top-[50%] self-center transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-2 border-white dark:border-gray-800"></div>
              <div>
                <span>
                  {exp.role} [ {exp.companyName} ]
                </span>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  {exp.date}
                </span>
              </div>
              <div className="flex mr-4 justify-center">
                <Image
                  src={exp.company}
                  alt={exp.company}
                  width={24}
                  height={24}
                  className="border h-12 w-12 rounded-full"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
