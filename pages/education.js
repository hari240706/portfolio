import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CertificateModal from "../components/CertificateModal";

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const education = [
    {
      id: 1,
      degree: "B.E. Computer Science and Engineering",
      institution: "RMK Engineering College",
      location: "Chennai, India",
      period: "2024 - 2028",
      current: true,
      year: "3rd Year",
      achievements: [
        "Current CGPA: 7.66",
        "Participated in 14 hackathons and innovation challenges",
        "Developed AI, Cybersecurity, and Full-Stack projects",
        "Tech Wing Member at GDG On Campus RMKEC",
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
        "Completed Higher Secondary Education with 72%",
        "Strong foundation in Mathematics and Computer Science",
        "Developed early interest in programming",
      ],
      icon: "📚",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      degree: "Secondary School Education",
      institution: "Shree Niketan Matriculation Higher Secondary School",
      location: "Thiruvallur",
      period: "2021 - 2022",
      current: false,
      achievements: [
        "Completed SSLC with 77%",
        "Built strong academic foundations",
      ],
      icon: "🏫",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const certifications = [
    {
      title: "Programming in Python (A+ Grade)",
      platform: "Sudharsanam IT Academy",
      year: "2024",
      preview: "/certificate-previews/NIIT-Programming-in-Python.jpg",
      pdf: "/certificates/NIIT-Programming-in-Python.pdf",
      icon: "🐍",
    },
    {
      title: "Programming in C & C++ (A Grade)",
      platform: "Sudharsanam IT Academy",
      year: "2024",
      preview: "/certificate-previews/NIIT-Programming-in-C-and-C++.jpg",
      pdf: "/certificates/NIIT-Programming-in-C-and-C++.pdf",
      icon: "💻",
    },
    {
      title: "Graphic Designing Certification",
      platform: "G-Tec Computer Education",
      year: "2019",
      preview: "/certificate-previews/GTEC-Graphic-Designing-Certificate.jpg",
      pdf: "/certificates/GTEC-Graphic-Designing-Certificate.pdf",
      icon: "🎨",
    },
    {
      title: "NCC 'A' Certificate",
      platform: "National Cadet Corps",
      year: "2021",
      preview: "/certificate-previews/NCC-'A'-Certificate.jpg",
      pdf: "/certificates/NCC-'A'-Certificate.pdf",
      icon: "🪖",
    },
    {
      title: "Tritiya Sopan Badge",
      platform: "Bharat Scouts & Guides",
      year: "2022",
      preview: "/certificate-previews/BSG-Tritiya-Sopan-Certificate.jpg",
      pdf: "/certificates/BSG-Tritiya-Sopan-Certificate.pdf",
      icon: "⚜️",
    },
    {
      title: "ISC2 Certified in Cybersecurity (CC)",
      platform: "Currently Preparing",
      year: "2026",
      icon: "🔐",
    },
  ];

  const activities = [
    {
      title: "Hackathons & Innovation Challenges",
      description:
        "Participated in 14 hackathons and innovation challenges including Adobe India Hackathon, Smart India Hackathon 2025, IOB CyberNova Hackathon 2026, Tata Crucible Campus Quiz 2025, and more.",
      icon: "🏆",
    },
    {
      title: "Technical Communities",
      description:
        "Contributing as a Tech Wing Member at GDG On Campus RMKEC and Tech Team Intern at Induskiller.",
      icon: "🌐",
    },
  ];

  const nptelCertificates = [
    {
      title: "Soft Skill Development",
      preview: "/certificate-previews/NPTEL-Soft-Skill-Development.jpg",
      pdf: "/certificates/NPTEL-Soft-Skill-Development.pdf",
    },
    {
      title: "The Joy of Computing Using Python",
      preview: "/certificate-previews/NPTEL-The-Joy-of-Computing-using-Python.jpg",
      pdf: "/certificates/NPTEL-The-Joy-of-Computing-using-Python.pdf",
    },
    {
      title: "Introduction to Internet of Things",
      preview: "/certificate-previews/NPTEL-Introduction-To-Internet-Of-Things.jpg",
      pdf: "/certificates/NPTEL-Introduction-To-Internet-Of-Things.pdf",
    },
  ];

  const ramanujanCertificates = [
    {
      title: "2024 Level 1",
      preview: "/certificate-previews/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2024-Level-1.jpg",
      pdf: "/certificates/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2024-Level-1.pdf",
    },
    {
      title: "2024 Level 2",
      preview: "/certificate-previews/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2024-Level-2.jpg",
      pdf: "/certificates/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2024-Level-2.pdf",
    },
    {
      title: "2026 Level 1",
      preview: "/certificate-previews/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2025-26-Level-1.jpg",
      pdf: "/certificates/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2025-26-Level-1.pdf",
    },
    {
      title: "2026 Level 2",
      preview: "/certificate-previews/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2025-26-Level-2.jpg",
      pdf: "/certificates/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2025-26-Level-2.pdf",
    },
    {
      title: "2026 Level 3",
      preview: "/certificate-previews/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2025-26-Level-3.jpg",
      pdf: "/certificates/National-Level-Srinivasa-Ramanujan-Mathematical-Competitions-2025-26-Level-3.pdf",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black relative overflow-x-hidden pt-24 pb-20">
        
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

        <div className="w-full px-4 md:px-12 lg:px-16 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 pb-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Education
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              My academic journey, certifications, internships, technical communities,
              and milestones shaping my path toward AI and Cybersecurity.
            </p>
          </motion.div>

          {/* Education Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400">7.66</div>
              <p className="text-gray-400 text-sm">Current CGPA</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400">7</div>
              <p className="text-gray-400 text-sm">Internships</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400">14</div>
              <p className="text-gray-400 text-sm">Hackathons</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-center h-full">
              <div className="text-3xl sm:text-4xl font-bold text-green-400">6</div>
              <p className="text-gray-400 text-sm">Certifications</p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="w-full mx-auto mb-16 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">🎓</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 pb-2 inline-block">
                Academic Background
              </span>
            </motion.h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Current Badge */}
                    {edu.current && (
                      <motion.div
                        className="absolute top-4 right-4 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full flex items-center gap-2 z-20"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-semibold">Current</span>
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 text-center sm:text-left">
                        <motion.div
                          className={`text-5xl sm:text-6xl p-3 sm:p-4 bg-gradient-to-br ${edu.color} rounded-2xl flex-shrink-0`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          {edu.icon}
                        </motion.div>
                        
                        <div className="flex-1 w-full">
                          <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${edu.color} mb-2`}>
                            {edu.degree}
                          </h3>
                          <p className="text-lg sm:text-xl text-white font-semibold mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-gray-400 mb-2 text-sm sm:text-base">📍 {edu.location}</p>
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-sm">
                            <span className={`px-4 py-2 bg-gradient-to-r ${edu.color} rounded-full font-bold text-white shadow-lg text-xs sm:text-sm`}>
                              {edu.period}
                            </span>
                            {edu.year && (
                              <span className="px-4 py-2 bg-blue-500/30 border border-blue-500/50 rounded-full text-blue-300 font-semibold text-xs sm:text-sm">
                                {edu.year}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2 mt-4 text-left">
                        {edu.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-3 text-gray-400 text-sm sm:text-base"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
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
          <div className="w-full mx-auto mb-16 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">📜</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 pb-2 inline-block">
                Certifications & Courses
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  onClick={() => {
                    setSelectedCertificate(cert);
                    setModalOpen(true);
                  }}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-5xl mb-4">{cert.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">{cert.platform}</p>
                    </div>
                    <span className="text-xs text-blue-400 font-semibold mt-2">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Learning Roadmap */}
          <div className="w-full mx-auto mb-16 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">🎯</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-500 pb-2 inline-block">
                Current Learning Roadmap
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { icon: "🛡️", title: "Application Security" },
                { icon: "☁️", title: "Cloud Security" },
                { icon: "🔐", title: "ISC2 Certified in Cybersecurity" },
                { icon: "🐧", title: "Linux Administration" },
                { icon: "🐳", title: "Docker & Kubernetes" },
                { icon: "🤖", title: "AI for Security" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center flex flex-col justify-center items-center h-full"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-5xl">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-400 text-sm sm:text-base">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Leadership */}
          <div className="w-full mx-auto mb-16 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">🏅</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-rose-500 pb-2 inline-block">
                Achievements & Leadership
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "🪖",
                  title: "NCC 'A' Certificate",
                  preview: "/certificate-previews/NCC-'A'-Certificate.jpg",
                  pdf: "/certificates/NCC-'A'-Certificate.pdf",
                },
                {
                  icon: "⚜️",
                  title: "Tritiya Sopan Badge",
                  preview: "/certificate-previews/BSG-Tritiya-Sopan-Certificate.jpg",
                  pdf: "/certificates/BSG-Tritiya-Sopan-Certificate.pdf",
                },
                {
                  icon: "🌐",
                  title: "GDG Tech Wing",
                  preview: "/certificate-previews/GDG-RMKEC-Tech-Wing.jpg",
                  pdf: "/certificates/GDG-RMKEC-Tech-Wing.pdf",
                },
                {
                  icon: "💻",
                  title: "Induskiller Intern",
                  preview: "/certificate-previews/Induskiller-Intern.jpg",
                  pdf: "/certificates/Induskiller-Intern.pdf",
                },
                {
                  icon: "🛡️",
                  title: "Cybersecurity Projects",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    if (item.pdf) {
                      setSelectedCertificate({
                        title: item.title,
                        preview: item.preview,
                        pdf: item.pdf,
                      });
                      setModalOpen(true);
                    }
                  }}
                    className={`p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-center items-center h-full ${
                      item.pdf
                        ? "cursor-pointer hover:border-cyan-500/50"
                        : ""
                    }`}
                >
                  <div className="text-5xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-purple-400 text-sm sm:text-base">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internship Journey */}
          <div className="w-full mx-auto mb-16 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">💼</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-500 pb-2 inline-block">
                Internship Journey
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  company: "CodSoft",
                  role: "C++ Programming Intern",
                  duration: "2024",
                  icon: "💻",
                  preview: "/certificate-previews/CodSoft-Intern.jpg",
                  pdf: "/certificates/CodSoft-Intern.pdf",
                },
                {
                  company: "CodeBind Technologies",
                  role: "Web Development Intern",
                  duration: "2025",
                  icon: "🌐",
                  preview: "/certificate-previews/CodeBind-Technologies-Intern.jpg",
                  pdf: "/certificates/CodeBind-Technologies-Intern.pdf",
                },
                {
                  company: "Arttifai Tech",
                  role: "Java Programming Intern",
                  duration: "2025",
                  icon: "☕",
                  preview: "/certificate-previews/Arttifai-Tech-Intern.jpg",
                  pdf: "/certificates/Arttifai-Tech-Intern.pdf",
                },
                {
                  company: "AD Infocom Systems",
                  role: "Cybersecurity Intern",
                  duration: "2026",
                  icon: "🛡️",
                  preview: "/certificate-previews/AD-Infocom-Systems-Intern.jpg",
                  pdf: "/certificates/AD-Infocom-Systems-Intern.pdf",
                },
                {
                  company: "Infosys Springboard Virtual Internship 6.0",
                  role: "Artificial Intelligence Intern",
                  duration: "2026",
                  icon: "🤖",
                  preview: "/certificate-previews/Infosys-Springboard-Internship-6.0.jpg",
                  pdf: "/certificates/Infosys-Springboard-Internship-6.0.pdf",
                },
                {
                  company: "Induskiller",
                  role: "Tech Team Intern",
                  duration: "2026",
                  icon: "⚙️",
                  preview: "/certificate-previews/Induskiller-Intern.jpg",
                  pdf: "/certificates/Induskiller-Intern.pdf",
                },
                {
                  company: "LTI Technology",
                  role: "Software Developer Intern",
                  duration: "2026",
                  icon: "🚀",
                  preview: "/certificate-previews/LTI-Tech-Intern.jpg",
                  pdf: "/certificates/LTI-Tech-Intern.pdf",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  onClick={() => {
                    setSelectedCertificate({
                      title: item.company,
                      preview: item.preview,
                      pdf: item.pdf,
                    });
                    setModalOpen(true);
                  }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="text-5xl mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      {item.company}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">
                      {item.role}
                    </p>
                    <p className="text-blue-400 text-xs mt-2 font-semibold">
                      {item.duration}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        
          {/* Academic & Innovation Projects */}
          <div className="w-full mx-auto mb-16 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">🚀</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 pb-2 inline-block">
                Academic & Innovation Projects
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "AMATIS",
                  type: "AI + Cybersecurity",
                  icon: "🤖",
                },
                {
                  name: "TrustLens AI",
                  type: "Website Threat Detection",
                  icon: "🛡️",
                },
                {
                  name: "Sentinel Log Watch",
                  type: "Offline SIEM",
                  icon: "📊",
                },
                {
                  name: "Scholarship Track Portal",
                  type: "Full Stack Web App",
                  icon: "🎓",
                },
                {
                  name: "Urban Energy Optimization",
                  type: "Smart City Solution",
                  icon: "🌍",
                },
                {
                  name: "AI Resume Builder",
                  type: "Generative AI",
                  icon: "📄",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="text-5xl mb-4">
                      {project.icon}
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    {project.type}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Communities & Hackathons */}
          <div className="w-full mb-16 md:mb-20">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">🌐</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-violet-500 pb-2 inline-block">
                Communities & Hackathons
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 h-full overflow-hidden flex flex-col justify-between">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left h-full">
                      <div className="text-4xl flex-shrink-0">{activity.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {activity.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Recognition */}

          <div className="mb-20">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="mr-2">🏆</span>

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-indigo-500">
                Achievements & Recognition
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* NPTEL Certifications */}

              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => {
                  setSelectedGallery(nptelCertificates);
                  setCurrentIndex(0);

                  setSelectedCertificate(nptelCertificates[0]);
                  setModalOpen(true);
                }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">🎓</div>

                <h3 className="text-xl font-bold text-white-400 mb-3">
                  NPTEL Certifications
                </h3>

                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>⭐ Soft Skill Development (Elite)</li>
                  <li>⭐ The Joy of Computing Using Python (Elite)</li>
                  <li>🥈 Introduction to Internet of Things (Elite + Silver)</li>
                </ul>
              </motion.div>

              {/* Ramanujan Competition */}

              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => {
                  setSelectedGallery(ramanujanCertificates);
                  setCurrentIndex(0);

                  setSelectedCertificate(ramanujanCertificates[0]);
                  setModalOpen(true);
                }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">🧮</div>

                <h3 className="text-xl font-bold text-white-400 mb-3">
                  Ramanujan Mathematical Competition
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Cleared Level 1 in 2024 and participated in Level 2. Cleared Level 1
                  and Level 2 in 2026 and participated in the National Level (Level 3).
                </p>
              </motion.div>

              {/* TechXConf */}

              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => {
                  setSelectedCertificate({
                    title: "TechX AI & Cloud Conference 2024",
                    preview: "/certificate-previews/TechX-AI-&-Cloud-Conference-2024.jpg",
                    pdf: "/certificates/TechX-AI-&-Cloud-Conference-2024.pdf",
                  });
                  setModalOpen(true);
                }}
                className="cursor-pointer p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">🎤</div>

                <h3 className="text-xl font-bold text-white mb-3">
                  TechX AI & Cloud Conference 2024
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Participated in TechX AI & Cloud Conference 2024 held in Chennai, exploring emerging
                  technologies, industry trends, innovation, and networking opportunities
                  with technology professionals.
                </p>
              </motion.div>

            </div>

          </div>

          {/* Highlights */}
          <div className="w-full mx-auto mt-12 mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12 text-center leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl mr-2">🏆</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-teal-500 pb-2 inline-block">
                Highlights
              </span>
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🚀",
                  title: "7 Internships",
                  desc: "Across Software Development, Cybersecurity, Web, Java, and C++",
                },
                {
                  icon: "🌐",
                  title: "GDG Tech Wing",
                  desc: "Active member of GDG On Campus RMKEC",
                  preview: "/certificate-previews/GDG-RMKEC-Tech-Wing.jpg",
                  pdf: "/certificates/GDG-RMKEC-Tech-Wing.pdf",
                },
                {
                  icon: "🤖",
                  title: "Infosys Springboard",
                  desc: "Artificial Intelligence Virtual Internship 6.0",
                  preview: "/certificate-previews/Infosys-Springboard-Internship-6.0.jpg",
                  pdf: "/certificates/Infosys-Springboard-Internship-6.0.pdf",
                },
                {
                  icon: "🏆",
                  title: "13+ Hackathons",
                  desc: "Hackathons, Innovation Challenges, and Competitions",
                },
                {
                  icon: "🤖",
                  title: "AI + Cybersecurity",
                  desc: "Focused on AI for Security and Secure Systems",
                },
                {
                  icon: "🔐",
                  title: "ISC2 CC",
                  desc: "Preparing for Certified in Cybersecurity",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() => {
                    if (item.pdf) {
                      setSelectedCertificate({
                        title: item.title,
                        preview: item.preview,
                        pdf: item.pdf,
                      });
                      setModalOpen(true);
                    }
                  }}
                  className={`p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col justify-between h-full group ${
                    item.pdf
                      ? "cursor-pointer hover:border-cyan-500/50"
                      : ""
                  }`}
                >
                  <div>
                    <div className="text-5xl mb-4">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Objective */}
          <div className="max-w-5xl mx-auto mt-20 pb-8 px-4">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
                🎯 Career Objective
              </h2>
              <p className="text-center text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                My goal is to become an Application Security Engineer while building expertise in Cloud Security and AI-driven Cybersecurity. Through hands-on projects, internships, certifications, hackathons, and community leadership, I aim to contribute to secure and intelligent software systems by the time I graduate in 2028.
              </p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
      <CertificateModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedGallery([]);
          setCurrentIndex(0);
        }}
        certificate={selectedCertificate}
        gallery={selectedGallery}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setSelectedCertificate={setSelectedCertificate}
      />
    </>
  );
}