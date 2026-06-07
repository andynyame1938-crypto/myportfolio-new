"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const skills = [
    { name: "Next.js", icon: "/nextjs-icon.png" },
    { name: "React", icon: "/react-icon.png" },
    { name: "Tailwind CSS", icon: "/tailwind-icon.png" },
    { name: "Framer Motion", icon: "/framer-icon.png" },
    { name: "JavaScript", icon: "/javascript-icon.png" },
    { name: "GitHub", icon: "/github-icon.png" },
  ];

  const timeline = [
    {
      title: "Self-Learning Journey",
      period: "2025 – Present",
      description:
        "Focused on mastering modern web development through online courses, tutorials, and building personal projects.",
    },
    {
      title: "Education",
      period: "2024 – Present",
      description:
        "Currently expanding knowledge in software development, specializing in Next.js, Tailwind CSS, and Framer Motion.",
    },
    {
      title: "Future Goals",
      period: "Upcoming",
      description:
        "Looking forward to gaining hands-on experience through internships, collaborations, and open-source contributions.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900 text-white px-6">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I’m Andy Nyame
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-gray-300 mb-6"
          >
            A passionate Software Developer building modern web experiences
          </motion.p>

          <motion.a
            href="#skills"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            View My Work
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex-1 flex justify-center mt-8 md:mt-0"
        >
          <Image
            src="/me.jpg"
            alt="Andy Nyame"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-blue-500"
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center mb-8 md:mb-0"
        >
          <Image
            src="/me.jpg"
            alt="Andy Nyame"
            width={250}
            height={250}
            className="rounded-lg shadow-lg border-4 border-blue-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            I’m Andy Nyame, a passionate Software Developer focused on building
            modern, responsive, and user‑friendly web applications. I love
            combining clean design with smooth animations to create engaging
            digital experiences.
          </p>

          <ul className="space-y-3 text-left">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span>
              Skilled in Next.js, Tailwind CSS, and Framer Motion
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span>
              Experienced with responsive design and performance optimization
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span>
              Passionate about creating smooth user experiences
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={80}
                height={80}
                className="mb-4"
              />
              <p className="text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience & Education Section */}
      <section
        id="experience"
        className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-12"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience & Education
        </motion.h2>

        <div className="space-y-8 max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-blue-500 mb-2">{item.period}</p>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12"
>
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-4xl font-bold mb-12"
  >
    Contact Me
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="text-lg text-gray-300 mb-8 text-center max-w-xl"
  >
    I’m always excited to connect with fellow developers, collaborators, or
    anyone interested in my work. Feel free to reach out!
  </motion.p>

  <div className="flex flex-col md:flex-row gap-6">
    <a
      href="mailto:andynyame1938@gmail.com"
      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition"
    >
      Email Me
    </a>
    <a
      href="https://www.linkedin.com/in/nyame-andy-627986409"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/andynyame1938-crypto"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
    >
      GitHub
    </a>
  </div>
</section>
</main>
  );
}