import { arrow } from "@/assets/icons";
import Cta from "@/components/Cta";
import { projects } from "@/constants";
import Image from "next/image";
import { webdev, mlearning } from "@/assets/icons";
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

      <div className="flex flex-wrap justify-around items-center my-20 gap-16">
        <Link href="/projects/web-development">
          <div className="pt-6 pb-1 px-8 grid grid-rows-2 justify-items-center items-center border border-black rounded-md shadow-md hover:bg-slate-100">
            <Image
              className="text-center"
              src={webdev}
              alt="Web Development"
              width={120}
              height={120}
            />
            <p className="text-lg font-bold text-center">
              Web Development Projects
            </p>
          </div>
        </Link>
        <Link href="/projects/machine-learning">
          <div className="pt-6 pb-1 px-8 grid grid-rows-2 justify-items-center items-center border border-black rounded-md shadow-md hover:bg-slate-100">
            <Image
              src={mlearning}
              alt="Machine Learning"
              width={120}
              height={120}
            />
            <p className="text-lg font-bold text-center">
              Machine Learning Projects
            </p>
          </div>
        </Link>
      </div>

      <hr className="border-slate-200" />
      <Cta />
    </section>
  );
};

export default page;
