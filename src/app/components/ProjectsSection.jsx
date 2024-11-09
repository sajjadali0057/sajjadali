"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Fast Wheel",
    description: "FastWheel is a user-friendly mobile application",
    image: "/images/projects/1.jpeg",
    secondaryImages: ["/images/projects/1a.jpeg", "/images/projects/1b.jpeg","/images/projects/1c.jpeg","/images/projects/1d.jpeg","/images/projects/1e.jpeg","/images/projects/1f.jpeg","/images/projects/1g.jpeg"],
    tag: ["All", "Mobile Apps"],
    gitUrl: "https://github.com/sajjadali0057",
    previewUrl: "https://github.com/sajjadali0057/FastWheel",
  },
  {
    id: 2,
    title: "ChatCash",
    description: "ChatCash revolutionizes the way we communicate and transact",
    image: "/images/projects/2.jpeg",
    secondaryImages: ["/images/projects/2a.jpeg", "/images/projects/2b.jpeg","/images/projects/2c.jpeg"],
    tag: ["All", "Applications", "MobileApps"],
    gitUrl: "https://github.com/sajjadali0057",
    previewUrl: "https://github.com/sajjadali0057/ChatCash",
  },
  {
    id: 3,
    title: "Creademic",
    description: "Creademic Link is mainly introduced for the hairdresser, salon workers, or the students who want to learn deeply about this profession",
    image: "/images/projects/c.jpeg",
    secondaryImages: ["/images/projects/c1.jpeg", "/images/projects/c2.jpeg","/images/projects/c3.jpeg","/images/projects/c4.jpeg","/images/projects/c5.jpeg"],
    tag: ["All", "Mobile Apps"],
    gitUrl: "https://github.com/sajjadali0057",
    previewUrl: "https://github.com/sajjadali0057/Creademic",
  },
  {
    id: 4,
    title: "Bloodcart",
    description: "Care and work for humanity is the primary responsibility of all human beings. Blood Cart app is mainly designed considering this point to help people serve mankind as much as they can",
    image: "/images/projects/4a.jpeg",
    secondaryImages: ["/images/projects/4b.jpeg", "/images/projects/4c.jpeg","/images/projects/4d.jpeg","/images/projects/4e.jpeg","/images/projects/4g.jpeg"],
    tag: ["All","Mobile Apps"],
    gitUrl: "https://github.com/sajjadali0057",
    previewUrl: "https://github.com/sajjadali0057/BloodCart",
  },
  {
    id: 4,
    title: "IRK",
    description: "Flutter Application",
    image: "/images/projects/5.jpeg",
    secondaryImages: ["/images/projects/5a.jpeg", "/images/projects/5b.jpeg","/images/projects/5c.jpeg","/images/projects/5e.jpeg","/images/projects/5f.jpeg"],
    tag: ["All","Mobile Apps"],
    gitUrl: "https://github.com/sajjadali0057",
    previewUrl: "https://github.com/sajjadali0057/IRK",
  },
  // Add additional project objects similarly
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
          name="Mobile Apps"
          isSelected={tag === "Mobile Apps"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
  title={project.title}
  description={project.description}
  imgUrl={project.image}
  gitUrl={project.gitUrl}
  previewUrl={project.previewUrl}
  secondaryImages={project.secondaryImages} // Pass secondary images
  onClick={() => handleImageClick(project)}
/>
          </motion.li>
        ))}
      </ul>

      {/* Modal for displaying secondary images */}
      {selectedProject && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg max-w-lg mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black"
            >
              Close
            </button>
            <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {selectedProject.secondaryImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Secondary ${index}`}
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;