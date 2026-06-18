import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 0,
      title: "AMATIS (Adaptive Multi-Agent Trust Intelligence System)",
      description:
        "An AI-driven cybersecurity platform that leverages multiple intelligent agents to analyze trust, automate security workflows, and support cyber defense decision-making.",
      tech: [
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Cybersecurity",
        "Multi-Agent Systems"
      ],
      highlights: [
        "Multi-Agent AI",
        "Trust Intelligence",
        "Threat Analysis",
        "Security Automation"
      ],
      category: "ai",
      image: "🚀",
      status: "In Progress",
      year: "2026",
      link: "https://github.com/hari240706/Adaptive-Multi-Agent-Trust-Intelligence-System.git",
    },
    {
      id: 1,
      title: "TrustLens AI",
      description:
        "Multi-Agent AI system for detecting malicious websites using SSL analysis, WHOIS intelligence, and AI-powered security assessment.",
      tech: [
        "Python",
        "FastAPI",
        "React",
        "OpenAI",
        "Cybersecurity"
      ],
      highlights: [
        "Malicious URL Detection",
        "Multi-Agent AI",
        "SSL Analysis",
        "Threat Intelligence"
      ],
      category: "cybersecurity",
      image: "🔍",
      status: "Completed",
      year: "2026",
      link: "https://github.com/hari240706/TrustLens-AI"
    },
    {
      id: 2,
      title: "TrustLens Chrome Extension",
      description:
        "Browser extension providing real-time website trust analysis and AI-powered security insights.",
      tech: [
        "JavaScript",
        "Chrome Extension",
        "AI",
        "Security"
      ],
      highlights: [
        "Real-Time Analysis",
        "Browser Security",
        "AI Insights",
        "Manifest V3"
      ],
      category: "cybersecurity",
      image: "🧩",
      status: "Completed",
      year: "2026",
      link: "https://github.com/hari240706/TrustLens-AI-Extension"
    },
    {
      id: 3,
      title: "Sentinel Log Watch",
      description:
        "An Offline SIEM System designed for air-gapped networks that enables secure log collection, monitoring, threat detection, and alerting without requiring internet connectivity.",
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "Vite",
        "Tailwind CSS"
      ],
      highlights: [
        "Offline SIEM",
        "Threat Detection",
        "Log Monitoring",
        "Air-Gapped Security"
      ],
      category: "cybersecurity",
      image: "🛡️",
      status: "Completed",
      year: "2026",
      link: "https://github.com/hari240706/sentinel-log-watch"
    },
    {
      id: 4,
      title: "Secure User Authentication System",
      description: "A secure authentication system that implements multi-factor verification, role-based access control, and strong password policies to protect user accounts from common cyber attacks.",
      tech: ["Node.js", "MongoDB", "JWT", "BCrypt"],
      category: "cybersecurity",
      image: "🛡️",
      status: "Completed",
      link: "https://github.com/hari240706/Cyber-Security-Authentication-Project.git",
      highlights: [
        "JWT Authentication",
        "RBAC",
        "BCrypt Encryption"
      ],
      year: "2026",
    },
    {
      id: 5,
      title: "Urban Energy Optimization with Personalized Carbon Footprint Tracking Overview",
      description: "This project aims to develop a system that optimizes urban energy consumption while providing personalized carbon footprint tracking for residents. By integrating smart city technologies, the system seeks to promote sustainable living practices and reduce overall carbon emissions in urban environments.",
      tech: ["React", "Node.js", "JavaScript", "MongoDB"],
      category: "fullstack",
      image: "🌐",
      status: "Completed",
      link: "https://github.com/hari240706/Urban-Energy-Optimization-with-Personalized-Carbon-Footprint-Tracking-for-Sustainable-Smart-Cities.git",
      highlights: [
        "Carbon Tracking",
        "Energy Optimization",
        "Smart City Analytics"
      ],
      year: "2025",
    },
    {
      id: 6,
      title: "Scholarship Track Portal",
      description: "Scholarship Track Portal is a web-based application designed to simplify scholarship management for students and administrators. The portal enables students to apply for scholarships and track application statuses, while administrators can manage applications, verify eligibility, and streamline the scholarship workflow.",
      tech: ["React", "Node.js", "MongoDB", "OAuth"],
      category: "ai",
      image: "🤖",
      status: "Completed",
      link: "https://github.com/hari240706/scholarship-track-portal.git",
      highlights: [
        "Student Portal",
        "Admin Dashboard",
        "Application Tracking"
      ],
      year: "2025",
    },
    {
      id: 7,
      title: "Resume Builder for Tier-2/Tier-3 Students",
      description: "A full-stack resume builder web application designed to help students from Tier-2/Tier-3 colleges easily create professional-looking resumes for jobs, internships, and hackathons.",
      tech: ["JavaScript", "Python", "Jinja2", "pdfkit + wkhtmltopdf"],
      category: "fullstack",
      image: "🔧",
      status: "Completed",
      link: "https://github.com/hari240706/VibeCode-India-2025.git",
      highlights: [
        "PDF Generation",
        "Resume Templates",
        "Student Friendly"
      ],
      year: "2025",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "ai", label: "Artificial Intelligence" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative pt-24 pb-20 overflow-x-hidden">
        
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow"
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl pb-4 font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              My Projects
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing projects across AI, Cybersecurity, Full-Stack Development, and Secure Software Engineering.
            </p>
          </motion.div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <h3 className="text-3xl font-bold text-blue-400">7</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <h3 className="text-3xl font-bold text-purple-400">3</h3>
              <p className="text-gray-400 text-sm">Domains</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-cyan-400">Cybersecurity</h3>
              <p className="text-gray-400 text-sm">Focus Area</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <h3 className="text-3xl font-bold text-green-400">2026</h3>
              <p className="text-gray-400 text-sm">Latest Work</p>
            </div>
          </div>

          {/* Featured Project */}
          <motion.div
            className="mb-16 md:mb-24 lg:mb-28"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">
                🚀
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Featured Project
              </h2>
            </motion.div>

            <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 p-6 md:p-10">
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm">
                  In Progress
                </span>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 items-center text-center lg:text-left">
                <motion.div
                  className="text-8xl flex justify-center w-full lg:w-auto"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🚀
                </motion.div>

                <div className="flex-1 w-full flex flex-col items-center lg:items-start">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    <span className="text-5xl mr-3 align-middle">
                      🤖
                    </span>

                    <span className="pb-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 break-words">
                      Adaptive Multi-Agent Trust Intelligence System (AMATIS)
                    </span>
                  </h3>

                  <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-3xl">
                    An AI-driven cybersecurity initiative exploring how intelligent agents
                    can collaborate to improve trust analysis, security automation,
                    and cyber defense decision-making.
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                    {[
                      "Python",
                      "Artificial Intelligence",
                      "Cybersecurity",
                      "Multi-Agent Systems",
                      "Machine Learning"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm">
                      🤖 AI + Security
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm">
                      🔐 Trust Intelligence
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm">
                      🚀 Flagship Project
                    </div>
                  </div>

                  <motion.a
                    href="https://github.com/hari240706/Adaptive-Multi-Agent-Trust-Intelligence-System.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold min-h-[44px]"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Repository →
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 min-h-[44px] ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500/50 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative h-full"
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 min-h-[420px] flex flex-col justify-between overflow-hidden h-full">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Inner Content Wrapper */}
                    <div className="relative z-10 flex flex-col justify-between h-full w-full flex-1">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs">
                              {project.year}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                                project.status === "In Progress"
                                  ? "bg-orange-500/20 border-orange-500/30 text-orange-400"
                                  : "bg-green-500/20 border-green-500/30 text-green-400"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <div className="text-5xl">
                            {project.image}
                          </div>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed text-sm mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.highlights?.map((item, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                            >
                              ✨ {item}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom-Aligned Button */}
                      <div className="mt-auto pt-4 border-t border-white/5">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link min-h-[44px]"
                          whileHover={{ x: 5 }}
                        >
                          <span className="font-semibold text-sm">GitHub Repository</span>
                          <motion.span
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                          >
                            →
                          </motion.span>
                        </motion.a>
                      </div>
                    </div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Future Projects */}
          <div className="mt-20 md:mt-24 lg:mt-28 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              🔮 Future Projects
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🔐",
                  title: "Vulnerability Scanner",
                },
                {
                  icon: "☁️",
                  title: "Cloud Security Dashboard",
                },
                {
                  icon: "🤖",
                  title: "AMATIS v2",
                },
                {
                  icon: "🛡️",
                  title: "Secure DevOps Pipeline",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="text-5xl mb-4">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mt-3">
                    Planned project for future development.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Stats Section */}
          <motion.div
            className="mt-20 md:mt-24 lg:mt-28 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-500 mb-4"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                🐙 GitHub Activity & Open Source Journey
              </motion.h2>

              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                A snapshot of my projects, technologies, repositories, and continuous learning journey through GitHub.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Repositories */}
              <motion.div
                whileHover={{ y: -6 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-center h-full"
              >
                <div className="text-5xl mb-3">🐙</div>
                <h3 className="text-3xl font-bold text-blue-400">12</h3>
                <p className="text-gray-400 text-sm">Repositories</p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                whileHover={{ y: -6 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-center h-full"
              >
                <div className="text-5xl mb-3">💻</div>
                <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-400 text-sm">Technologies</p>
              </motion.div>

              {/* Projects */}
              <motion.div
                whileHover={{ y: -6 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-center h-full"
              >
                <div className="text-5xl mb-3">🚀</div>
                <h3 className="text-3xl font-bold text-purple-400">7</h3>
                <p className="text-gray-400 text-sm">Projects</p>
              </motion.div>

              {/* Career Focus */}
              <motion.div
                whileHover={{ y: -6 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/40 transition-all duration-300 flex flex-col justify-center h-full"
              >
                <div className="text-5xl mb-3">🔐</div>
                <h3 className="text-lg sm:text-xl font-bold text-green-400">
                  AI + Security
                </h3>
                <p className="text-gray-400 text-sm">Career Focus</p>
              </motion.div>
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 mb-6 text-sm sm:text-base">Explore more projects, experiments, and future cybersecurity initiatives on GitHub.</p>
            <motion.a
              href="https://github.com/hari240706"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 min-h-[44px] leading-tight"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit My GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}