import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "B.E. Computer Science and Engineering",
      institution: "RMK Engineering College",
      location: "Chennai, India",
      period: "2024 - 2028",
      current: true,
      year: "2nd Year (3rd Semester)",
      achievements: [
        "Active participant in hackathons and coding competitions",
        "Working on multiple full-stack and AI/ML projects",
      ],
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "Shree Niketan Matriculation Higher Secondary School",
      location: "Thiruvallur",
      period: "2022 - 2024",
      current: false,
      achievements: [
        "Strong foundation in Mathematics and Computer Science",
        "Developed early interest in programming",
        "NCC 'A' Certificate holder and Bharath Scouts and Guides Tritiya Sopan Certificate holder",
      ],
      icon: "📚",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    {
      title: "Soft Skill Development",
      platform: "NPTEL",
      year: "2024",
      icon: "🌐",
    },
    {
      title: "Programming in Python",
      platform: "Sudharsanam IT Academy (P) Ltd",
      year: "2024",
      icon: "🐍",
    },
    {
      title: "Programming in C and C++",
      platform: "Sudharsanam IT Academy (P) Ltd",
      year: "2024",
      icon: "🔧",
    },
    {
      title: "Generative AI Applications and Python Fundamentals",
      platform: "GUVI Geek Network",
      year: "2024",
      icon: "📚",
    },
    {
      title: "Designing e-commerce website in Tamil",
      platform: "GUVI Geek Network",
      year: "2024",
      icon: "📱",
    },
    {
      title: "Various 30+ courses on topics like java, Ai/ML, DBMS, etc.",
      platform: "Infosys Springboard",
      year: "2024",
      icon: "🚀",
    },
  ];

  const activities = [
    {
      title: "Hackathon Participation",
      description: "Participated in 4+ hackathons, developing innovative solutions",
      icon: "🏆",
    },
    {
      title: "Team Projects",
      description: "Collaborated with teams on full-stack and IoT projects",
      icon: "👥",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
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
              className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Education
            </motion.h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">🎓</span>
              Academic Background
            </motion.h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Current Badge */}
                    {edu.current && (
                      <motion.div
                        className="absolute top-4 right-4 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full flex items-center gap-2"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-semibold">Current</span>
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <motion.div
                          className={`text-6xl p-4 bg-gradient-to-br ${edu.color} rounded-2xl`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {edu.icon}
                        </motion.div>
                        
                        <div className="flex-1">
                          <h3 className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${edu.color} mb-2`}>
                            {edu.degree}
                          </h3>
                          <p className="text-xl text-white font-semibold mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-gray-400 mb-2">📍 {edu.location}</p>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className={`px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full font-bold text-white shadow-lg`}>
                              {edu.period}
                            </span>
                            {edu.year && (
                              <span className="px-4 py-2 bg-blue-500/30 border border-blue-500/50 rounded-full text-blue-300 font-semibold">
                                {edu.year}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3 text-gray-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-blue-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-6xl mx-auto mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">📜</span>
              Certifications & Courses
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <div className="text-5xl mb-4">{cert.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">{cert.platform}</p>
                    <span className="text-xs text-blue-400 font-semibold">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">⚡</span>
              Activities & Involvement
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="text-4xl">{activity.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}