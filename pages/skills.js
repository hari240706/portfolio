import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5 & CSS3", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🌐" },
      ],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "C and C++", level: 90, icon: "🟢" },
        { name: "Python", level: 95, icon: "🐍" },
        { name: "Java", level: 88, icon: "🔌" },
      ],
    },
    {
      category: "AI/ML & Data Science",
      icon: "🤖",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python (ML Libraries)", level: 70, icon: "🔬" },
        { name: "AI Model Integration", level: 75, icon: "🧠" },
        { name: "Ollama & LLMs", level: 70, icon: "💬" },
        { name: "Data Analysis", level: 70, icon: "📊" },
      ],
    },
    {
      category: "IoT & Hardware",
      icon: "🔧",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Arduino & ESP32", level: 80, icon: "🎛️" },
        { name: "Sensor Integration", level: 90, icon: "📡" },
        { name: "Arduino IDE for IoT", level: 85, icon: "⚡" },
        { name: "Circuit Design", level: 70, icon: "🔌" },
      ],
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      color: "from-yellow-500 to-amber-500",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "📚" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Figma Basics", level: 80, icon: "🐧" },
        { name: "Adobe Photoshop", level: 80, icon: "📮" },
        { name: "Adobe InDesign", level: 70, icon: "🎨" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
              className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Technical Skills
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My expertise across different technologies and domains
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-5xl">{category.icon}</div>
                  <h2 className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                    {category.category}
                  </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative group"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      onHoverStart={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                        {/* Animated Background */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />

                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{skill.icon}</span>
                              <h3 className="text-lg font-bold text-white">
                                {skill.name}
                              </h3>
                            </div>
                            <span className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{
                                  x: ["-100%", "100%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${category.color} rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl">
                I'm constantly expanding my skill set and staying updated with the latest technologies. 
                Currently exploring advanced AI/ML techniques and cloud technologies.
              </p>
              <motion.a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}