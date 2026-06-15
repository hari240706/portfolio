import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  const values = [
    {
      title: "AI for Security",
      description: "Applying Artificial Intelligence to solve cybersecurity challenges.",
      icon: "🤖",
    },
    {
      title: "Application Security",
      description: "Learning secure coding, OWASP Top 10, and vulnerability assessment.",
      icon: "🛡️",
    },
    {
      title: "Cloud Security",
      description: "Building cloud and container security foundations with Linux and Docker.",
      icon: "☁️",
    },
    {
      title: "Continuous Learning",
      description: "Improving skills through projects, internships, and communities.",
      icon: "📚",
    },
  ];

  const timeline = [
    { 
      year: "2024",
      title: "Programming Certifications",
      description:
        "Completed Programming in C & C++ and Programming in Python certification courses at Sudharsanam IT Academy with A and A+ grades respectively.",
      icon: "💻",
    },
    {
      year: "2024",
      title: "Started B.E. Computer Science & Engineering",
      description:
        "Began my Computer Science and Engineering journey at RMK Engineering College while building strong foundations in programming and problem-solving.",
      icon: "🎓",
    },
    {
      year: "2025",
      title: "Hackathons & Full-Stack Development",
      description:
        "Actively participated in hackathons and developed full-stack web applications using React, Node.js, MongoDB, JavaScript, and modern development tools.",
      icon: "🏆",
    },
    {
      year: "2026",
      title: "Artificial Intelligence Journey",
      description:
        "Completed the Infosys Springboard AI Virtual Internship 6.0 and explored practical applications of Artificial Intelligence through projects and experimentation.",
      icon: "🤖",
    },
    {
      year: "2026",
      title: "Industry Internships & Technical Communities",
      description:
        "Completed internships in Web Development, Java Programming, Cybersecurity, and Software Development while serving as a Tech Wing member at GDG On Campus RMKEC",
      icon: "💼",
    },
    {
      year: "2026",
      title: "Cybersecurity Project Development",
      description:
        "Built cybersecurity-focused projects including TrustLens AI, TrustLens Chrome Extension, Secure User Authentication System, and Sentinel Log Watch SIEM.",
      icon: "🛡️",
    },
    {
      year: "2026",
      title: "AMATIS Development",
      description:
        "Started developing AMATIS (Adaptive Multi-Agent Trust Intelligence System), combining Artificial Intelligence and Cybersecurity through intelligent multi-agent systems.",
      icon: "🚀",
    },
    {
      year: "Future",
      title: "Application Security Engineer",
      description:
        "Working towards becoming an Application Security Engineer while building expertise in Cloud Security, Secure Software Development, and AI-driven cybersecurity solutions.",
      icon: "☁️",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        
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

        <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 pb-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              About Me
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Get to know more about who I am and what drives me
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="w-full mb-16 md:mb-24 lg:mb-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-6 md:p-12 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 overflow-hidden group">

              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 text-center sm:text-left">
                  <motion.div
                    className="text-6xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    👋
                  </motion.div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Hariprasad R
                    </h2>

                    <p className="text-gray-400 mt-1 text-sm sm:text-base">
                      AI for Security • Application Security • Cloud Security
                    </p>
                  </div>
                </div>

                {/* Quick Badges */}
                <div className="flex flex-wrap gap-3 mt-6 mb-8 justify-center sm:justify-start">
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm">
                    🎓 B.E. CSE - RMKEC
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm">
                    🔐 Cybersecurity
                  </span>

                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm">
                    🤖 AI Security
                  </span>

                  <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                    ☁️ Cloud Security
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-5 text-base sm:text-lg text-gray-300 leading-relaxed text-center sm:text-left">

                  <p>
                    I'm a
                    <span className="text-blue-400 font-semibold">
                      {" "}3rd-Year B.E. Computer Science and Engineering student
                    </span>
                    {" "}at RMK Engineering College with a strong interest in Artificial Intelligence and Cybersecurity.
                  </p>

                  <p>
                    My current focus lies in
                    <span className="text-cyan-400 font-semibold"> AI for Security</span>,
                    <span className="text-purple-400 font-semibold"> Application Security</span>,
                    <span className="text-blue-400 font-semibold"> Cloud Security</span>, and
                    <span className="text-green-400 font-semibold"> Secure Software Development</span>.
                  </p>

                  <p>
                    I am currently working as a
                    <span className="text-yellow-400 font-semibold">
                      {" "}Software Developer Intern at LTI Technology
                    </span>
                    {" "}and the
                    <span className="text-purple-400 font-semibold">
                      {" "}Intern in Tech Team at Induskiller
                    </span>
                    {" "}while actively contributing as a member of the
                    <span className="text-cyan-400 font-semibold">
                      {" "}Tech Wing at GDG On Campus RMKEC
                    </span>.
                  </p>

                  <p>
                    I completed the
                    <span className="text-orange-400 font-semibold">
                      {" "}Infosys Springboard AI Virtual Internship
                    </span>
                    {" "}and am currently developing
                    <span className="text-pink-400 font-semibold">
                      {" "}AMATIS (Adaptive Multi-Agent Trust Intelligence System)
                    </span>,
                    exploring the intersection of AI and Cybersecurity.
                  </p>

                  <p className="text-blue-400 font-semibold">
                    My goal is to become an Application Security Engineer while building expertise in Cloud Security and AI-driven cybersecurity solutions.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
                    <h3 className="text-2xl font-bold text-blue-400">7</h3>
                    <p className="text-sm text-gray-400">Projects</p>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
                    <h3 className="text-2xl font-bold text-purple-400">14</h3>
                    <p className="text-sm text-gray-400">Hackathons</p>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
                    <h3 className="text-2xl font-bold text-cyan-400">7</h3>
                    <p className="text-sm text-gray-400">Internships</p>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
                    <h3 className="text-2xl font-bold text-green-400">2028</h3>
                    <p className="text-sm text-gray-400">Graduation</p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience & Communities + Current Focus */}
          <div className="w-full mb-16 md:mb-24 lg:mb-28">

            {/* Experience & Communities */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Experience & Communities
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24 lg:mb-28">

              <motion.div
                className="group"
                whileHover={{ y: -6 }}
              >
                <div className="h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">💼</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      LTI Technology
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Software Developer Intern
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ y: -6 }}
              >
                <div className="h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Induskiller
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Intern in Tech Team
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ y: -6 }}
              >
                <div className="h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">🌐</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      GDG On Campus RMKEC
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Tech Wing Member
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ y: -6 }}
              >
                <div className="h-full p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">🤖</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Infosys Springboard
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    AI Virtual Internship
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Current Focus */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Current Focus & Learning Path
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col justify-between overflow-hidden">
                    <div className="relative z-10 text-center flex flex-col items-center justify-between h-full">
                      <div className="flex flex-col items-center">
                        <motion.div
                          className="text-6xl mb-4"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {value.icon}
                        </motion.div>

                        <h3 className="text-xl font-bold text-white mb-3">
                          {value.title}
                        </h3>
                      </div>

                      <p className="text-sm text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="w-full mb-16 md:mb-24 lg:mb-28">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Certifications & Achievements
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {[
                {
                  icon: "🎖️",
                  title: "NCC 'A' Certificate",
                  desc: "Awarded A Grade in National Cadet Corps",
                },
                {
                  icon: "🏕️",
                  title: "Tritiya Sopan Badge",
                  desc: "Bharat Scouts & Guides",
                },
                {
                  icon: "🐍",
                  title: "Python Programming",
                  desc: "A+ Grade - Sudharsanam IT Academy",
                },
                {
                  icon: "💻",
                  title: "C & C++ Programming",
                  desc: "A Grade - Sudharsanam IT Academy",
                },
                {
                  icon: "🎨",
                  title: "Graphic Designing",
                  desc: "A Grade - G-Tec Computer Education",
                },
                {
                  icon: "🤖",
                  title: "Virtual Internship 6.0 (Artificial Intelligence)",
                  desc: "Infosys Springboard",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 transition-all flex flex-col justify-between">
                    <div>
                      <div className="text-5xl mb-4">
                        {cert.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">
                        {cert.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm mt-3">
                      {cert.desc}
                    </p>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Vision */}
          <div className="w-full mb-16 md:mb-24 lg:mb-28">

            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-rose-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Career Vision
            </motion.h2>

            <motion.div
              className="p-6 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3">
                  Application Security Engineer
                </h3>

                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Primary Career Goal
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl mb-3">🔐</div>
                    <h4 className="font-bold text-white mb-2">
                      Application Security
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Secure coding, OWASP Top 10, vulnerability assessment.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl mb-3">☁️</div>
                    <h4 className="font-bold text-white mb-2">
                      Cloud Security
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Container security, Linux, cloud infrastructure.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl mb-3">🤖</div>
                    <h4 className="font-bold text-white mb-2">
                      AI Security
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    Building AI-powered cybersecurity solutions.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="w-full">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Journey Into AI & Cybersecurity
            </motion.h2>

            <div className="relative">
              {/* Timeline Line (Centered on desktop, Left-aligned on mobile) */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-stretch md:items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Timeline Dot (Left-aligned on mobile, Centered on desktop) */}
                    <motion.div
                      className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black z-10"
                      whileHover={{ scale: 1.3 }}
                    />

                    {/* Content (pl-12 on mobile to clear dot, md:pl-0 on desktop) */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-20" : "md:pl-20"} pl-12 md:pl-0`}>
                      <div className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">{item.icon}</span>
                            <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-400 font-semibold">
                              {item.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
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