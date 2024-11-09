"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12 justify-items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-8 sm:col-span-6 text-center sm:text-left justify-self-center sm:justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sajjad Ali",
                1000,
                "Flutter Development Expert",
                1000,
                "Mobile App Innovator",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Crafting Innovative Mobile Experiences
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Hire Me Button */}
            <Link
              href="#contact"
              className="px-6 py-3 w-[250px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center"
            >
              Hire Me
            </Link>

            {/* Download Resume Button */}
            <Link
              href="/cv.pdf"
              className="px-6 py-3 w-[250px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white text-center mt-4 sm:mt-0"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-4 sm:col-span-6 mt-4 sm:mt-0 justify-self-center"
        >
          <div className="rounded-full bg-[#181818] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] relative overflow-hidden mx-auto">
            <Image
              src="/images/hero-image.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
