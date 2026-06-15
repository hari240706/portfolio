import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBrain, FaShieldAlt, FaCloud } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    {
      category: "Programming Languages",
      technologies: ["C", "C++", "Java", "Python", "JavaScript"],
      icon: "💻",
    },
    {
      category: "Web Development",
      technologies: ["HTML", "CSS", "React.js", "Next.js", "Node.js"],
      icon: "🌐",
    },
    {
      category: "Databases",
      technologies: ["MySQL", "MongoDB"],
      icon: "🗄️",
    },
    {
      category: "Tools & Platforms",
      technologies: ["Git", "GitHub", "Docker", "Linux", "Kali Linux"],
      icon: "⚙️",
    },
    {
      category: "AI & Machine Learning",
      technologies: ["AI Workflows", "Machine Learning", "AI Applications"],
      icon: "🤖",
    },
    {
      category: "Cybersecurity",
      technologies: [
        "OWASP Top 10",
        "Web Security Fundamentals",
        "Application Security Basics",
        "Linux Security"
      ],
      icon: "🛡️",
    },
  ];

  const focusAreas = [
    {
      icon: "🤖",
      title: "AI for Security",
      description: "Applying AI to cybersecurity challenges and intelligent automation.",
    },
    {
      icon: "🛡️",
      title: "Application Security",
      description: "Learning secure coding, OWASP Top 10, and vulnerability assessment.",
    },
    {
      icon: "☁️",
      title: "Cloud Security",
      description: "Exploring cloud fundamentals, Docker, Linux, and security practices.",
    },
    {
      icon: "💻",
      title: "Secure Development",
      description: "Building modern applications with security-first thinking.",
    },
  ];

  const services = [
    {
      icon: "🤖",
      title: "AI for Security",
      description:
        "Exploring how Artificial Intelligence can be used for threat detection, trust analysis, automation, and cybersecurity workflows.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description:
        "Learning application security, secure coding, Linux, OWASP Top 10, vulnerability assessment, and security fundamentals.",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
    },
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Building modern web applications and scalable software solutions using React, Next.js, Node.js, MongoDB, and JavaScript.",
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
    },
  ];

  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Docker", icon: "🐳" },
    { name: "Kali Linux", icon: "🐉" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git", icon: "🔶" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black overflow-x-hidden">
        {/* Mouse-Following Gradient Spotlight */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden md:block"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
          }}
        />

        {/* Floating Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* SECTION 1: Hero Introduction */}
        <section className="relative flex items-center pt-24 md:pt-32 pb-16 md:pb-24 lg:pb-28">
          <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              
              {/* Text Content (Name, Role, Description, Buttons, Socials, Tags, and Desktop Tech Stack) */}
              <motion.div
                className="flex-1 text-white text-center lg:text-left flex flex-col items-center lg:items-start w-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-center sm:items-start justify-center lg:justify-start">
                    <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm">
                      🛡️ Building Secure Intelligence with AI
                    </span>
                  
                    <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                      🚀 Open to Internships & Cybersecurity Opportunities
                    </span>
                  </div>
                </motion.div>

                {/* 1. Name */}
                <motion.h1
                  className="text-[32px] xs:text-5xl md:text-7xl lg:text-8xl font-black mb-4 text-center lg:text-left tracking-tight whitespace-nowrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                    Hariprasad R
                  </span>
                </motion.h1>

                {/* 2. Role */}
                <motion.h2
                  className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  AI for Security • Cybersecurity
                </motion.h2>

                {/* 3. Description */}
                <motion.p
                  className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed text-center lg:text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  B.E. Computer Science and Engineering student at{" "}
                  <span className="text-blue-400 font-semibold">
                    RMK Engineering College
                  </span>
                  . Passionate about AI, Cybersecurity, Application Security, and Cloud Security. Currently serving as a Software Developer Intern at LTI Technology and building projects that explore the intersection of Artificial Intelligence and Cybersecurity.
                </motion.p>

                {/* 4. Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="/projects" className="w-full sm:w-auto">
                    <motion.button
                      className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500/50 rounded-xl font-semibold text-white backdrop-blur-sm hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 min-h-[44px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Projects
                    </motion.button>
                  </Link>

                  <Link href="/contact" className="w-full sm:w-auto">
                    <motion.button
                      className="w-full sm:w-auto px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-white backdrop-blur-sm hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 min-h-[44px]"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get In Touch
                    </motion.button>
                  </Link>
                </motion.div>

                {/* 5. Social Links */}
                <motion.div
                  className="flex flex-wrap justify-center lg:justify-start gap-5 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <a
                    href="https://linkedin.com/in/hariprasad-r-95096232a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition duration-300 flex items-center justify-center min-w-[44px] min-h-[44px]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={28} />
                  </a>

                  <a
                    href="https://github.com/hari240706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300 flex items-center justify-center min-w-[44px] min-h-[44px]"
                    aria-label="GitHub"
                  >
                    <FaGithub size={28} />
                  </a>

                  <a
                    href="https://leetcode.com/u/hariprasad24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition duration-300 flex items-center justify-center min-w-[44px] min-h-[44px]"
                    aria-label="LeetCode"
                  >
                    <SiLeetcode size={28} />
                  </a>

                  <a
                    href="https://www.hackerrank.com/profile/hariprasad24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition duration-300 flex items-center justify-center min-w-[44px] min-h-[44px]"
                    aria-label="HackerRank"
                  >
                    <SiHackerrank size={28} />
                  </a>
                </motion.div>

                {/* 6. Tags */}
                <motion.div
                  className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {[
                    "🎓 CSE 2028",
                    "💼 LTI Intern",
                    "🛡️ Cybersecurity",
                    "🤖 AI Security",
                  ].map((item) => (
                    <div
                      key={item}
                      className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm"
                    >
                      {item}
                    </div>
                  ))}
                </motion.div>

                {/* Tech Stack - Desktop ONLY (Wraps) */}
                <motion.div
                  className="hidden lg:flex flex-wrap justify-start gap-3 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      className="px-3 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.05 }}
                      whileHover={{ y: -2 }}
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* 7. Profile Graphic (Stays under tags on mobile, right side on desktop) */}
              <motion.div
                className="flex-1 flex justify-center w-full z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] max-w-full aspect-square">

                  {/* Outer Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-cyan-500/20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 40,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-500/40" />
                  </motion.div>

                  {/* Second Ring */}
                  <motion.div
                    className="absolute inset-6 rounded-full border border-purple-500/20"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* AI Icon */}
                  <motion.div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 z-20"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-black border border-cyan-500/40 flex items-center justify-center">
                      <FaBrain className="text-cyan-400 text-2xl" />
                    </div>
                  </motion.div>

                  {/* Security Icon */}
                  <motion.div
                    className="absolute bottom-[10%] left-[5%] md:bottom-16 md:left-6 z-20"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-black border border-purple-500/40 flex items-center justify-center">
                      <FaShieldAlt className="text-purple-400 text-2xl" />
                    </div>
                  </motion.div>

                  {/* Cloud Icon */}
                  <motion.div
                    className="absolute bottom-[10%] right-[5%] md:bottom-16 md:right-6 z-20"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-black border border-blue-500/40 flex items-center justify-center">
                      <FaCloud className="text-blue-400 text-2xl" />
                    </div>
                  </motion.div>

                  {/* Profile Container */}
                  <div className="absolute inset-8 sm:inset-10 md:inset-12 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1 shadow-[0_0_60px_rgba(59,130,246,0.35)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                      <Image
                        src="/assets/Gemini_Generated_Image_mt5l74mt5l74mt5l-1.jpg"
                        alt="Hariprasad R"
                        width={600}
                        height={600}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 8. Tech Stack - Mobile ONLY (Horizontal scroll, single row) */}
              <motion.div
                className="flex lg:hidden w-full mt-4 flex-col items-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="w-full flex flex-nowrap overflow-x-auto gap-3 pb-3 justify-start px-2 scroll-smooth touch-pan-x">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex-shrink-0 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-300 flex items-center gap-2"
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 2: Achievements / Current Focus */}
        <section className="relative flex items-center py-16 md:py-24 lg:py-28">
          <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                Current Focus
              </h2>
              <p className="text-lg md:text-xl text-gray-400">Areas I'm actively building expertise in</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="h-full p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="text-5xl mb-5">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Skills Summary */}
        <section className="relative flex items-center py-16 md:py-24 lg:py-28">
          <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                Technical Skills
              </h2>
              <p className="text-lg md:text-xl text-gray-400">Technologies I work with</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/40 transition-all duration-300">
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Services */}
        <section className="relative flex items-center py-16 md:py-24 lg:py-28">
          <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                What I Do
              </h2>
              <p className="text-lg md:text-xl text-gray-400">My areas of expertise</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={`relative p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border ${service.border} transition-all duration-300 h-full`}>
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}