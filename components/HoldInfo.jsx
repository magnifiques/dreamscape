import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "lucide-react";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center"></p>
      {text}
      <Link href={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <ArrowRightIcon width={10} height={10} />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello! My name is <span className="font-semibold">Arpit</span>
    </h1>
  ),
  2: (
    <InfoBox
      text="I create Web Applications and design machine learning models"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Created numerous full stack web applications using different tech stacks"
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
