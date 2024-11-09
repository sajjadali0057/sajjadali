"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Mobile Application Development</li>
        <li>Architectures: MVVM, MVC, Clean Architecture, SOLID Principles</li>
        <li>State Management: Bloc, Cubit, Provider</li>
        <li> Dependency Injection: GetIt</li>
        <li>UI/UX Design: Responsive UI, Adaptive Layouts, Material Design, Custom Animations</li>
        <li>Performance Optimization: Memory Management, Efficient Rendering</li>
        <li>Tools: Android Studio, Visual Studio Code, Xcode, Flutter SDK</li>
        <li>Version Control: Git, GitHub</li>
        <li>Additional: API Integration, Agile Methodologies, Mobile App Performance 
        Optimization, Cross Platform Development</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Science in Computer Science
The University of Lahore  Lahore, Pakistan
2017 to 2022</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
       <li>Basic Development With
       Flutter Part II</li>
       <Link href="/cert1.pdf" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"> <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Flutter part II
              </span> </Link>


              <li>Object Oriented Programming
              Foundations</li>
              <Link href="/cert2.pdf" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"> <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                OOP
                </span> </Link>

                <li>Introduction to API Testing
                with Postman</li>
                <Link href="/cert3.pdf" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"> <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                API TESTING
                </span> </Link>
              
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter Developer, Global Innovative  Lahore, Pakistan (2022  2024)</li>
        <p>Engineered high-performance mobile applications using Flutter, ensuring smooth user experiences on both Android and iOS platforms. Collaborated cross-functionally with product, UX/UI, and QA teams to deliver feature-rich applications. Integrated APIs, led performance optimization, and implemented Clean Architecture for scalable solutions. Mentored developers, conducted code reviews, and followed Agile methodologies for timely delivery.</p>

        <li>Web Development Intern, Stellavant Technologies  Lahore, Pakistan (2021)</li>
        <p>Developed responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Optimized website performance, collaborated with designers, and implemented responsive design for seamless cross-device user experiences.</p>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a skilled Flutter developer based in Lahore with a strong background in mobile application development. I specialize in creating responsive and adaptive UIs with clean architecture principles, using state management tools like Bloc, Cubit, and Provider. I emphasize performance optimization and efficient rendering in my projects, leveraging tools like Android Studio, VS Code, and Xcode. Skilled in Git, API integration, and agile methodologies, I bring a comprehensive approach to cross-platform app development.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificates
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experience
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
