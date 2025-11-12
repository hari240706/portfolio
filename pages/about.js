import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const interests = [
    { icon: "💻", title: "Coding", description: "Building innovative solutions" },
    { icon: "🤖", title: "AI/ML", description: "Exploring artificial intelligence" },
    { icon: "🔧", title: "IoT", description: "Creating smart systems" },
    { icon: "📚", title: "Learning", description: "Always expanding knowledge" },
    { icon: "🎮", title: "Gaming", description: "Strategy and puzzle games" },
    { icon: "🎵", title: "Music", description: "Coding to good beats" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "Always seeking creative solutions to complex problems",
      icon: "💡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Collaboration",
      description: "Believing in the power of teamwork and shared knowledge",
      icon: "🤝",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Quality",
      description: "Committed to delivering high-quality, well-tested code",
      icon: "⭐",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Growth",
      description: "Continuously learning and adapting to new technologies",
      icon: "🚀",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Started B.E. CSE",
      description: "Began journey at RMK Engineering College, diving deep into computer science",
      icon: "🎓",
    },
    {
      year: "2024",
      title: "First Hackathon",
      description: "Participated in my first hackathon, learned the power of rapid development",
      icon: "🏆",
    },
    {
      year: "2024",
      title: "AI/ML Projects",
      description: "Started working on AI chatbot integration and ML model deployment",
      icon: "🤖",
    },
    {
      year: "2025",
      title: "Full-Stack Focus",
      description: "Developed multiple full-stack applications with modern frameworks",
      icon: "🌐",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 40, 0],
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
              className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              About Me
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get to know more about who I am and what drives me
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="text-6xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    👋
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Hello, I'm Hariprasad!
                  </h2>
                </div>
                
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm a <span className="text-blue-400 font-semibold">passionate B.E. Computer Science Engineering student</span> at 
                    RMK Engineering College, currently in my 2nd year. My journey in tech is driven by curiosity and 
                    a desire to create meaningful solutions.
                  </p>
                  
                  <p>
                    I specialize in <span className="text-purple-400 font-semibold">Full-Stack Development</span>, 
                    <span className="text-cyan-400 font-semibold"> AI/ML Integration</span>, and 
                    <span className="text-green-400 font-semibold"> IoT Projects</span>. I love working with modern 
                    technologies like React, Next.js, Node.js, Python, and Arduino.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me participating in hackathons, exploring new technologies, 
                    or collaborating with my team on innovative projects. I believe in continuous learning and 
                    always strive to stay updated with the latest industry trends.
                  </p>
                  
                  <p className="text-blue-400 font-semibold">
                    My goal? To leverage technology to solve real-world problems and make a positive impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What I Value
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="text-6xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${value.color} mb-3`}>
                        {value.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              My Interests
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="relative p-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center">
                    <div className="text-5xl mb-2">{interest.icon}</div>
                    <h3 className="text-sm font-bold text-white mb-1">{interest.title}</h3>
                    <p className="text-xs text-gray-500">{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              My Journey
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10"
                      whileHover={{ scale: 1.5 }}
                    />

                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} pl-20 md:pl-0`}>
                      <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">{item.icon}</span>
                          <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-400 font-semibold">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}