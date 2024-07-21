import { arrow } from "@/assets/icons";
import Cta from "@/components/Cta";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Arpit
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className=" text-lg">
          I&apos;ve designed and created numerous projects throughout these
          years, but these are the ones that I hold closest to my heart. Many of
          these projects are available as a public repository on my GitHub, so
          if you come across something that might make you interested, feel free
          to fork them to explore the codebase and contribute your ideas for
          further improvement. Your Feedback is always appreciated!
        </p>
      </div>

      <div className="flex flex-wrap justify-center my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                {/* <Image
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                /> */}
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </p>
              <div className="mt-5 flex flex-row justify-between items-center gap-2 font-poppins">
                <Link
                  href={project.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <Link
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  GitHub Repository
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <Cta />
    </section>
  );
};

export default page;
