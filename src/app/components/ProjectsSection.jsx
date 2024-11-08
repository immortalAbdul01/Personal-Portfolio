"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Learnify",
    description: "A full-stack e-learning platform where you can add and pursue courses",
    image: "/images/projects/learnify.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/immortalAbdul01/Learnify",
    previewUrl: "https://learnify-jade.vercel.app",
  },{
    id: 2,
    title: "HireHunt",
    description: "A full stack job portal including client side",
    image: "/images/projects/hirehunt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/immortalAbdul01/HireHunt",
    previewUrl: "hire-hunt.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "A full stack e-commerce website",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/immortalAbdul01/Hackathon-Team-gryfindor-flipkart-clone-2",
    previewUrl: "flipkart2.vercel.app",
  },
  {
    id: 4,
    title: "Seamless AWS CI/CD Pipeline with AWS Services",
    description: "A streamlined AWS-based CI/CD pipeline to enhance software development and deployment.",
    image: "/images/projects/aws.png",
    tag: ["All", "DevOps"],
    gitUrl: "https://devops0to1.hashnode.dev/creating-a-seamless-aws-cicd-pipeline-with-aws-services",
    previewUrl: "https://devops0to1.hashnode.dev/creating-a-seamless-aws-cicd-pipeline-with-aws-services",
	},
  {
    id: 5,
    title: "AWS Lift and Shift Project",
    description: "The project's primary goal is to move our existing on-premises application to the AWS cloud while retaining the core structure of our application, its data, and its functionality.",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1698732256640/07233fbc-60a5-452a-8b05-adfcd4d4cbf8.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    tag: ["All", "DevOps"],
    gitUrl: "https://devops0to1.hashnode.dev/aws-lift-and-shift-project",
    previewUrl: "https://devops0to1.hashnode.dev/aws-lift-and-shift-project",
  }
//   {
//     id: 4,
//     title: "smart home app",
//     description: "Project 4 description",
//     image: "/images/projects/smart.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "https://www.figma.com/design/j5nB8eu2Lz1w0XnKaDH78B/heath-tracker?m=auto&t=s1Juj9hlBQ0tzAhA-6",
//   },
//   {
//     id: 5,
//     title: "chat app",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/chat.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "https://www.figma.com/design/AxkvnVNHHUh23RRmPkAdFI/chat?m=auto&t=s1Juj9hlBQ0tzAhA-6",
//   },
//   {
//     id: 6,
//     title: "fitness app",
//     description: "Project 5 description",
//     image: "/images/projects/fit.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "https://www.figma.com/design/j5nB8eu2Lz1w0XnKaDH78B/heath-tracker?m=auto&t=s1Juj9hlBQ0tzAhA-6",
//   },
//   {
//     id: 7,
//     title: "social media app",
//     description: "Project 5 description",
//     image: "/images/projects/insta.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "https://www.figma.com/design/moUQwAEf6iObzQW2dNfS5e/instagram?m=auto&t=s1Juj9hlBQ0tzAhA-6",
//   }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DevOps"
          isSelected={tag === "DevOps"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
