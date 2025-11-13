import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "HTML, CSS, JavaScript", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "C, C++, Java", level: 97, color: "from-green-500 to-emerald-500" },
    { name: "Python & AI/ML", level: 80, color: "from-purple-500 to-pink-500" },
    { name: "IoT & Arduino", level: 85, color: "from-orange-500 to-red-500" },
    { name: "MongoDB & SQL", level: 70, color: "from-yellow-500 to-amber-500" },
  ];

  const achievements = [
    { number: "5+", label: "Projects Completed", icon: "🚀" },
    { number: "4+", label: "Hackathons Participated", icon: "🏆" },
    { number: "7+", label: "Tech Stacks", icon: "💻" },
    { number: "100%", label: "Dedication", icon: "⚡" },
  ];

  const services = [
    {
      icon: "🌐",
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Next.js, and Node.js",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
    },
    {
      icon: "🤖",
      title: "AI/ML Integration",
      description: "Implementing AI chatbots and machine learning models",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
    },
    {
      icon: "🔧",
      title: "IoT Solutions",
      description: "Creating smart systems with Arduino, ESP32, and sensors",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
    },
  ];

  const hexagonClip = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black">
        {/* Mouse-Following Gradient Spotlight */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300"
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
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* SECTION 1: Hero Introduction */}
        <section className="min-h-screen relative flex items-center overflow-x-hidden pt-20">
          {/* Grid pattern removed for cleaner look */}
          
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left: Text Content */}
              <motion.div
                className="flex-1 text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm">
                    👋 Welcome to my portfolio
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 whitespace-nowrap">
                    Hariprasad R
                  </span>
                </motion.h1>

                <motion.h2
                  className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Full Stack Developer & AI Enthusiast
                </motion.h2>

                <motion.p
                  className="text-base md:text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  B.E. CSE Student at{" "}
                  <span className="text-blue-400 font-semibold">
                    RMK Engineering College
                  </span>
                  . Building innovative solutions with modern technologies.
                  Specialized in Full-Stack Development, AI Integration, and IoT
                  Projects.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-6 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href="/projects">
                    <motion.button
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">View Projects</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ x: "100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </Link>

                  <Link href="/contact">
                    <motion.button
                      className="px-8 py-4 border-2 border-blue-500/50 rounded-xl font-semibold text-white backdrop-blur-sm hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get In Touch
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  className="flex gap-4 flex-wrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {["C++", "Python", "Java", "HTML", "CSS", "JavaScript"].map(
                    (tech, i) => (
                      <motion.div
                        key={tech}
                        className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm text-gray-400 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        {tech}
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>

              {/* Right: Cyberpunk Hexagonal Profile Frame */}
              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative">
                  {/* Hexagonal glowing border */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96" style={{ display: 'block' }}>
                    {/* Outer hexagon glow */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        WebkitClipPath: hexagonClip,
                        clipPath: hexagonClip,
                        width: '100%',
                        height: '100%',
                        display: 'block',
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 40px 10px rgba(59, 130, 246, 0.6)",
                          "0 0 60px 20px rgba(147, 51, 234, 0.6)",
                          "0 0 40px 10px rgba(59, 130, 246, 0.6)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
                    </motion.div>

                    {/* Animated corner accents */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-sm"
                        style={{
                          top: "50%",
                          left: "50%",
                          transformOrigin: "center",
                        }}
                        animate={{
                          rotate: angle,
                          x: Math.cos((angle * Math.PI) / 180) * 170,
                          y: Math.sin((angle * Math.PI) / 180) * 170,
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}

                    {/* Rotating tech circles */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      {[1, 2, 3].map((ring, i) => (
                        <div
                          key={i}
                          className={`absolute inset-0 border border-blue-500/${30 - i * 10} rounded-full`}
                          style={{
                            margin: `${i * 20}px`,
                            borderStyle: i % 2 === 0 ? "dashed" : "dotted",
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Inner hexagonal image container - ENHANCED FIREFOX FIX */}
                    <motion.div
                      className="absolute inset-4 overflow-hidden group"
                      style={{
                        WebkitClipPath: hexagonClip,
                        clipPath: hexagonClip,
                        width: 'calc(100% - 32px)',
                        height: 'calc(100% - 32px)',
                        display: 'block',
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Profile Image */}
                      <img
                        src="/assets/Gemini_Generated_Image_mt5l74mt5l74mt5l-1.jpg"
                        alt="Hariprasad R"
                        style={{
                          WebkitClipPath: hexagonClip,
                          clipPath: hexagonClip,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />

                      {/* Glitch effect overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-transparent to-purple-600/40 opacity-0 group-hover:opacity-100"
                        style={{
                          WebkitClipPath: hexagonClip,
                          clipPath: hexagonClip,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Corner tech brackets */}
                      <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
                      <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
                      <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-cyan-400"></div>
                      <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-400"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Achievements */}
        <section className="min-h-screen relative flex items-center py-20">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                Achievements
              </h2>
              <p className="text-xl text-gray-400">Numbers that define my journey</p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                      {item.number}
                    </div>
                    <div className="text-gray-400 font-medium">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Skills */}
        <section className="min-h-screen relative flex items-center py-20">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                Technical Skills
              </h2>
              <p className="text-xl text-gray-400">Technologies I work with</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-2 flex justify-between text-white">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Services */}
        <section className="min-h-screen relative flex items-center py-20">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                What I Do
              </h2>
              <p className="text-xl text-gray-400">My areas of expertise</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`relative p-8 bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-2xl border ${service.border} transition-all duration-300 h-full`}>
                    <div className="text-6xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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