import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../../variants";
import { FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiVisualstudiocode,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPython,
  SiIntellijidea
} from "react-icons/si";
import {
  RiHtml5Fill,
  RiGithubFill,
  RiCss3Fill,
  RiGitBranchFill,
  RiJavascriptFill,
  RiBootstrapFill,
  RiReactjsFill
} from "react-icons/ri";
import Circles from "../../components/Circles";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          <RiHtml5Fill key="html5" />,
          <RiCss3Fill key="css3" />,
          <RiJavascriptFill key="javascript" />,
          <SiPython key="python" />,
          <SiC key="c" />,
          <SiCplusplus key="cpp" />,
          <FaJava key="java" />
        ]
      },
      {
        title: "Frameworks",
        icons: [
          <RiReactjsFill key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiNodedotjs key="nodejs" />,
          <SiTailwindcss key="tailwind" />,
          <RiBootstrapFill key="bootstrap" />
        ]
      },
      {
        title: "Tools",
        icons: [
          <RiGithubFill key="github" />,
          <RiGitBranchFill key="git" />,
          <SiVisualstudiocode key="vscode" />,
          <SiIntellijidea key="intellijidea" />
        ]
      },
      {
        title: "DataBase",
        icons: [<SiMysql key="mysql" />, <SiMongodb key="mongo" />]
      }
    ]
  },
  {
    title: "Education",
    info: [
      {
        title: "Bachelore of Technology - Parul University, Vadodara, Gujarat",
        stage: "2020 - 2024"
      },
      {
        title: "12th (NEB) - Model Multiple College, janakpur, Nepal",
        stage: "2018 - 2019"
      },
      {
        title:
          "10th (SEE) - Saraswati English Boarding School, Mahendranagar, Nepal",
        stage: "2017"
      }
    ]
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Development Intern - codeClause",
        stage: "July 2023 - August 2023"
      }
    ]
  },
  {
    title: "Certifications",
    info: [
      {
        title: "Front End Web Development using Angular - Parul University",
        stage: "February 2023"
      },
      {
        title: "Zero To Prototype With NODE.JS - Parul University",
        stage: "September 2022"
      },
      {
        title: "Zero To Hero in MicroSoft Excel - Udemy",
        stage: "February 2023"
      },
      {
        title: "Meta Front-End Developer Professional Certificate  - Coursera",
        stage: "September 2023"
      }
    ]
  }
];

const About = () => {
  const [index, setIndex] = useState(0);

  const handleIndexChange = useCallback(
    (newIndex) => {
      if (index !== newIndex) {
        setIndex(newIndex);
      }
    },
    [index]
  );

  const infoSection = useMemo(() => {
    const item = aboutData[index];
    return (
      <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
        {item.info.map((subItem, subIndex) => (
          <div
            key={subIndex}
            className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
          >
            <div className="font-light mb-2 md:mb-0">{subItem.title}</div>
            <div className="hidden md:flex">-</div>
            <div>{subItem.stage}</div>
            <div className="flex gap-x-4">
              {subItem.icons?.map((icon, iconIndex) => (
                <div key={iconIndex} className="text-2xl text-white">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }, [index]);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Capativating <span className="text-accent">Stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am currently pursuing Bachelor of Technology in Parul University.
            I am a Fresher in Web Development field. I am passionate and
            results-driven software engineer with a strong enthusiasm for
            leveraging technology to solve problems, embracing the latest
            technologies. Proficient in front-end as well as back-end
            development, with a keen eye for detail and a dedication to crafting
            high-quality and scalable code.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => handleIndexChange(itemIndex)}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:bg-white after:absolute after:-bottom-1 after:left-0`}
              >
                {item.title}
              </div>
            ))}
          </div>
          {infoSection}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
