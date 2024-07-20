"use client";
import React from "react";
import { experiences, skills } from "@/constants";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Cta from "@/components/Cta";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const frontEnd = skills.filter((skill) => skill.type === "Frontend");
  const backend = skills.filter((skill) => skill.type === "Backend");
  const languages = skills.filter((skill) => skill.type === "Language");
  const databases = skills.filter((skill) => skill.type === "Database");
  const tools = skills.filter((skill) => skill.type === "Tools");

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Arpit
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="">
          Software Engineer based in Canada, specializing in building Full Stack
          Web Applications and Machine Learning Models
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <h3 className="text-xl font-semibold text-slate-900 mt-6">
          Frontend Technologies
        </h3>
        <div className="mt-6 flex justify-center flex-wrap gap-12">
          {/* {skills.map((skill, index) => (
            <div
              className="block-container w-20 h-20 flex flex-col justify-center items-center"
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))} */}

          {frontEnd.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-x-6 m-5"
              key={skill.imageUrl}
            >
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={100}
                height={100}
              />
              <p className="pt-6 text-slate-700 font-poppins ">{skill.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mt-6">
          Backend Technologies
        </h3>
        <div className="mt-6 flex justify-center flex-wrap gap-12">
          {backend.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-x-6 m-5"
              key={skill.imageUrl}
            >
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={100}
                height={100}
              />
              <p className="pt-6 text-slate-700 font-poppins ">{skill.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mt-6">
          Programming Languages
        </h3>
        <div className="mt-6 flex justify-center flex-wrap gap-12">
          {languages.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-x-6 m-5"
              key={skill.imageUrl}
            >
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={100}
                height={100}
              />
              <p className="pt-6 text-slate-700 font-poppins ">{skill.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mt-6">Databases</h3>
        <div className="mt-6 flex justify-center flex-wrap gap-12">
          {databases.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-x-6 m-5"
              key={skill.imageUrl}
            >
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={100}
                height={100}
              />
              <p className="pt-6 text-slate-700 font-poppins ">{skill.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mt-6">Tools</h3>
        <div className="mt-6 flex justify-center flex-wrap gap-12">
          {tools.map((skill, index) => (
            <div
              className="flex flex-col justify-center items-center gap-x-6 m-5"
              key={skill.imageUrl}
            >
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={100}
                height={100}
              />
              <p className="pt-6 text-slate-700 font-poppins ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Technical Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p className="">
            I use Next.JS and JavaScript to bring ideas to life. Most of my
            projects highlight my skills with Next.JS. For backend work, I use
            Node.js and Express.js, and I design user-friendly interfaces with
            Figma. I’m focused on delivering high-quality solutions that exceed
            expectations. Let&apos;s work together to turn your ideas into
            amazing digital experiences!
          </p>
          <div className="mt-12 flex" ref={ref}>
            <VerticalTimeline lineColor="#e4e4e7">
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  visible={inView}
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />
      <Cta />
    </section>
  );
};

export default page;
