"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN</li>
        <li>DSA</li>
        <li>DEVOPS</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Left Side: Image and Text */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          {/* <Image
            src="/images/about-image.jpeg"
            width={300}
            height={300}
            alt="About Image"
            className="rounded-lg shadow-lg"
          /> */}
          <h2 className="text-4xl font-bold text-white mt-4">About Me</h2>
          <p className="text-base lg:text-lg mt-2 text-center md:text-left">
          I am good at coding backend, made a lot of applications. Also, I am good at DSA, solved many problems on LeetCode, and I am good at DevOps, made many cloud computing projects.
          </p>
        </div>

        {/* Right Side: Tabs */}
        <div className="flex flex-col justify-start">
          <div className="flex space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
