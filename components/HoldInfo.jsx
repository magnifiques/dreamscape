import Link from "next/link";
import React from "react";
import Image from "next/image";
import arrow from "@/assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center"></p>
      {text}
      <Link href={link} className="neo-brutalism-white neo-btn">
        <p className="text-lg">{btnText}</p>
        <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <>
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hello! My name is <span className="font-semibold">Arpit Vaghela</span>
        <p className="pt-2">Swipe/scroll right to explore the island!</p>
      </h1>
    </>
  ),
  2: (
    <InfoBox
      text="I create Web Applications and research in machine learning field"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="I've built numerous full stack web applications using different tech stacks. On top of that, I design deep learning models using PyTorch Library"
      link="/projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking forward to connect? I'm just a few keystrokes away!"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const HoldInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HoldInfo;
