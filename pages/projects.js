import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Urban Energy Optimization with Personalized Carbon Footprint Tracking Overview",
      description: "This project aims to develop a system that optimizes urban energy consumption while providing personalized carbon footprint tracking for residents. By integrating smart city technologies, the system seeks to promote sustainable living practices and reduce overall carbon emissions in urban environments.",
      tech: ["React", "Node.js", "JavaScript", "MongoDB"],
      category: "fullstack",
      image: "🌐",
      link: "https://github.com/hari240706/Urban-Energy-Optimization-with-Personalized-Carbon-Footprint-Tracking-for-Sustainable-Smart-Cities.git",
    },
    {
      id: 2,
      title: "Scholarship Track Portal",
      description: "Scholarship Track Portal is a web-based application designed to simplify scholarship management for students and administrators. The portal enables students to apply for scholarships and track application statuses, while administrators can manage applications, verify eligibility, and streamline the scholarship workflow.",
      tech: ["React", "Node.js", "MongoDB", "OAuth"],
      category: "ai",
      image: "🤖",
      link: "https://github.com/hari240706/scholarship-track-portal.git",
    },
    {
      id: 3,
      title: "Resume Builder for Tier-2/Tier-3 Students",
      description: "A full-stack resume builder web application designed to help students from Tier-2/Tier-3 colleges easily create professional-looking resumes for jobs, internships, and hackathons.",
      tech: ["JavaScript", "Python", "Jinja2", "pdfkit + wkhtmltopdf"],
      category: "fullstack",
      image: "🔧",
      link: "https://github.com/hari240706/VibeCode-India-2025.git",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              My Projects
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of my work in Full-Stack Development and AI
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:border-blue-500/50 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{project.image}</div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Button */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span className="font-semibold">View Project</span>
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-400 mb-6">Want to see more?</p>
            <motion.a
              href="https://github.com/hari240706"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
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